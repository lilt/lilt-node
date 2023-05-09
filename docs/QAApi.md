# LiltNode.QAApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**qaCheck**](QAApi.md#qaCheck) | **GET** /qa | Perform QA check



## qaCheck

> QARuleMatches qaCheck(target, trglang, opts)

Perform QA check

Perform QA checks on a target string. Optionally, you can specify a source string for additional bilingual checks, e.g. number consistency. 

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.QAApi();
let target = "target_example"; // String | A target string to be checked.
let trglang = "trglang_example"; // String | An ISO 639-1 language code.
let opts = {
  'source': "source_example", // String | An optional source string.
  'srclang': "srclang_example", // String | An ISO 639-1 language code.
  'memoryId': 56 // Number | Any custom rules defined for this Memory will also be applied as part of the QA check. 
};
apiInstance.qaCheck(target, trglang, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **String**| A target string to be checked. | 
 **trglang** | **String**| An ISO 639-1 language code. | 
 **source** | **String**| An optional source string. | [optional] 
 **srclang** | **String**| An ISO 639-1 language code. | [optional] 
 **memoryId** | **Number**| Any custom rules defined for this Memory will also be applied as part of the QA check.  | [optional] 

### Return type

[**QARuleMatches**](QARuleMatches.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

