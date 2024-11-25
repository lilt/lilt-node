const forEach = require('mocha-each');
const fs = require('fs');
require('dotenv').config();

let createDataSourceCases = [
    "noneSrc",
    "noneTrg",
    "noneBoth",
    "english",
    "nonEnglish",
    "sourceIsTarget",
    "unsupportedLanguages"
]

let tmxFileCases = [
    "wrongData",
    "normal"
]

function getDataSourceParameters(dataSourceCase) {
    switch (dataSourceCase) {
        case "noneSrc":
            return {
                "name": "test-non-src",
                "srclang": null,
                "trglang": "en",
                "srclocale": "US",
                "trglocale": null
            }
        case "noneTrg":
            return {
                "name": "test-none-trg",
                "srclang": "en",
                "trglang": null,
                "srclocale": "US",
                "trglocale": null
            }
        case "noneBoth":
            return {
                "name": "test-none-both",
                "srclang": null,
                "trglang": null,
                "srclocale": "US",
                "trglocale": null
            }
        case "english":
            return {
                "name": "test-english",
                "srclang": "en",
                "trglang": "es",
                "srclocale": "US",
                "trglocale": null
            }
        case "nonEnglish":
            return {
                "name": "test-non-english",
                "srclang": "de",
                "trglang": "fr",
                "srclocale": "DE",
                "trglocale": "FR"
            }
        case "sourceIsTarget":
            return {
                "name": "test-source-is-target",
                "srclang": "fr",
                "trglang": "fr",
                "srclocale": "FR",
                "trglocale": "FR"
            }
        case "unsupportedLanguages":
            return {
                "name": "test-unsupported-languages",
                "srclang": "ac",
                "trglang": "ad",
                "srclocale": null,
                "trglocale": null
            }
        case "frToEn":
            return {
                "name": "test-fr-to-en",
                "srclang": "fr",    
                "trglang": "en",
                "srclocale": "FR",
                "trglocale": "US"
            }
    }
}

function getTmxSettings(tmxFileCase) {
    switch (tmxFileCase) {
        case "wrongData":
            return {
                "name": "getDocuments.json",
                "body": "./workflow_tests/resources/getDocuments.json"
            }
        case "normal":
            return {
                "name": "frToEn.tmx",
                "body": "./workflow_tests/resources/test-frToEn.tmx"
            }
    }
}

function getExpectedDataSource(dataSourceCase) {
    switch (dataSourceCase) {
        case "english":
            return {
                "isProcessing": null,
                "name": "test-english",
                "srclang": "en",
                "srclocale": "US",
                "trglang": "es",
                "trglocale": null,
                "version": 0
            }
        case "nonEnglish":
            return {
                "isProcessing": null,
                "name": "test-non-english",
                "srclang": "de",
                "srclocale": "DE",
                "trglang": "fr",
                "trglocale": "FR",
                "version": 0
            }
        case "sourceIsTarget":
            return {
                "isProcessing": null,
                "name": "test-source-is-target",
                "srclang": "fr",
                "srclocale": "FR",
                "trglang": "fr",
                "trglocale": "FR",
                "version": 0
            }
        case "frToEn":
            return {
                "isProcessing": null,
                "name": "test-fr-to-en",
                "srclang": "fr",
                "srclocale": "FR",
                "trglang": "en",
                "trglocale": "US",
                "version": 0
            }
    }
}

function getExpectedQuery() {
    return {
        "metadata": {
            "resourceName": "frToEn.tmx",
            "userEmail": ["apikeyuser", "@lilt.com"]
        }, 
        "score": 100,
        "source": "chatte",
        "target": "cat"
    }
}

