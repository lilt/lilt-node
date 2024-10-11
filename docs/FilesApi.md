# LiltNode.FilesApi

All URIs are relative to *https://api.lilt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLabel**](FilesApi.md#addLabel) | **POST** /v2/files/labels | Add Label to File
[**deleteFile**](FilesApi.md#deleteFile) | **DELETE** /v2/files | Delete a File
[**download**](FilesApi.md#download) | **GET** /v2/files/download | Download file
[**getFiles**](FilesApi.md#getFiles) | **GET** /v2/files | Retrieve a File
[**removeLabel**](FilesApi.md#removeLabel) | **DELETE** /v2/files/labels | Remove Label from File
[**uploadFile**](FilesApi.md#uploadFile) | **POST** /v2/files | Upload a File



## addLabel

> addLabel(id, name)

Add Label to File

Add a label to a File.  Example CURL: &#x60;&#x60;&#x60;bash curl -X POST &#39;https://api.lilt.com/v2/files/labels?key&#x3D;API_KEY&amp;id&#x3D;1&#39; --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{     \&quot;name\&quot;: \&quot;label_name\&quot; }&#39; &#x60;&#x60;&#x60; 

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

let apiInstance = new LiltNode.FilesApi();
let id = "id_example"; // String | A File id.
let name = new LiltNode.AddFileLabelRequest(); // AddFileLabelRequest | 
apiInstance.addLabel(id, name).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A File id. | 
 **name** | [**AddFileLabelRequest**](AddFileLabelRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteFile

> FileDeleteResponse deleteFile(id)

Delete a File

Delete a File.  Example CURL command: &#x60;&#x60;&#x60;bash   curl -X DELETE https://api.lilt.com/v2/files?key&#x3D;API_KEY&amp;id&#x3D;123  &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.FilesApi();
let id = 56; // Number | A unique File identifier.
apiInstance.deleteFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique File identifier. | 

### Return type

[**FileDeleteResponse**](FileDeleteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## download

> Blob download(id)

Download file

Download a File.  Example CURL: &#x60;&#x60;&#x60;bash curl -X GET &#39;https://api.lilt.com/v2/files/download?key&#x3D;API_KEY&amp;id&#x3D;1&#39; &#x60;&#x60;&#x60; 

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

let apiInstance = new LiltNode.FilesApi();
let id = "id_example"; // String | A File id.
apiInstance.download(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A File id. | 

### Return type

**Blob**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## getFiles

> [SourceFile] getFiles(opts)

Retrieve a File

Retrieves one or more files available to your user. Files are not associated with a project or a memory. They are unprocessed and can be used later in the project/document creation workflow step.  To retrieve a specific file, specify the &lt;strong&gt;id&lt;/strong&gt; request parameter. To retrieve all files, omit the &lt;strong&gt;id&lt;/strong&gt; request parameter.  Example CURL command: &#x60;&#x60;&#x60;bash  curl -X GET https://api.lilt.com/v2/files?key&#x3D;API_KEY&amp;id&#x3D;274 &#x60;&#x60;&#x60;

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

let apiInstance = new LiltNode.FilesApi();
let opts = {
  'id': 56, // Number | A unique File identifier.
  'labels': ["null"] // [String] | One or more labels. This will return the files which contain all of the given labels. 
};
apiInstance.getFiles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique File identifier. | [optional] 
 **labels** | [**[String]**](String.md)| One or more labels. This will return the files which contain all of the given labels.  | [optional] 

### Return type

[**[SourceFile]**](SourceFile.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeLabel

> removeLabel(id, name)

Remove Label from File

Remove a label from a File.  Example CURL: &#x60;&#x60;&#x60;bash curl -X DELETE &#39;https://api.lilt.com/v2/files/labels?key&#x3D;API_KEY&amp;id&#x3D;1&amp;name&#x3D;label_name&#39; &#x60;&#x60;&#x60; 

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

let apiInstance = new LiltNode.FilesApi();
let id = "id_example"; // String | A File id.
let name = "name_example"; // String | A label name.
apiInstance.removeLabel(id, name).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A File id. | 
 **name** | **String**| A label name. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## uploadFile

> SourceFile uploadFile(name, body, opts)

Upload a File

Upload a File in any of the formats [documented in our knowledge base](https://support.lilt.com/hc/en-us/articles/360020816253-File-Formats). Request parameters should be passed in as query string parameters.  Example CURL command: &#x60;&#x60;&#x60;bash   curl -X POST https://api.lilt.com/v2/files?key&#x3D;API_KEY&amp;name&#x3D;en_US.json \\   --header \&quot;Content-Type: application/octet-stream\&quot; \\   --data-binary @en_US.json &#x60;&#x60;&#x60; Calls to GET /files are used to monitor the language detection results. The API response will be augmented to include detected language and confidence score.  The language detection will complete asynchronously. Prior to completion, the &#x60;detected_lang&#x60; value will be &#x60;zxx&#x60;, the reserved ISO 639-2 code for \&quot;No linguistic content/not applicable\&quot;.  If the language can not be determined, or the detection process fails, the &#x60;detected_lang&#x60; field will return &#x60;und&#x60;, the reserved ISO 639-2 code for undetermined language, and the &#x60;detected_lang_confidence&#x60; score will be &#x60;0&#x60;.  

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

let apiInstance = new LiltNode.FilesApi();
let name = "name_example"; // String | A file name.
let body = "/path/to/file"; // File | The file contents to be uploaded. The entire POST body will be treated as the file.
let opts = {
  'fileHash': "fileHash_example", // String | A hash value to associate with the file. The MD5 hash of the body contents will be used by default if a value isn't provided.
  'langId': true, // Boolean | Flag indicating whether to perform language detection on the uploaded file. Default is false.
  'projectId': 56, // Number | The project to associate the uploaded file with.
  'category': "category_example", // String | The category of the file. The options are `REFERENCE`, or `API`. The default is API. Files with the `REFERENCE` category will be displayed as reference material.
  'labels': "labels_example" // String | Comma-separated list of labels to add to the uploaded document.
};
apiInstance.uploadFile(name, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| A file name. | 
 **body** | **File**| The file contents to be uploaded. The entire POST body will be treated as the file. | 
 **fileHash** | **String**| A hash value to associate with the file. The MD5 hash of the body contents will be used by default if a value isn&#39;t provided. | [optional] 
 **langId** | **Boolean**| Flag indicating whether to perform language detection on the uploaded file. Default is false. | [optional] 
 **projectId** | **Number**| The project to associate the uploaded file with. | [optional] 
 **category** | **String**| The category of the file. The options are &#x60;REFERENCE&#x60;, or &#x60;API&#x60;. The default is API. Files with the &#x60;REFERENCE&#x60; category will be displayed as reference material. | [optional] 
 **labels** | **String**| Comma-separated list of labels to add to the uploaded document. | [optional] 

### Return type

[**SourceFile**](SourceFile.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

