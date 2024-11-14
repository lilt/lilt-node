# LiltNode.TranslateApi

All URIs are relative to *https://api.lilt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchTranslateFile**](TranslateApi.md#batchTranslateFile) | **POST** /v2/translate/file | Translate a File
[**downloadFile**](TranslateApi.md#downloadFile) | **GET** /v2/translate/files | Download translated file
[**monitorFileTranslation**](TranslateApi.md#monitorFileTranslation) | **GET** /v2/translate/file | Monitor file translation
[**translateSegmentPost**](TranslateApi.md#translateSegmentPost) | **POST** /v2/translate | Translate a segment



## batchTranslateFile

> [TranslationInfo] batchTranslateFile(fileId, memoryId, opts)

Translate a File

Start machine translation of one or more Files that have previously been uploaded.  The response will include an &#x60;id&#x60; parameter that can be used to monitor and download the translations in subsequent calls.  Example CURL: &#x60;&#x60;&#x60;bash curl -X POST &#39;https://api.lilt.com/v2/translate/file?key&#x3D;API_KEY&amp;fileId&#x3D;583&amp;memoryId&#x3D;2495&amp;configId&#x3D;123&amp;withTM&#x3D;true&#39; &#x60;&#x60;&#x60;  

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
let fileId = "fileId_example"; // String | List of File ids to be translated, comma separated.
let memoryId = "memoryId_example"; // String | Id of Memory to use in translation.
let opts = {
  'configId': 3.4, // Number | An optional pararameter to specify an import configuration to be applied when extracting translatable content from this file.
  'withTM': true // Boolean | An optional boolean parameter to toggle the use of Translation Memory in the translation of the file.
};
apiInstance.batchTranslateFile(fileId, memoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| List of File ids to be translated, comma separated. | 
 **memoryId** | **String**| Id of Memory to use in translation. | 
 **configId** | **Number**| An optional pararameter to specify an import configuration to be applied when extracting translatable content from this file. | [optional] 
 **withTM** | **Boolean**| An optional boolean parameter to toggle the use of Translation Memory in the translation of the file. | [optional] 

### Return type

[**[TranslationInfo]**](TranslationInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream, text/plain


## downloadFile

> Blob downloadFile(id)

Download translated file

Download a translated File.  Example CURL: &#x60;&#x60;&#x60;bash curl -X GET &#39;https://api.lilt.com/v2/translate/files?key&#x3D;API_KEY&amp;id&#x3D;1&#39; &#x60;&#x60;&#x60;  

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
let id = "id_example"; // String | A translation id.
apiInstance.downloadFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A translation id. | 

### Return type

**Blob**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, text/plain, application/json


## monitorFileTranslation

> [TranslationInfo] monitorFileTranslation(opts)

Monitor file translation

Get information about the one or more Files that are being translated with machine translation. Query filters are optional but at least one must be provided.  Example CURL: &#x60;&#x60;&#x60;bash curl -X GET &#39;https://api.lilt.com/v2/translate/file?key&#x3D;API_KEY&amp;translationIds&#x3D;1,2&amp;fromTime&#x3D;1607966744&amp;toTime&#x3D;1707966744&amp;status&#x3D;InProgress&#39; &#x60;&#x60;&#x60;  

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
let opts = {
  'translationIds': "translationIds_example", // String | List of translation ids, comma separated
  'status': "status_example", // String | One of the translation statuses - `InProgress`, `Completed`, `Failed`, `ReadyForDownload`
  'fromTime': 3.4, // Number | Results after this time (inclusive) will be returned, specified as seconds since the Unix epoch.
  'toTime': 3.4 // Number | Results before this time (exclusive) will be returned, specified as seconds since the Unix epoch.
};
apiInstance.monitorFileTranslation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translationIds** | **String**| List of translation ids, comma separated | [optional] 
 **status** | **String**| One of the translation statuses - &#x60;InProgress&#x60;, &#x60;Completed&#x60;, &#x60;Failed&#x60;, &#x60;ReadyForDownload&#x60; | [optional] 
 **fromTime** | **Number**| Results after this time (inclusive) will be returned, specified as seconds since the Unix epoch. | [optional] 
 **toTime** | **Number**| Results before this time (exclusive) will be returned, specified as seconds since the Unix epoch. | [optional] 

### Return type

[**[TranslationInfo]**](TranslationInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream, text/plain


## translateSegmentPost

> TranslationList translateSegmentPost(opts)

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
let opts = {
  'body': new LiltNode.TranslateSegmentBody() // TranslateSegmentBody | 
};
apiInstance.translateSegmentPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TranslateSegmentBody**](TranslateSegmentBody.md)|  | [optional] 

### Return type

[**TranslationList**](TranslationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/octet-stream, text/plain

