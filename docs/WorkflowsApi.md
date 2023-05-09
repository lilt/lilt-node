# LiltNode.WorkflowsApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**advanceWorkflowStage**](WorkflowsApi.md#advanceWorkflowStage) | **POST** /document/{documentId}/task/{taskId}/advance | Advance workflow to the next stage
[**getDocumentWorkflow**](WorkflowsApi.md#getDocumentWorkflow) | **GET** /workflows/document/{documentId} | Retrieve document Workflow metadata
[**getWorkflowTemplates**](WorkflowsApi.md#getWorkflowTemplates) | **GET** /workflows/templates | Retrieve workflow templates
[**rejectWorkflowStage**](WorkflowsApi.md#rejectWorkflowStage) | **POST** /document/{documentId}/task/{taskId}/reject | Move workflow to the previous stage
[**setDocumentStage**](WorkflowsApi.md#setDocumentStage) | **PUT** /workflows/{documentId}/stage | Set Workflow stage for a document



## advanceWorkflowStage

> NextWorkflowTask advanceWorkflowStage(documentId, taskId)

Advance workflow to the next stage

Advance a workflow to the next stage and mark current workflow task as complete.  Example CURL: &#x60;&#x60;&#x60; curl --X --request POST &#39;https://lilt.com/2/workflows/document/{documentId}/task/{taskId}/advance?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.WorkflowsApi();
let documentId = 56; // Number | A document id.
let taskId = 56; // Number | The task id of the current workflow stage.
apiInstance.advanceWorkflowStage(documentId, taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| A document id. | 
 **taskId** | **Number**| The task id of the current workflow stage. | 

### Return type

[**NextWorkflowTask**](NextWorkflowTask.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocumentWorkflow

> DocumentWorkflow getDocumentWorkflow(documentId)

Retrieve document Workflow metadata

Get Workflow metadata related to a document. This is useful for gathering information about the current Workflow stage of a document.  Example CURL: &#x60;&#x60;&#x60; curl --X --request GET &#39;https://lilt.com/2/workflows/document/{documentId}?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.WorkflowsApi();
let documentId = 56; // Number | A document id.
apiInstance.getDocumentWorkflow(documentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| A document id. | 

### Return type

[**DocumentWorkflow**](DocumentWorkflow.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowTemplates

> [WorkflowTemplate] getWorkflowTemplates()

Retrieve workflow templates

Get all the possible Workflow Templates owned by the team. Useful for retrieving the ids corresponding to each workflow tables, and passing them to subsequent requests, for example, creating a new Job with a specific Workflow.  Example CURL: &#x60;&#x60;&#x60; curl --X --request GET &#39;https://lilt.com/2/workflows/templates?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.WorkflowsApi();
apiInstance.getWorkflowTemplates().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[WorkflowTemplate]**](WorkflowTemplate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rejectWorkflowStage

> NextWorkflowTask rejectWorkflowStage(documentId, taskId)

Move workflow to the previous stage

Move a workflow to the previous stage and mark current workflow task as rejected.  Example CURL: &#x60;&#x60;&#x60; curl --X --request POST &#39;https://lilt.com/2/workflows/document/{documentId}/task/{taskId}/reject?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.WorkflowsApi();
let documentId = 56; // Number | A document id.
let taskId = 56; // Number | The task id of the current workflow stage.
apiInstance.rejectWorkflowStage(documentId, taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| A document id. | 
 **taskId** | **Number**| The task id of the current workflow stage. | 

### Return type

[**NextWorkflowTask**](NextWorkflowTask.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setDocumentStage

> NextWorkflowTask setDocumentStage(documentId, opts)

Set Workflow stage for a document

Set the Workflow stage for a document. You can find the stage information required for this request from the \&quot;Retrieve document Workflow metadata\&quot; endpoint.  Example CURL: &#x60;&#x60;&#x60; curl --X --request PUT &#39;https://lilt.com/2/workflows/document/{documentId}/stage?key&#x3D;API_KEY&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{   \&quot;workflowStageId\&quot;: {workflowStageId} }&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.WorkflowsApi();
let documentId = 56; // Number | A document id.
let opts = {
  'workflowStageId': new LiltNode.SetDocumentStageRequest() // SetDocumentStageRequest | 
};
apiInstance.setDocumentStage(documentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**| A document id. | 
 **workflowStageId** | [**SetDocumentStageRequest**](SetDocumentStageRequest.md)|  | [optional] 

### Return type

[**NextWorkflowTask**](NextWorkflowTask.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

