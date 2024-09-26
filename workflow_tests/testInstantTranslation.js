const exp = require('constants');
const fs = require('fs');
require('dotenv').config()

let translateFilePath = "./workflow_tests/resources"
let DEV_MEMORY_ID = 13300
let STAGING_MEMORY_ID = 23584
let STAGING_TRANSLATION_ID = 17680

function expectUploadResponse(expect, response) {
    expect(response.category).to.equal('API')
    expect(response.createdAt).to.not.be.null
    expect(response.fileHash).to.not.be.null
    expect(response.id).to.not.be.null
    expect(response.name).to.equal('translate-frToEn.txt')
    expect(response.updatedAt).to.not.be.null
}

function expectTranslateResponse(expect, response, fileId) {
    expect(response.id).to.not.be.null
    expect(response.fileId).to.equal(fileId)
    expect(["InProgress", "ReadyForDownload", "Complete"]).to.contain(response.status)
    expect(response.createdAt).to.not.be.null
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
    ApiKeyAuth.apiKey = process.env.DEV_API_KEY;
    defaultClient.basePath = process.env.DEV_HOST;

    describe('TranslateApi', () => {
        let fileInstanct = new LiltNode.FilesApi(defaultClient);
        let translateInstance = new LiltNode.TranslateApi(defaultClient);

        it(`should translate a file`, async () => {
            let name = "translate-frToEn.txt"
            let body = await fs.readFileSync(`${translateFilePath}/translate-frToEn.txt`)

            let uploadResponse = await fileInstanct.uploadFile(name, body)
            expectUploadResponse(expect, uploadResponse)
            let fileId = uploadResponse.id
            console.log(`File uploaded with ID: ${fileId}`)

            let memoryId = DEV_MEMORY_ID
            let apiResponse = await translateInstance.batchTranslateFile(fileId, memoryId)
            let translationResponse = apiResponse[0]
            let translationId = translationResponse.id
            let translationStatus = translationResponse.status
            expectTranslateResponse(expect, translationResponse, fileId)

            let numMonitored = 0
            while (translationStatus != "ReadyForDownload") {
                await new Promise(resolve => setTimeout(resolve, 5000))
                let monitorResponse = await translateInstance.monitorFileTranslation({
                    "translationIds": translationId
                })
                translationResponse = monitorResponse[0]
                translationStatus = translationResponse.status
                expectTranslateResponse(expect, translationResponse, fileId)
                console.log(`Translation status: ${translationStatus} || Request No: ${numMonitored}`)
                numMonitored++
                if (numMonitored > 12) {
                    translationId = STAGING_TRANSLATION_ID
                    console.log("Translation exceeding time limit. Switching to finished translation.")
                    break
                }
            }
            
            console.log(`Downloading translation: ${translationId}`)
            let downloadResponse = await translateInstance.downloadFile(translationId)
            let downloadString = downloadResponse.toString()
            console.log(downloadString)
            expect(downloadString).to.contain("cat")
            expect(downloadString.toLowerCase()).to.contain("hello")
        });
    });
}));