function expectDataSourceResponse(expect, dataSourceObject, expected) {
    expect(dataSourceObject.is_processing).to.equal(expected["isProcessing"])
    expect(dataSourceObject.name).to.equal(expected["name"])
    expect(dataSourceObject.srclang).to.equal(expected["srclang"])
    expect(dataSourceObject.srclocale).to.equal(expected["srclocale"])
    expect(dataSourceObject.trglang).to.equal(expected["trglang"])
    expect(dataSourceObject.trglocale).to.equal(expected["trglocale"])
    expect(dataSourceObject.version).to.equal(expected["version"])
    expect(dataSourceObject.created_at).to.not.be.null
    expect(dataSourceObject.updated_at).to.not.be.null
    expect(dataSourceObject.id).to.not.be.null
}

function expectQueryResponse(expect, queryObject, expected) {
    let metadata = queryObject.metadata
    let expected_metadata = expected["metadata"]
    expect(metadata["resource_name"]).to.equal(expected_metadata["resourceName"])
    expect(metadata["user_email"]).to.match(new RegExp(expected_metadata["userEmail"][0] + ".*" + expected_metadata["userEmail"][1]))
    expect(metadata["created_at"]).to.not.be.null
    expect(queryObject.score).to.equal(expected["score"])
    expect(queryObject.source).to.equal(expected["source"])
    expect(queryObject.target).to.equal(expected["target"])
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

    describe('DataSourceWorkflow', () => {
        describe('createMemory', () => {
            forEach(createDataSourceCases)
            .it('should create a data source with %s parameters', async (dataSourceCase) => {
                let apiInstance = new LiltNode.MemoriesApi();
                let dataSourceParameters = getDataSourceParameters(dataSourceCase);
                let body = new LiltNode.MemoryCreateParameters.constructFromObject(dataSourceParameters)
                try {
                    let data = await apiInstance.createMemory(body)
                    expectDataSourceResponse(expect, data, getExpectedDataSource(dataSourceCase))
                    await apiInstance.deleteMemory(data.id)
                } catch (e) {
                    if (["noneSrc", "noneTrg", "noneBoth", "unsupportedLanguages"].includes(dataSourceCase)) {
                        expect(e.status).to.equal(400)
                    } else {
                        throw e
                    }
                }
            });
        });
        describe('importMemoryFile', () => {
            forEach(tmxFileCases)
            .it('should upload a TMX file with %s data', async (tmxFileCase) => {
                let apiInstance = new LiltNode.MemoriesApi();
                let dataSourceParameters = getDataSourceParameters("frToEn");
                let body = new LiltNode.MemoryCreateParameters.constructFromObject(dataSourceParameters)
                let createMemoryData = await apiInstance.createMemory(body)
                expectDataSourceResponse(expect, createMemoryData, getExpectedDataSource("frToEn"))
                let memoryId = createMemoryData.id
                console.log(`Memory ID: ${memoryId}`)
                
                let tmxSettings = getTmxSettings(tmxFileCase);
                let fileBody = await fs.readFileSync(tmxSettings["body"])
                let fileUploadData = await apiInstance.importMemoryFile(memoryId, tmxSettings["name"], fileBody)
                let isProcessing = fileUploadData.isProcessing
                expect(fileUploadData.id).to.equal(memoryId)
                expect(isProcessing).to.equal(1)

                let numMonitored = 0
                while (isProcessing == 1) {
                    await new Promise(resolve => setTimeout(resolve, 5000))
                    let monitorResponse = await apiInstance.getMemory(memoryId);
                    isProcessing = monitorResponse.isProcessing
                    console.log(`Memory status: ${isProcessing} || Request No: ${numMonitored}`)
                    numMonitored++
                    if (numMonitored > 20) {
                        console.log("Memory import exceeding time limit. Failing test")
                        throw new Error("Memory import exceeding time limit")
                    }
                }

                let query = "chatte"
                let queryData = await apiInstance.queryMemory(memoryId, query)
                if (tmxFileCase == "wrongData") {
                    expect(queryData.length).to.equal(0)
                } else {
                    expect(queryData.length).to.be.greaterThan(0)
                    expectQueryResponse(expect, queryData[0], getExpectedQuery())
                }
                await apiInstance.deleteMemory(memoryId)
            });
        });
    });
}));
