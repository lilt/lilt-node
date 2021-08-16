# LiltNode.ConnectorsApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnector**](ConnectorsApi.md#createConnector) | **POST** /connectors | Upload a Connector
[**deleteConnector**](ConnectorsApi.md#deleteConnector) | **DELETE** /connectors | Delete a Connector
[**exportConnectorJob**](ConnectorsApi.md#exportConnectorJob) | **POST** /connectors/jobs/deliver | Deliver a Connector Job
[**getConnectorJobs**](ConnectorsApi.md#getConnectorJobs) | **GET** /connectors/jobs | Retrieve a Connector Job
[**getConnectors**](ConnectorsApi.md#getConnectors) | **GET** /connectors | Retrieve a Connector
[**syncConnector**](ConnectorsApi.md#syncConnector) | **POST** /connectors/sync | Sync a Connector
[**updateConnector**](ConnectorsApi.md#updateConnector) | **PUT** /connectors | Upload a Connector



## createConnector

> Connector createConnector(body)

Upload a Connector

Create a new connector linked to a supported external cms. 

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

let apiInstance = new LiltNode.ConnectorsApi();
let body = new LiltNode.Connector(); // Connector | 
apiInstance.createConnector(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Connector**](Connector.md)|  | 

### Return type

[**Connector**](Connector.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConnector

> ConnectorDeleteResponse deleteConnector(id)

Delete a Connector

Delete a Connector.  Example CURL command: &#x60;&#x60;&#x60;   curl -X DELETE https://lilt.com/2/connectors?key&#x3D;API_KEY&amp;id&#x3D;123 &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.ConnectorsApi();
let id = 56; // Number | A unique Connector identifier.
apiInstance.deleteConnector(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Connector identifier. | 

### Return type

[**ConnectorDeleteResponse**](ConnectorDeleteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportConnectorJob

> exportConnectorJob(id)

Deliver a Connector Job

Request an export job for the given connector job ID. This will check Lilt for completed projects that are associated with this job and deliver them to the target system.  Example CURL command: &#x60;&#x60;&#x60;  curl -X POST https://lilt.com/2/connectors/jobs/deliver?key&#x3D;API_KEY&amp;id&#x3D;9274 &#x60;&#x60;&#x60; 

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

let apiInstance = new LiltNode.ConnectorsApi();
let id = 56; // Number | A unique Connector Job identifier.
apiInstance.exportConnectorJob(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Connector Job identifier. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectorJobs

> [ConnectorJob] getConnectorJobs(id)

Retrieve a Connector Job

Retrieves a connector job available to your user. Use this to check the status of jobs started by the &#x60;/connectors/sync&#x60; and &#x60;/connectors/jobs/deliver&#x60; endpoints.  Example CURL command: &#x60;&#x60;&#x60;  curl -X GET https://lilt.com/2/connectors/jobs?key&#x3D;API_KEY&amp;id&#x3D;9274 &#x60;&#x60;&#x60; 

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

let apiInstance = new LiltNode.ConnectorsApi();
let id = 56; // Number | A unique Connector Job identifier.
apiInstance.getConnectorJobs(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Connector Job identifier. | 

### Return type

[**[ConnectorJob]**](ConnectorJob.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectors

> [Connector] getConnectors(opts)

Retrieve a Connector

Retrieves one or more connectors available to your user. Connectors are not associated with a project or a memory.  To retrieve a specific connector, specify the &lt;strong&gt;id&lt;/strong&gt; request parameter. To retrieve all connectors, omit the &lt;strong&gt;id&lt;/strong&gt; request parameter.  Example CURL command: &#x60;&#x60;&#x60;  curl -X GET https://lilt.com/2/connectors?key&#x3D;API_KEY&amp;id&#x3D;274&#x60;&#x60;&#x60;

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

let apiInstance = new LiltNode.ConnectorsApi();
let opts = {
  'id': 56 // Number | A unique Connector identifier.
};
apiInstance.getConnectors(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Connector identifier. | [optional] 

### Return type

[**[Connector]**](Connector.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## syncConnector

> ConnectorJob syncConnector(id)

Sync a Connector

Request an import job for the given connector ID. This will check the target system for new content to pull into Lilt.  Example CURL command: &#x60;&#x60;&#x60;  curl -X GET https://lilt.com/2/connectors/sync?key&#x3D;API_KEY&amp;id&#x3D;128 &#x60;&#x60;&#x60; 

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

let apiInstance = new LiltNode.ConnectorsApi();
let id = 56; // Number | A unique Connector identifier.
apiInstance.syncConnector(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Connector identifier. | 

### Return type

[**ConnectorJob**](ConnectorJob.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateConnector

> Connector updateConnector(body)

Upload a Connector

Create a new connector linked to a supported external content source. 

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

let apiInstance = new LiltNode.ConnectorsApi();
let body = new LiltNode.ConnectorArguments(); // ConnectorArguments | 
apiInstance.updateConnector(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ConnectorArguments**](ConnectorArguments.md)|  | 

### Return type

[**Connector**](Connector.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

