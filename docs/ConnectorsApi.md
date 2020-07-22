# LiltNode.ConnectorsApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnector**](ConnectorsApi.md#createConnector) | **POST** /connectors | Upload a Connector
[**deleteConnector**](ConnectorsApi.md#deleteConnector) | **DELETE** /connectors | Delete a Connector
[**getConnectors**](ConnectorsApi.md#getConnectors) | **GET** /connectors | Retrieve a Connector
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
let body = new LiltNode.Connector1(); // Connector1 | 
apiInstance.createConnector(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Connector1**](Connector1.md)|  | 

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


## getConnectors

> Connector getConnectors(opts)

Retrieve a Connector

Retrieves one or more connectors available to your user. Connectors are not associated with a project or a memory.  To retrieve a specific connector, specify the &lt;strong&gt;id&lt;/strong&gt; request parameter. To retrieve all connectors, omit the &lt;strong&gt;id&lt;/strong&gt; request parameter.  Example cURL command: &#x60;&#x60;&#x60;  curl -X GET https://lilt.com/2/connectors?key&#x3D;API_KEY&amp;id&#x3D;274&#x60;&#x60;&#x60;

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

[**Connector**](Connector.md)

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
let body = new LiltNode.Connector(); // Connector | 
apiInstance.updateConnector(body).then((data) => {
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

