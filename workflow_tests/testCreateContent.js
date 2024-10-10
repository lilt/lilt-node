require('dotenv').config()

let signCases = [
  "none",
  "signed",
  "unsigned",
  "nonBoolean1",
  "nonBoolean0",
];

let generateContentCharCases = [
    "none", 
    "normal", 
    "over500", 
    "nonString"
];

let generateContentSectionsCases = [
  "none",
  "one",
  "multiple",
  "nonList",
  "nonStringElements",
];

function getSign(signCase) {
  switch (signCase) {
    case "none":
      return null;
    case "unsigned":
      return false;
    case "signed":
      return true;
    case "nonBoolean1":
      return 1;
    case "nonBoolean0":
      return 0;
  }
}

function getSummary(charCase) {
  switch (charCase) {
    case "none":
      return "";
    case "normal":
      return "a blog post about how important bees are to my honey farm";
    case "over500":
      return "a blog post about how important bees are to my honey farm" * 10;
    case "nonString":
      return 1;
  }
}

function getSection(sectionCase) {
  switch (sectionCase) {
    case "none":
      return [];
    case "one":
      return ["Bees and me"];
    case "multiple":
      return ["Bees and me", "Honey for you", "Conclusion"];
    case "nonList":
      return 1;
    case "nonStringElements":
      return [1, 2];
  }
}

function expectedChars(charCase) {
  switch (charCase) {
    case "none":
      return {
        language: "en-US",
        preferences: null,
        template: "blog-post",
        templateParams: {
          contentLength: 1000,
          language: "en-US",
          sections: "['Bees and me', 'Honey for you', 'Conclusion']",
          summary: "",
        },
      };
    case "normal":
      return {
        language: "en-US",
        preferences: null,
        template: "blog-post",
        templateParams: {
          contentLength: 1000,
          language: "en-US",
          sections: "['Bees and me', 'Honey for you', 'Conclusion']",
          summary: "a blog post about how important bees are to my honey farm",
        },
      };
    case "over500":
      return {
        language: "en-US",
        preferences: null,
        template: "blog-post",
        templateParams: {
          contentLength: 1000,
          language: "en-US",
          sections: "['Bees and me', 'Honey for you', 'Conclusion']",
          summary: `a blog post about how important bees are to 
                                my honey farma blog post about how important 
                                bees are to my honey farma blog post about 
                                how important bees are to my honey farma blog 
                                post about how important bees are to my honey 
                                farma blog post about how important bees are 
                                to my honey farma blog post about how 
                                important bees are to my honey farma blog 
                                post about how important bees are to my honey 
                                farma blog post about how important bees are 
                                to my honey farma blog post about how 
                                important bees are to my honey farma blog 
                                post about how important bees are to my honey 
                                farm`,
        },
      };
    case "nonString":
      return {
        language: "en-US",
        preferences: null,
        template: "blog-post",
        templateParams: {
          contentLength: 1000,
          language: "en-US",
          sections: "['Bees and me', 'Honey for you', 'Conclusion']",
          summary: "1",
        },
      };
  }
}

function expectedSection(sectionCase) {
  switch (sectionCase) {
    case "none":
      return {
        language: "en-US",
        preferences: null,
        template: "blog-post",
        templateParams: {
          contentLength: 1000,
          language: "en-US",
          sections: "[]",
          summary: "a blog post about how important bees are to my honey farm",
        },
      };
    case "one":
      return {
        language: "en-US",
        preferences: null,
        template: "blog-post",
        templateParams: {
          contentLength: 1000,
          language: "en-US",
          sections: "['Bees and me']",
          summary: "a blog post about how important bees are to my honey farm",
        },
      };
    case "multiple":
      return {
        language: "en-US",
        preferences: null,
        template: "blog-post",
        templateParams: {
          contentLength: 1000,
          language: "en-US",
          sections: "['Bees and me', 'Honey for you', 'Conclusion']",
          summary: "a blog post about how important bees are to my honey farm",
        },
      };
    case "nonList":
      return {
        language: "en-US",
        preferences: null,
        template: "blog-post",
        templateParams: {
          contentLength: 1000,
          language: "en-US",
          sections: "1",
          summary: "a blog post about how important bees are to my honey farm",
        },
      };
    case "nonStringElements":
      return {
        language: "en-US",
        preferences: null,
        template: "blog-post",
        templateParams: {
          contentLength: 1000,
          language: "en-US",
          sections: "[1, 2]",
          summary: "a blog post about how important bees are to my honey farm",
        },
      };
  }
}

