# LiltNode.LexiconApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryLexicon**](LexiconApi.md#queryLexicon) | **GET** /lexicon | Query a Lexicon
[**updateLexicon**](LexiconApi.md#updateLexicon) | **POST** /lexicon | Update a Lexicon



## queryLexicon

> [LexiconEntry] queryLexicon(memoryId, srclang, trglang, query, opts)

Query a Lexicon

Query the Lexicon. The Lexicon is an editable termbase / concordance that is integrated with the Memory.  

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

let apiInstance = new LiltNode.LexiconApi();
let memoryId = 56; // Number | A unique Memory identifier.
let srclang = "srclang_example"; // String | An ISO 639-1 language code.
let trglang = "trglang_example"; // String | An ISO 639-1 language code.
let query = "query_example"; // String | The query term.
let opts = {
  'n': 1 // Number | The maximum number of results to return.
};
apiInstance.queryLexicon(memoryId, srclang, trglang, query, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memoryId** | **Number**| A unique Memory identifier. | 
 **srclang** | **String**| An ISO 639-1 language code. | 
 **trglang** | **String**| An ISO 639-1 language code. | 
 **query** | **String**| The query term. | 
 **n** | **Number**| The maximum number of results to return. | [optional] [default to 1]

### Return type

[**[LexiconEntry]**](LexiconEntry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLexicon

> LexiconUpdateResponse updateLexicon(body)

Update a Lexicon

Update the Lexicon (Termbase as displayed in the ui) with a new term. The maximum source length is 250 characters.  

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

let apiInstance = new LiltNode.LexiconApi();
let body = new LiltNode.LexiconUpdateParameters(); // LexiconUpdateParameters | 
apiInstance.updateLexicon(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LexiconUpdateParameters**](LexiconUpdateParameters.md)|  | 

### Return type

[**LexiconUpdateResponse**](LexiconUpdateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

