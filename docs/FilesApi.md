# lilt.FilesApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFile**](FilesApi.md#deleteFile) | **DELETE** /files | Delete a File
[**getFiles**](FilesApi.md#getFiles) | **GET** /files | Retrieve a File
[**uploadFile**](FilesApi.md#uploadFile) | **POST** /files | Upload a File

<a name="deleteFile"></a>
# **deleteFile**
> Object deleteFile(id)

Delete a File

Delete a File.  Example CURL command: &#x60;&#x60;&#x60;   curl -X DELETE https://lilt.com/2/files?key&#x3D;API_KEY&amp;id&#x3D;123 &#x60;&#x60;&#x60;  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.FilesApi();
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

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFiles"></a>
# **getFiles**
> File getFiles(opts)

Retrieve a File

Retrieves one or more files available to your user. Files are not associated with a project or a memory. They are unprocessed and can be used later in the project/document creation workflow step.  To retrieve a specific file, specify the &lt;strong&gt;id&lt;/strong&gt; request parameter. To retrieve all files, omit the &lt;strong&gt;id&lt;/strong&gt; request parameter.  Example cURL command: &#x60;&#x60;&#x60;  curl -X GET https://lilt.com/2/files?key&#x3D;API_KEY&amp;id&#x3D;274&#x60;&#x60;&#x60;

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.FilesApi();
let opts = { 
  'id': 56 // Number | A unique File identifier.
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

### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="uploadFile"></a>
# **uploadFile**
> File uploadFile(bodyname, opts)

Upload a File

Upload a File in any of the formats [documented in our knowledge base](https://support.lilt.com/hc/en-us/articles/360020816253-File-Formats). Request parameters should be passed in as query string parameters.  When uploading a file, any parameters needed to issue a request to the specified export_uri can be encoded in the export_uri itself as query parameters. Typical examples of parameters that may be required are an access token to authorize requests to a third-party HTTP API and the unique identifier of a resource available via the third-party HTTP API that corresponds to the file. An example export_uri that encodes a target resource identifier (i.e., source_id) of an associated resource behind a third party HTTP API is given in the cURL command below.  Example cURL command: &#x60;&#x60;&#x60;   curl -X POST https://lilt.com/2/files?key&#x3D;API_KEY&amp;name&#x3D;en_US.json&amp;export_uri&#x3D;https://example.com/export?source_id&#x3D;12345 \\   --header \&quot;Content-Type: application/octet-stream\&quot; \\   --data-binary @en_US.json &#x60;&#x60;&#x60;  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.FilesApi();
let body = "body_example"; // String | The file contents to be uploaded. The entire POST body will be treated as the file.
let name = "name_example"; // String | A file name.
let opts = { 
  'exportUri': "exportUri_example" // String | A webhook endpoint that will export the translated document back to the source repository.
  'fileHash': "fileHash_example" // String | A hash value to associate with the file. The MD5 hash of the body contents will be used by default if a value isn't provided.
};
apiInstance.uploadFile(bodyname, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**String**](String.md)| The file contents to be uploaded. The entire POST body will be treated as the file. | 
 **name** | **String**| A file name. | 
 **exportUri** | **String**| A webhook endpoint that will export the translated document back to the source repository. | [optional] 
 **fileHash** | **String**| A hash value to associate with the file. The MD5 hash of the body contents will be used by default if a value isn&#x27;t provided. | [optional] 

### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