function expectResponse(expect, createContentObj, expected) {
  expect(createContentObj.language).to.equal(expected["language"]);
  expect(createContentObj.template).to.equal(expected["template"]);
  let templateParams = createContentObj.templateParams;
  expect(templateParams.contentLength).to.equal(templateParams["contentLength"]);
  expect(templateParams.language).to.equal(templateParams["language"]);
  expect(templateParams.sections).to.equal(templateParams["sections"]);
  expect(templateParams.summary).to.equal(templateParams["summary"]);
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
    ApiKeyAuth.apiKey = process.env.API_KEY;
    defaultClient.basePath = process.env.API_HOST;

    describe("CreateApi", () => {
      describe("sign Lilt Terms and Conditions", () => {
          signCases.forEach(function (signCase) {
              it(`should sign terms and conditions for ${signCase}`, async () => {
                  let apiInstance = new LiltNode.CreateApi();
                  let sign = getSign(signCase);
                  let signedAgreement = new LiltNode.CreateConverterConfigParameters(sign);
                  try {
                      let data = await apiInstance.signLiltCreateTerms(signedAgreement);
                      expect(data.signedAgreement).to.be(Boolean(sign));
                  } catch (error) {
                      if (signCase === "none") {
                          return
                      } else {
                          console.log(error);
                          throw error
                      }
                  }
              });
          });
      });
      describe("generate Lilt Create content", () => {
        generateContentCharCases.forEach(function (charCase) {
          it(`should generate content with ${charCase} characters`, async () => {
              let apiInstance = new LiltNode.CreateApi();
              let signedAgreement = new LiltNode.CreateConverterConfigParameters(true);
              await apiInstance.signLiltCreateTerms(signedAgreement);
              let requestBody = new LiltNode.LiltCreateContent.constructFromObject({
                  language: "en-US",
                  template: "blog-post",
                  templateParams: {
                    contentLength: 1000,
                    language: "en-US",
                    summary: getSummary(charCase),
                    sections: ["Bees and me", "Honey for you", "Conclusion"]
                  },
                  preferences: {
                    tone: "formal"
                  }
              });
              await apiInstance.generateLiltCreateContent(requestBody)
              let data = await apiInstance.getLiltCreateContent(requestBody);
              let createContentObjs = data.contents;
              let createContentObj = createContentObjs[createContentObjs.length - 1]
              expectResponse(expect, createContentObj, expectedChars(charCase));
          });
        });
        generateContentSectionsCases.forEach(function (sectionCase) {
          it(`should generate content with specified ${sectionCase} sections`, async () => {
              let apiInstance = new LiltNode.CreateApi();
              let signedAgreement = new LiltNode.CreateConverterConfigParameters(true);
              await apiInstance.signLiltCreateTerms(signedAgreement);
              let requestBody = new LiltNode.LiltCreateContent.constructFromObject({
                language: "en-US",
                template: "blog-post",
                templateParams: {
                  contentLength: 1000,
                  language: "en-US",
                  summary: "a blog post about how important bees are to my honey farm",
                  sections: getSection(sectionCase),
                },
                preferences: {
                  tone: "formal"
                }
            });
              await apiInstance.generateLiltCreateContent(requestBody)
              let data = await apiInstance.getLiltCreateContent();
              let createContentObjs = data.contents;
              let createContentObj = createContentObjs[createContentObjs.length - 1]
              expectResponse(expect, createContentObj, expectedSection(sectionCase));
          });
        });
      });
    });
}));
