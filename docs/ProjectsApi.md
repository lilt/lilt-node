# LiltNode.ProjectsApi

All URIs are relative to *https://api.lilt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProject**](ProjectsApi.md#createProject) | **POST** /v2/projects | Create a Project
[**deleteProject**](ProjectsApi.md#deleteProject) | **DELETE** /v2/projects | Delete a Project
[**getProjects**](ProjectsApi.md#getProjects) | **GET** /v2/projects | Retrieve a Project



## createProject

> Project createProject(body)

Create a Project

Create a Project. A Project is a collection of Documents.  A Project is associated with exactly one Memory.  Projects appear in the dashboard of the web app.  

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

let apiInstance = new LiltNode.ProjectsApi();
let body = new LiltNode.ProjectCreateParameters(); // ProjectCreateParameters | 
apiInstance.createProject(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProjectCreateParameters**](ProjectCreateParameters.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/octet-stream, text/plain


## deleteProject

> ProjectDeleteResponse deleteProject(opts)

Delete a Project

Delete a Project. 

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

let apiInstance = new LiltNode.ProjectsApi();
let opts = {
  'id': 56 // Number | A unique Project identifier.
};
apiInstance.deleteProject(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Project identifier. | [optional] 

### Return type

[**ProjectDeleteResponse**](ProjectDeleteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream, text/plain


## getProjects

> [Project] getProjects(opts)

Retrieve a Project

Retrieves one or more projects, including the documents associated with each project. Retrieving a project is the most efficient way to retrieve a single project, multiple projects or a list of all available projects.  To retrieve a specific project, specify the &#x60;id&#x60; request parameter or you can retrieve multiple projects by adding comma (,) between ids eg. &#x60;?id&#x3D;1234,5678&#x60;. To retrieve all projects, omit the &#x60;id&#x60; request parameter. To limit the retrieved projects to those with a particular source language or target language, specify the corresponding ISO 639-1 language codes in the &#x60;srclang&#x60; and &#x60;trglang&#x60; request parameters, respectively.

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

let apiInstance = new LiltNode.ProjectsApi();
let opts = {
  'id': 56, // Number | A unique Project identifier. It can be a single id or multiple ids separated by a comma
  'srclang': "srclang_example", // String | An ISO 639-1 language code.
  'trglang': "trglang_example", // String | An ISO 639-1 language code.
  'fromTime': 56, // Number | Unix time stamp (epoch, in seconds) of Projects with `created_at` greater than or equal to the value.
  'toTime': 56, // Number | Unix time stamp (epoch, in seconds) of Projects with `created_at` less than the value.
  'state': "state_example", // String | A project state (backlog, inProgress, inReview, inQA, done).
  'archived': true, // Boolean | A flag that toggles whether to include archived projects in the response (the default is `true`).
  'connectorId': 56 // Number | A unique Connector identifier.
};
apiInstance.getProjects(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Project identifier. It can be a single id or multiple ids separated by a comma | [optional] 
 **srclang** | **String**| An ISO 639-1 language code. | [optional] 
 **trglang** | **String**| An ISO 639-1 language code. | [optional] 
 **fromTime** | **Number**| Unix time stamp (epoch, in seconds) of Projects with &#x60;created_at&#x60; greater than or equal to the value. | [optional] 
 **toTime** | **Number**| Unix time stamp (epoch, in seconds) of Projects with &#x60;created_at&#x60; less than the value. | [optional] 
 **state** | **String**| A project state (backlog, inProgress, inReview, inQA, done). | [optional] 
 **archived** | **Boolean**| A flag that toggles whether to include archived projects in the response (the default is &#x60;true&#x60;). | [optional] 
 **connectorId** | **Number**| A unique Connector identifier. | [optional] 

### Return type

[**[Project]**](Project.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream, text/plain

