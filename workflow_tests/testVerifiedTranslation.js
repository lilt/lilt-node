require('dotenv').config();

let AdmZip = require("adm-zip");

function expectUploadResponse(expect, response) {
    expect(response.category).to.equal("API")
    expect(response.createdAt).to.not.be.null
    expect(response.fileHash).to.not.be.null
    expect(response.id).to.not.be.null
    expect(response.name).to.equal("test_file.txt")
    expect(response.updatedAt).to.not.be.null
}

function expectDataSourceResponse(expect, dataSourceObject) {
    expect(dataSourceObject.is_processing).to.equal(null)
    expect(dataSourceObject.name).to.equal("test-memory")
    expect(dataSourceObject.srclang).to.equal("en")
    expect(dataSourceObject.srclocale).to.equal("US")
    expect(dataSourceObject.trglang).to.equal("de")
    expect(dataSourceObject.trglocale).to.equal("DE")
    expect(dataSourceObject.version).to.equal(0)
    expect(dataSourceObject.created_at).to.not.be.null
    expect(dataSourceObject.updated_at).to.not.be.null
    expect(dataSourceObject.id).to.not.be.null
}

function expectCreateJobResponse(expect, createJobResponse) {
    expect(createJobResponse.name).to.equal("test_job")
    expect(createJobResponse.creationStatus).to.equal("COMPLETE")
    expect(createJobResponse.deliveredAt).to.equal(null)
    expect(createJobResponse.status).to.equal("active")
    expect(createJobResponse.due).to.not.be.null
    expect(createJobResponse.id).to.not.be.null
    expect(createJobResponse.isProcessing).to.equal(0)
    expect(createJobResponse.stats.numDeliveredProjects).to.equal(0)
    expect(createJobResponse.stats.percentReviewed).to.equal(0)
    expect(createJobResponse.stats.percentTranslated).to.equal(0)
    expect(createJobResponse.stats.projects).to.be.an('array')
    expect(createJobResponse.stats.uniqueLanguagePairs).to.equal(1)
    expect(createJobResponse.stats.uniqueLinguists).to.equal(0)
    expect(createJobResponse.stats.workflowStatus).to.equal("READY_TO_START")
}

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD.
      define(['expect.js', process.cwd()+'/src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS-like environments that support module.exports, like Node.
      factory(require('expect.js'), require(process.cwd()+'/src/index'));
    } else {
      // Browser globals (root is window)
      factory(root.expect, root.LiltNode);
    }
}(this, function(expect, LiltNode) {
    let defaultClient = LiltNode.ApiClient.instance;
    let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
    defaultClient.defaultHeaders = {
        "x-is-automated-test": "true",
        "x-is-expected-error": "true"
    };
    ApiKeyAuth.apiKey = process.env.API_KEY;
    defaultClient.basePath = process.env.API_HOST;

    describe('VerifiedTranslationWorkflow', () => {
        let fileInstance = new LiltNode.FilesApi(defaultClient);
        let memoryInstance = new LiltNode.MemoriesApi(defaultClient);
        let jobInstance = new LiltNode.JobsApi(defaultClient);

        it(`should translate a file`, async () => {
            let file_name = "test_file.txt"
            let uploadResponse = await fileInstance.uploadFile(file_name, "hello world")
            expectUploadResponse(expect, uploadResponse)
            let fileId = uploadResponse.id
            console.log(`File uploaded with ID: ${fileId}`)

            let dataSourceParameters = {
                "name": "test-memory",
                "srclang": "en",
                "trglang": "de",
                "srclocale": "US",
                "trglocale": "DE"
            }
            let createMemoryBody = new LiltNode.MemoryCreateParameters.constructFromObject(dataSourceParameters)
            let createMemoryData = await memoryInstance.createMemory(createMemoryBody)
            expectDataSourceResponse(expect, createMemoryData)
            let memoryId = createMemoryData.id
            console.log(`Memory created with ID: ${memoryId}`)
            
            let lang = new LiltNode.LanguagePair.constructFromObject({
                "trgLang": createMemoryData.trglang,
                "memoryId": memoryId
            })
            let createJobBody = new LiltNode.JobCreateParameters.constructFromObject({
                "name": "test_job",
                "srcLang": "en",
                "srcLocale": "US",
                "languagePairs": [lang],
                "fileIds": [fileId]
            })
            let createJobResponse = await jobInstance.createJob(createJobBody)
            let jobId = createJobResponse.id
            console.log(`Job created with ID: ${jobId}`)
            expectCreateJobResponse(expect, createJobResponse)

            let numMonitored = 0
            let jobs = []
            while (jobs.length == 0) {
                await new Promise(resolve => setTimeout(resolve, 5000))
                await jobInstance.deliverJob(jobId)
                jobs = await jobInstance.retrieveAllJobs({
                    "isDelivered": "true",
                    "isArchived": "false"
                })
                console.log(`Jobs length: ${jobs.length} || Request No: ${numMonitored}`)
                numMonitored++
                if (numMonitored > 12) {
                    throw new Error("Job creation exceeding time limit")
                }
            }
            expect(jobs.length).to.be.greaterThan(0)

            numMonitored = 0
            await jobInstance.exportJob(jobId, "files")
            let exportJobResponse = await jobInstance.getJob(jobId)
            let isProcessing = exportJobResponse.isProcessing
            while (isProcessing == 1) {
                await new Promise(resolve => setTimeout(resolve, 5000))
                exportJobResponse = await jobInstance.getJob(jobId)
                isProcessing = exportJobResponse.isProcessing
                console.log(`Job status: ${isProcessing} || Request No: ${numMonitored}`)
                numMonitored++
                if (numMonitored > 12) {
                    throw new Error("Job export exceeding time limit")
                }
            }
            
            let downloadJobResponse = await jobInstance.downloadJob(jobId)
            let zip = new AdmZip(downloadJobResponse)
            let zipEntries = zip.getEntries()
            expect(zipEntries.length).to.equal(2)
            let zipContents = zipEntries[1].getData().toString()
            expect(zipContents).to.equal("hello world")

            await jobInstance.archiveJob(jobId)
            let updatedJob = await jobInstance.getJob(jobId)
            expect(updatedJob.status).to.equal("archived")

            await fileInstance.deleteFile(fileId)
            await jobInstance.deleteJob(jobId)
            await memoryInstance.deleteMemory(memoryId)
            
        });
    });
}));
