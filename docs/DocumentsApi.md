# LiltNode.DocumentsApi

All URIs are relative to *https://api.lilt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadDocument**](DocumentsApi.md#downloadDocument) | **GET** /v2/documents/files | Download a Document
[**uploadDocument**](DocumentsApi.md#uploadDocument) | **POST** /v2/documents/files | Upload a File



## downloadDocument

> Blob downloadDocument(id, opts)

Download a Document

Export a Document that has been translated in the Lilt web application. Any Document can be downloaded in XLIFF 1.2 format, or can be retrieved in its original uploaded format by setting &#x60;is_xliff&#x3D;false&#x60;. This endpoint will fail if either (a) export or (b) pre-translation operations are in-progress. The status of those operations can be determined by retrieving the Document resource. Example CURL command: &#x60;&#x60;&#x60;bash   curl -X GET https://api.lilt.com/v2/documents/files?key&#x3D;API_KEY&amp;id&#x3D;274 -o from_lilt.xliff &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.DocumentsApi();
let id = 56; // Number | An unique Document identifier.
let opts = {
  'isXliff': true // Boolean | Download the document in XLIFF 1.2 format.
};
apiInstance.downloadDocument(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| An unique Document identifier. | 
 **isXliff** | **Boolean**| Download the document in XLIFF 1.2 format. | [optional] [default to true]

### Return type

**Blob**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, text/plain, 


## uploadDocument

> DocumentWithSegments uploadDocument(name, projectId, body, opts)

Upload a File

Create a Document from a file in any of the formats [documented in our knowledge base](https://support.lilt.com/hc/en-us/articles/360020816253-File-Formats). Request parameters should be passed as JSON object with the header field &#x60;LILT-API&#x60;.  File names in the header can only contain [US-ASCII characters](https://en.wikipedia.org/wiki/ASCII). File names with characters outside of US-ASCII should be [URI encoded](https://en.wikipedia.org/wiki/Percent-encoding) or transliterated to US-ASCII strings.  Example CURL command: &#x60;&#x60;&#x60;bash   curl -X POST https://api.lilt.com/v2/documents/files?key&#x3D;API_KEY \\   --header \&quot;LILT-API: {\\\&quot;name\\\&quot;: \\\&quot;introduction.xliff\\\&quot;,\\\&quot;pretranslate\\\&quot;: \\\&quot;tm+mt\\\&quot;,\\\&quot;project_id\\\&quot;: 9}\&quot; \\   --header \&quot;Content-Type: application/octet-stream\&quot; \\   --data-binary @Introduction.xliff &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.DocumentsApi();
let name = "name_example"; // String | A file name.
let projectId = 56; // Number | A unique Project identifier.
let body = "/path/to/file"; // File | The file contents to be uploaded. The entire POST body will be treated as the file. 
let opts = {
  'pretranslate': "pretranslate_example", // String | An optional parameter indicating if and how the document will be pretranslated upon being uploaded. The accepted values are `TM`, or `TM+MT` 
  'autoAccept': true, // Boolean | An optional parameter to auto-accept segments with 100% translation memory matches when the `pretranslate` option is also set, or to auto-accept any target data that is present when the uploaded file is XLIFF. If omitted it will default to your organization settings for `Accept and lock exact matches`, if set to `false`, no segments will be auto-accepted. 
  'caseSensitive': true, // Boolean | An optional parameter to use case sensitive translation memory matching when the `pretranslate` option is also enabled. Matches must have identical character-by-character case to qualify as matches. Default value matches your organization settings for `Use case sensitive translation memory matching` setting 
  'matchAttribution': true, // Boolean | An optional parameter to attribute translation authorship of exact matches to the author of the file when the `pretranslate` option is also enabled. Default value matches your organization settings for `Translation authorship` setting 
  'configId': 56 // Number | An optional pararameter to specify an import configuration to be applied when extracting translatable content from this file. 
};
apiInstance.uploadDocument(name, projectId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| A file name. | 
 **projectId** | **Number**| A unique Project identifier. | 
 **body** | **File**| The file contents to be uploaded. The entire POST body will be treated as the file.  | 
 **pretranslate** | **String**| An optional parameter indicating if and how the document will be pretranslated upon being uploaded. The accepted values are &#x60;TM&#x60;, or &#x60;TM+MT&#x60;  | [optional] 
 **autoAccept** | **Boolean**| An optional parameter to auto-accept segments with 100% translation memory matches when the &#x60;pretranslate&#x60; option is also set, or to auto-accept any target data that is present when the uploaded file is XLIFF. If omitted it will default to your organization settings for &#x60;Accept and lock exact matches&#x60;, if set to &#x60;false&#x60;, no segments will be auto-accepted.  | [optional] 
 **caseSensitive** | **Boolean**| An optional parameter to use case sensitive translation memory matching when the &#x60;pretranslate&#x60; option is also enabled. Matches must have identical character-by-character case to qualify as matches. Default value matches your organization settings for &#x60;Use case sensitive translation memory matching&#x60; setting  | [optional] 
 **matchAttribution** | **Boolean**| An optional parameter to attribute translation authorship of exact matches to the author of the file when the &#x60;pretranslate&#x60; option is also enabled. Default value matches your organization settings for &#x60;Translation authorship&#x60; setting  | [optional] 
 **configId** | **Number**| An optional pararameter to specify an import configuration to be applied when extracting translatable content from this file.  | [optional] 

### Return type

[**DocumentWithSegments**](DocumentWithSegments.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json, application/octet-stream, text/plain

