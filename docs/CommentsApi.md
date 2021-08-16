# LiltNode.CommentsApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComment**](CommentsApi.md#createComment) | **POST** /comments | Create a new comment
[**deleteComment**](CommentsApi.md#deleteComment) | **DELETE** /comments | Delete a Comment
[**getDocumentComments**](CommentsApi.md#getDocumentComments) | **GET** /comments | Retrieve a document&#39;s comments by segment
[**updateComment**](CommentsApi.md#updateComment) | **PUT** /comments | Update an existing comment



## createComment

> Comment createComment(documentId, segmentId, body)

Create a new comment

Create a new comment for the specified Segment ID.

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

let apiInstance = new LiltNode.CommentsApi();
let documentId = 56; // Number | A unique document identifier.
let segmentId = 56; // Number | A unique segment identifier.
let body = new LiltNode.CommentBody(); // CommentBody | The comment being created
apiInstance.createComment(documentId, segmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| A unique document identifier. | 
 **segmentId** | **Number**| A unique segment identifier. | 
 **body** | [**CommentBody**](CommentBody.md)| The comment being created | 

### Return type

[**Comment**](Comment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteComment

> CommentDeleteResponse deleteComment(commentId)

Delete a Comment

Delete a Comment.  Example CURL command: &#x60;&#x60;&#x60;   curl -X DELETE https://lilt.com/2/comments?key&#x3D;API_KEY&amp;comment_id&#x3D;123 &#x60;&#x60;&#x60; 

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

let apiInstance = new LiltNode.CommentsApi();
let commentId = 56; // Number | A unique Comment identifier.
apiInstance.deleteComment(commentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentId** | **Number**| A unique Comment identifier. | 

### Return type

[**CommentDeleteResponse**](CommentDeleteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocumentComments

> DocumentComments getDocumentComments(documentId)

Retrieve a document&#39;s comments by segment

Retrieves all comments associated with a specified document, grouped by their Segment&#39;s ID.  To retrieve a document&#39;s comments, specify the &lt;strong&gt;document_id&lt;/strong&gt; request parameter.  Example CURL command: &#x60;&#x60;&#x60;   curl -X GET https://lilt.com/2/comments?key&#x3D;API_KEY&amp;document_id&#x3D;123 &#x60;&#x60;&#x60; 

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

let apiInstance = new LiltNode.CommentsApi();
let documentId = 56; // Number | A unique document identifier.
apiInstance.getDocumentComments(documentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| A unique document identifier. | 

### Return type

[**DocumentComments**](DocumentComments.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateComment

> Comment updateComment(commentId, documentId, body)

Update an existing comment

Update an existing comment.

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

let apiInstance = new LiltNode.CommentsApi();
let commentId = 56; // Number | A unique comment identifier.
let documentId = 56; // Number | A unique document identifier.
let body = new LiltNode.CommentBody(); // CommentBody | The comment being updated.
apiInstance.updateComment(commentId, documentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentId** | **Number**| A unique comment identifier. | 
 **documentId** | **Number**| A unique document identifier. | 
 **body** | [**CommentBody**](CommentBody.md)| The comment being updated. | 

### Return type

[**Comment**](Comment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

