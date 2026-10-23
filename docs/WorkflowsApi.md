# LiltNode.WorkflowsApi

All URIs are relative to *https://api.lilt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWorkflowTemplates**](WorkflowsApi.md#getWorkflowTemplates) | **GET** /v2/workflows/templates | Retrieve workflow templates



## getWorkflowTemplates

> [WorkflowTemplate] getWorkflowTemplates()

Retrieve workflow templates

Get all of the possible Workflow Templates owned by the team. Useful for retrieving the ids corresponding to each workflow tables, and passing them to subsequent requests, for example, creating a new Job with a specific Workflow. Example CURL: &#x60;&#x60;&#x60;bash curl -X GET &#39;https://api.lilt.com/v2/workflows/templates?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60; 

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
// Use your REST API key as both username and password.
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR API KEY';
BasicAuth.password = 'YOUR API KEY';

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
- **Accept**: application/json, application/octet-stream, text/plain

