# lilt.SegmentsApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSegment**](SegmentsApi.md#createSegment) | **POST** /segments | Create a Segment
[**deleteSegment**](SegmentsApi.md#deleteSegment) | **DELETE** /segments | Delete a Segment
[**getSegment**](SegmentsApi.md#getSegment) | **GET** /segments | Retrieve a Segment
[**tagSegment**](SegmentsApi.md#tagSegment) | **GET** /segments/tag | Tag a Segment
[**updateSegment**](SegmentsApi.md#updateSegment) | **PUT** /segments | Update a Segment

<a name="createSegment"></a>
# **createSegment**
> Segment createSegment(body)

Create a Segment

Create a Segment and add it to a Memory. A Segment is a source/target pair that is used to train the machine translation system and populate the translation memory. This is not intended to be used on documents and will throw an error.  The maximum source length is 5,000 characters.  

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

let apiInstance = new lilt.SegmentsApi();
let body = null; // Object | The Segment resource to create.

To add a Segment to a Memory, include the `memory_id` and `target` parameters.

To add a Segment to a Document, include the `document_id` and the `source` parameters.
The `target` parameter is optional.


apiInstance.createSegment(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| The Segment resource to create.

To add a Segment to a Memory, include the &#x60;memory_id&#x60; and &#x60;target&#x60; parameters.

To add a Segment to a Document, include the &#x60;document_id&#x60; and the &#x60;source&#x60; parameters.
The &#x60;target&#x60; parameter is optional.
 | 

### Return type

[**Segment**](Segment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSegment"></a>
# **deleteSegment**
> Object deleteSegment(id)

Delete a Segment

Delete a Segment from memory. This will not delete a segment from a document. 

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

let apiInstance = new lilt.SegmentsApi();
let id = 56; // Number | A unique Segment identifier.

apiInstance.deleteSegment(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Segment identifier. | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSegment"></a>
# **getSegment**
> Segment getSegment(id)

Retrieve a Segment

Retrieve a Segment.  

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

let apiInstance = new lilt.SegmentsApi();
let id = 56; // Number | A unique Segment identifier.

apiInstance.getSegment(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Segment identifier. | 

### Return type

[**Segment**](Segment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tagSegment"></a>
# **tagSegment**
> TaggedSegment tagSegment(sourceTagged, target, memoryId)

Tag a Segment

Project tags for a segment. The &#x60;source_tagged&#x60; string contains one or more SGML tags. The &#x60;target&#x60; string is untagged. This endpoint will automatically place the source tags in the target.  Usage charges apply to this endpoint for production REST API keys.  

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

let apiInstance = new lilt.SegmentsApi();
let sourceTagged = "sourceTagged_example"; // String | The tagged source string.
let target = "target_example"; // String | The target string.
let memoryId = 56; // Number | A unique Memory identifier.

apiInstance.tagSegment(sourceTagged, target, memoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceTagged** | **String**| The tagged source string. | 
 **target** | **String**| The target string. | 
 **memoryId** | **Number**| A unique Memory identifier. | 

### Return type

[**TaggedSegment**](TaggedSegment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSegment"></a>
# **updateSegment**
> Segment updateSegment(body)

Update a Segment

Update a Segment in memory. The Memory will be updated with the new target string.  

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

let apiInstance = new lilt.SegmentsApi();
let body = null; // Object | The Segment resource to update.

apiInstance.updateSegment(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| The Segment resource to update. | 

### Return type

[**Segment**](Segment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

