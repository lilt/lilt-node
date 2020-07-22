# LiltNode.DocumentsApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignDocument**](DocumentsApi.md#assignDocument) | **PUT** /documents/share | Assign a Document
[**createDocument**](DocumentsApi.md#createDocument) | **POST** /documents | Create a Document
[**deleteDocument**](DocumentsApi.md#deleteDocument) | **DELETE** /documents | Delete a Document
[**downloadFile**](DocumentsApi.md#downloadFile) | **GET** /documents/files | Download a File
[**getDocument**](DocumentsApi.md#getDocument) | **GET** /documents | Retrieve a Document
[**pretranslateDocuments**](DocumentsApi.md#pretranslateDocuments) | **POST** /documents/pretranslate | Pretranslate a Document
[**updateDocument**](DocumentsApi.md#updateDocument) | **PUT** /documents | Update a Document
[**uploadDocumentFile**](DocumentsApi.md#uploadDocumentFile) | **POST** /documents/files | Upload a File



## assignDocument

> DocumentAssignmentResponse assignDocument(body)

Assign a Document

Assign and unassign a Document for translation and/or review.  

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
let body = new LiltNode.DocumentAssignmentParameters(); // DocumentAssignmentParameters | 
apiInstance.assignDocument(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentAssignmentParameters**](DocumentAssignmentParameters.md)|  | 

### Return type

[**DocumentAssignmentResponse**](DocumentAssignmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDocument

> DocumentWithSegments createDocument(opts)

Create a Document

Create a new Document. A Document is a collection of one or more Segments. Documents are nested inside of Projects, and appear in the Project details view in the web app. Document-level relationships between Segments are considered by the machine translation system during adaptation. If there is no inherent document structure in your data, you still might consider grouping related Segments into Documents to improve translation quality. 

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
let opts = {
  'body': new LiltNode.DocumentParameters() // DocumentParameters | 
};
apiInstance.createDocument(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentParameters**](DocumentParameters.md)|  | [optional] 

### Return type

[**DocumentWithSegments**](DocumentWithSegments.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDocument

> DocumentDeleteResponse deleteDocument(id)

Delete a Document

Delete a Document. 

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
let id = 56; // Number | A unique Document identifier.
apiInstance.deleteDocument(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Document identifier. | 

### Return type

[**DocumentDeleteResponse**](DocumentDeleteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadFile

> File downloadFile(id, opts)

Download a File

Export a Document that has been translated in the Lilt web application. Any Document can be downloaded in XLIFF 1.2 format, or can be retrieved in its original uploaded format by setting &#x60;is_xliff&#x3D;false&#x60;. This endpoint will fail if either (a) export or (b) pre-translation operations are in-progress. The status of those operations can be determined by retrieving the Document resource. Example CURL command: &#x60;&#x60;&#x60;   curl -X GET https://lilt.com/2/documents/files?key&#x3D;API_KEY&amp;id&#x3D;274 -o from_lilt.xliff &#x60;&#x60;&#x60;  

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
apiInstance.downloadFile(id, opts).then((data) => {
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

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## getDocument

> DocumentWithSegments getDocument(id, opts)

Retrieve a Document

List a Document.  The listing will include the pretranslation status for the document. When pretranslation is in progress for a document, the &#x60;GET /documents&#x60; endpoint&#39;s response will include &#x60;is_pretranslating &#x3D; true&#x60; as well as a more detailed status property &#x60;status.pretranslation&#x60; one of &#x60;idle&#x60;, &#x60;pending&#x60;, or &#x60;running&#x60;.

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
let id = 56; // Number | A unique Document identifier.
let opts = {
  'withSegments': true // Boolean | Flag indicating whether full segment information should be returned.
};
apiInstance.getDocument(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Document identifier. | 
 **withSegments** | **Boolean**| Flag indicating whether full segment information should be returned. | [optional] 

### Return type

[**DocumentWithSegments**](DocumentWithSegments.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pretranslateDocuments

> DocumentPretranslateResponse pretranslateDocuments(body, opts)

Pretranslate a Document

Initiate pretranslation of a list of Documents. This request will mark document(s) as being pretranslated. Pretranslation in this context is: - Applying and confirming exact TM matches based on the Memory of the Project; - Translating all other segments via MT without confirming them.  Example cURL command: &#x60;&#x60;&#x60; curl -X POST https://lilt.com/2/documents/pretranslate?key&#x3D;API_KEY -d {\&quot;id\&quot;: [123]} -H \&quot;Content-Type: application/json\&quot; &#x60;&#x60;&#x60;  Document translation is an asynchronous process that, in effect, is performed in the background.  To check the status of pretranslation for a document, use the &#x60;GET /documents&#x60; endpoint. When pretranslation is in progress for a document, the &#x60;GET /documents&#x60; endpoint&#39;s response will include &#x60;is_pretranslating &#x3D; true&#x60; as well as a more detailed status property &#x60;status.pretranslation&#x60; one of &#x60;idle&#x60;, &#x60;pending&#x60;, or &#x60;running&#x60;.  Once pretranslation is finished, the document can be downloaded via &#x60;GET /documents/files&#x60;. 

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
let body = new LiltNode.DocumentPretranslateParameters(); // DocumentPretranslateParameters | 
let opts = {
  'autoAccept': true, // Boolean | Optional parameter for auto-accepting 100% TM hits.
  'caseSensitive': true, // Boolean | Optional for using case matching against TM hits.
  'attributeToCreator': true, // Boolean | Optional parameter for for attributing translation authorship of exact matches to document creator.
  'mode': "mode_example" // String | An optional parameter indicating how the document will be pretranslated.  The accepted values are `tm`, or `tm+mt`. Default is `tm+mt`. 
};
apiInstance.pretranslateDocuments(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentPretranslateParameters**](DocumentPretranslateParameters.md)|  | 
 **autoAccept** | **Boolean**| Optional parameter for auto-accepting 100% TM hits. | [optional] 
 **caseSensitive** | **Boolean**| Optional for using case matching against TM hits. | [optional] 
 **attributeToCreator** | **Boolean**| Optional parameter for for attributing translation authorship of exact matches to document creator. | [optional] 
 **mode** | **String**| An optional parameter indicating how the document will be pretranslated.  The accepted values are &#x60;tm&#x60;, or &#x60;tm+mt&#x60;. Default is &#x60;tm+mt&#x60;.  | [optional] 

### Return type

[**DocumentPretranslateResponse**](DocumentPretranslateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDocument

> DocumentWithSegments updateDocument(body)

Update a Document

Update a Document. 

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
let body = new LiltNode.DocumentUpdateParameters(); // DocumentUpdateParameters | 
apiInstance.updateDocument(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentUpdateParameters**](DocumentUpdateParameters.md)|  | 

### Return type

[**DocumentWithSegments**](DocumentWithSegments.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadDocumentFile

> DocumentWithSegments uploadDocumentFile(name, projectId, body, opts)

Upload a File

Create a Document from a file in any of the formats [documented in our knowledge base](https://support.lilt.com/hc/en-us/articles/360020816253-File-Formats). Request parameters should be passed as JSON object with the header  field &#x60;LILT-API&#x60;. Example CURL command: &#x60;&#x60;&#x60;   curl -X POST https://lilt.com/2/documents/files?key&#x3D;API_KEY \\   --header \&quot;LILT-API: {\\\&quot;name\\\&quot;: \\\&quot;introduction.xliff\\\&quot;,\\\&quot;pretranslate\\\&quot;: \\\&quot;tm+mt\\\&quot;,\\\&quot;project_id\\\&quot;: 9}\&quot; \\   --header \&quot;Content-Type: application/octet-stream\&quot; \\   --data-binary @Introduction.xliff &#x60;&#x60;&#x60;  

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
let body = "body_example"; // String | The file contents to be uploaded. The entire POST body will be treated as the file. 
let opts = {
  'pretranslate': "pretranslate_example", // String | An optional parameter indicating if and how the document will be pretranslated upon being uploaded.  The accepted values are `null`, `tm`, or `tm+mt` 
  'autoAccept': true, // Boolean | An optional parameter to auto-accept segments with 100% translation memory matches when the `pretranslate` option is also set, or to auto-accept any target data that is present when the uploaded file is XLIFF. If omitted or set to `false`, no segments will be auto-accepted. 
  'configId': 56 // Number | An optional pararameter to specify an import configuration to be applied when extracting translatable content from this file. 
};
apiInstance.uploadDocumentFile(name, projectId, body, opts).then((data) => {
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
 **body** | **String**| The file contents to be uploaded. The entire POST body will be treated as the file.  | 
 **pretranslate** | **String**| An optional parameter indicating if and how the document will be pretranslated upon being uploaded.  The accepted values are &#x60;null&#x60;, &#x60;tm&#x60;, or &#x60;tm+mt&#x60;  | [optional] 
 **autoAccept** | **Boolean**| An optional parameter to auto-accept segments with 100% translation memory matches when the &#x60;pretranslate&#x60; option is also set, or to auto-accept any target data that is present when the uploaded file is XLIFF. If omitted or set to &#x60;false&#x60;, no segments will be auto-accepted.  | [optional] 
 **configId** | **Number**| An optional pararameter to specify an import configuration to be applied when extracting translatable content from this file.  | [optional] 

### Return type

[**DocumentWithSegments**](DocumentWithSegments.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

