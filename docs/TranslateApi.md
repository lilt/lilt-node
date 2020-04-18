# LiltNode.TranslateApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registerSegment**](TranslateApi.md#registerSegment) | **GET** /translate/register | Register a segment
[**translateSegment**](TranslateApi.md#translateSegment) | **GET** /translate | Translate a segment



## registerSegment

> TranslateRegisterResponse registerSegment(source, srclang, trglang)

Register a segment

Register a source string for interactive translation. The &#x60;source_hash&#x60; value that is returned by this request is required by the &#x60;prefix&#x60; parameter for the translation endpoint. The maximum source length is 5,000 characters. Usage charges apply to this endpoint for production REST API keys.  

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

let apiInstance = new LiltNode.TranslateApi();
let source = "source_example"; // String | A source string to be registered.
let srclang = "srclang_example"; // String | An ISO 639-1 language code.
let trglang = "trglang_example"; // String | An ISO 639-1 language code.
apiInstance.registerSegment(source, srclang, trglang).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**| A source string to be registered. | 
 **srclang** | **String**| An ISO 639-1 language code. | 
 **trglang** | **String**| An ISO 639-1 language code. | 

### Return type

[**TranslateRegisterResponse**](TranslateRegisterResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## translateSegment

> TranslationList translateSegment(memoryId, opts)

Translate a segment

Translate a source string.  Setting the &#x60;rich&#x60; parameter to &#x60;true&#x60; will change the response format to include additional information about each translation including a model score, word alignments,  and formatting information. The rich format can be seen in the example response on this page.  By default, this endpoint also returns translation memory (TM) fuzzy matches, along with associated scores. Fuzzy matches always appear ahead of machine translation output in the response.  The maximum source length is 5,000 characters.  Usage charges apply to this endpoint for production REST API keys.  

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

let apiInstance = new LiltNode.TranslateApi();
let memoryId = 56; // Number | A unique Memory identifier.
let opts = {
  'source': "source_example", // String | The source text to be translated.
  'sourceHash': 56, // Number | A source hash code.
  'prefix': "prefix_example", // String | A target prefix.
  'n': 1, // Number | Return top n translations.
  'rich': false, // Boolean | Returns rich translation information (e.g., with word alignments).
  'tmMatches': true // Boolean | Include translation memory fuzzy matches.
};
apiInstance.translateSegment(memoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memoryId** | **Number**| A unique Memory identifier. | 
 **source** | **String**| The source text to be translated. | [optional] 
 **sourceHash** | **Number**| A source hash code. | [optional] 
 **prefix** | **String**| A target prefix. | [optional] 
 **n** | **Number**| Return top n translations. | [optional] [default to 1]
 **rich** | **Boolean**| Returns rich translation information (e.g., with word alignments). | [optional] [default to false]
 **tmMatches** | **Boolean**| Include translation memory fuzzy matches. | [optional] [default to true]

### Return type

[**TranslationList**](TranslationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

