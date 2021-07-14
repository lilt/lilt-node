# LiltNode.DocumentsApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignDocument**](DocumentsApi.md#assignDocument) | **PUT** /documents/share | Assign a Document
[**createDocument**](DocumentsApi.md#createDocument) | **POST** /documents | Create a Document
[**deleteDocument**](DocumentsApi.md#deleteDocument) | **DELETE** /documents | Delete a Document
[**documentsDoneReviewPost**](DocumentsApi.md#documentsDoneReviewPost) | **POST** /documents/done/review | Mark review done
[**documentsDoneTranslationPost**](DocumentsApi.md#documentsDoneTranslationPost) | **POST** /documents/done/translation | Mark translation done
[**documentsDoneUnlockPost**](DocumentsApi.md#documentsDoneUnlockPost) | **POST** /documents/done/unlock | Unlock documents
[**downloadDocument**](DocumentsApi.md#downloadDocument) | **GET** /documents/files | Download a Document
[**getDocument**](DocumentsApi.md#getDocument) | **GET** /documents | Retrieve a Document
[**pretranslateDocuments**](DocumentsApi.md#pretranslateDocuments) | **POST** /documents/pretranslate | Pretranslate a Document
[**updateDocument**](DocumentsApi.md#updateDocument) | **PUT** /documents | Update a Document
[**uploadDocument**](DocumentsApi.md#uploadDocument) | **POST** /documents/files | Upload a File



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

> Object createDocument(opts)

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

**Object**

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


## documentsDoneReviewPost

> [String] documentsDoneReviewPost(body)

Mark review done

Mark the review of documents as done/undone in bulk.  When being marked positively as done:  - Documents must not already be marked as done for review. - Documents must already be marked as done for translation. - This request will also trigger an email notification.  Example curl: &#x60;&#x60;&#x60;   curl --X --request POST &#39;https://lilt.com/2/documents/done/review?key&#x3D;API_KEY&#39; \\   --header &#39;Content-Type: application/json&#39; \\   --data-raw &#39;{       \&quot;documentIds\&quot;: [23921, 23922],       \&quot;isDone\&quot;: true   }&#39; &#x60;&#x60;&#x60; 

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
let body = new LiltNode.DocumentDoneUpdateParameters1(); // DocumentDoneUpdateParameters1 | 
apiInstance.documentsDoneReviewPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentDoneUpdateParameters1**](DocumentDoneUpdateParameters1.md)|  | 

### Return type

**[String]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## documentsDoneTranslationPost

> [String] documentsDoneTranslationPost(body)

Mark translation done

Mark the translation of documents as done/undone in bulk.  When being marked positively as done:  - Documents must not already be marked as done and all segments must be confirmed. - This request will also trigger an email notification to a document&#39;s assigned reviewer that the document is ready for review.  When being marked as un-done: - Documents must not be marked as complete for review.  Example curl: &#x60;&#x60;&#x60;   curl --X --request POST &#39;https://lilt.com/2/documents/done/translation?key&#x3D;API_KEY&#39; \\   --header &#39;Content-Type: application/json&#39; \\   --data-raw &#39;{       \&quot;documentIds\&quot;: [23921, 23922],       \&quot;isDone\&quot;: true   }&#39; &#x60;&#x60;&#x60; 

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
let body = new LiltNode.DocumentDoneUpdateParameters(); // DocumentDoneUpdateParameters | 
apiInstance.documentsDoneTranslationPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentDoneUpdateParameters**](DocumentDoneUpdateParameters.md)|  | 

### Return type

**[String]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## documentsDoneUnlockPost

> [String] documentsDoneUnlockPost(body)

Unlock documents

Unlock documents for translation. Sets document \&quot;Translation Done\&quot; and \&quot;Review Done\&quot; to false.  Example curl: &#x60;&#x60;&#x60;   curl --X --request POST &#39;https://lilt.com/2/documents/done/unlock?key&#x3D;API_KEY&#39; \\   --header &#39;Content-Type: application/json&#39; \\   --data-raw &#39;{       \&quot;documentIds\&quot;: [23921, 23922]   }&#39; &#x60;&#x60;&#x60; 

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
let body = null; // Object | document ids to update
apiInstance.documentsDoneUnlockPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| document ids to update | 

### Return type

**[String]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## downloadDocument

> Blob downloadDocument(id, opts)

Download a Document

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
- **Accept**: application/octet-stream


## getDocument

> Object getDocument(id, opts)

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

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pretranslateDocuments

> DocumentPretranslateResponse pretranslateDocuments(body, opts)

Pretranslate a Document

Initiate pretranslation of a list of Documents. This request will mark document(s) as being pretranslated. Pretranslation in this context is: - Applying and confirming exact TM matches based on the Memory of the Project; - Translating all other segments via MT without confirming them.  Example CURL command: &#x60;&#x60;&#x60; curl -X POST https://lilt.com/2/documents/pretranslate?key&#x3D;API_KEY -d {\&quot;id\&quot;: [123]} -H \&quot;Content-Type: application/json\&quot; &#x60;&#x60;&#x60;  Document translation is an asynchronous process that, in effect, is performed in the background.  To check the status of pretranslation for a document, use the &#x60;GET /documents&#x60; endpoint. When pretranslation is in progress for a document, the &#x60;GET /documents&#x60; endpoint&#39;s response will include &#x60;is_pretranslating &#x3D; true&#x60; as well as a more detailed status property &#x60;status.pretranslation&#x60; one of &#x60;idle&#x60;, &#x60;pending&#x60;, or &#x60;running&#x60;.  Once pretranslation is finished, the document can be downloaded via &#x60;GET /documents/files&#x60;. 

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
  'autoAccept': true, // Boolean | Deprecated, use body param instead. Optional parameter for auto-accepting 100% TM hits.
  'caseSensitive': true, // Boolean | Deprecated, use body param instead. Optional for using case matching against TM hits.
  'attributeToCreator': true, // Boolean | Deprecated, use body param instead. Optional parameter for attributing translation authorship of exact matches to document creator.
  'mode': "mode_example" // String | Deprecated, use body param instead. An optional parameter indicating how the document will be pretranslated.  The accepted values are `tm`, or `tm+mt`. Default is `tm`. 
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
 **autoAccept** | **Boolean**| Deprecated, use body param instead. Optional parameter for auto-accepting 100% TM hits. | [optional] 
 **caseSensitive** | **Boolean**| Deprecated, use body param instead. Optional for using case matching against TM hits. | [optional] 
 **attributeToCreator** | **Boolean**| Deprecated, use body param instead. Optional parameter for attributing translation authorship of exact matches to document creator. | [optional] 
 **mode** | **String**| Deprecated, use body param instead. An optional parameter indicating how the document will be pretranslated.  The accepted values are &#x60;tm&#x60;, or &#x60;tm+mt&#x60;. Default is &#x60;tm&#x60;.  | [optional] 

### Return type

[**DocumentPretranslateResponse**](DocumentPretranslateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDocument

> Object updateDocument(body)

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

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadDocument

> Object uploadDocument(name, projectId, body, opts)

Upload a File

Create a Document from a file in any of the formats [documented in our knowledge base](https://support.lilt.com/hc/en-us/articles/360020816253-File-Formats). Request parameters should be passed as JSON object with the header field &#x60;LILT-API&#x60;.  File names in the header can only contain [US-ASCII characters](https://en.wikipedia.org/wiki/ASCII). File names with characters outside of US-ASCII should be [URI encoded](https://en.wikipedia.org/wiki/Percent-encoding) or transliterated to US-ASCII strings.  Example CURL command: &#x60;&#x60;&#x60;   curl -X POST https://lilt.com/2/documents/files?key&#x3D;API_KEY \\   --header \&quot;LILT-API: {\\\&quot;name\\\&quot;: \\\&quot;introduction.xliff\\\&quot;,\\\&quot;pretranslate\\\&quot;: \\\&quot;tm+mt\\\&quot;,\\\&quot;project_id\\\&quot;: 9}\&quot; \\   --header \&quot;Content-Type: application/octet-stream\&quot; \\   --data-binary @Introduction.xliff &#x60;&#x60;&#x60;  

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
  'autoAccept': true, // Boolean | An optional parameter to auto-accept segments with 100% translation memory matches when the `pretranslate` option is also set, or to auto-accept any target data that is present when the uploaded file is XLIFF. If omitted or set to `false`, no segments will be auto-accepted. 
  'caseSensitive': true, // Boolean | An optional parameter to use case sensitive translation memory matching when the `pretranslate` option is also enabled. Matches must have identical character-by-character case to qualify as matches. Default value is `false` 
  'matchAttribution': true, // Boolean | An optional parameter to attribute translation authorship of exact matches to the author of the file when the `pretranslate` option is also enabled. Default value is `false` 
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
 **autoAccept** | **Boolean**| An optional parameter to auto-accept segments with 100% translation memory matches when the &#x60;pretranslate&#x60; option is also set, or to auto-accept any target data that is present when the uploaded file is XLIFF. If omitted or set to &#x60;false&#x60;, no segments will be auto-accepted.  | [optional] 
 **caseSensitive** | **Boolean**| An optional parameter to use case sensitive translation memory matching when the &#x60;pretranslate&#x60; option is also enabled. Matches must have identical character-by-character case to qualify as matches. Default value is &#x60;false&#x60;  | [optional] 
 **matchAttribution** | **Boolean**| An optional parameter to attribute translation authorship of exact matches to the author of the file when the &#x60;pretranslate&#x60; option is also enabled. Default value is &#x60;false&#x60;  | [optional] 
 **configId** | **Number**| An optional pararameter to specify an import configuration to be applied when extracting translatable content from this file.  | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

