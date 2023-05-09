# LiltNode.ConverterConfigApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addConverterConfig**](ConverterConfigApi.md#addConverterConfig) | **PUT** /configs/converter | Add Converter Config
[**deleteConverterConfig**](ConverterConfigApi.md#deleteConverterConfig) | **DELETE** /configs/converter/{configId} | Delete Converter Config
[**deleteFilterMapping**](ConverterConfigApi.md#deleteFilterMapping) | **DELETE** /configs/converter/{configId}/{fileExtension} | Delete Filter Mapping
[**editFilterMapping**](ConverterConfigApi.md#editFilterMapping) | **PUT** /configs/converter/{configId}/{fileExtension} | Add Filter Mapping
[**getConverterConfigById**](ConverterConfigApi.md#getConverterConfigById) | **GET** /configs/converter/{configId} | Fetch Converter Config by Id
[**getConverterConfigs**](ConverterConfigApi.md#getConverterConfigs) | **GET** /configs/converter | List Converter Configs



## addConverterConfig

> ConverterConfigUpdateResponse addConverterConfig(organizationId, opts)

Add Converter Config

Add a file filter configuration for your Organization. 

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

let apiInstance = new LiltNode.ConverterConfigApi();
let organizationId = 56; // Number | A unique Organization identifier.
let opts = {
  'body': new LiltNode.CreateConverterConfigParameters() // CreateConverterConfigParameters | 
};
apiInstance.addConverterConfig(organizationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| A unique Organization identifier. | 
 **body** | [**CreateConverterConfigParameters**](CreateConverterConfigParameters.md)|  | [optional] 

### Return type

[**ConverterConfigUpdateResponse**](ConverterConfigUpdateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConverterConfig

> ConverterConfigUpdateResponse deleteConverterConfig(configId)

Delete Converter Config

Delete a file filter configuration by id. 

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

let apiInstance = new LiltNode.ConverterConfigApi();
let configId = 56; // Number | A unique configuration identifier.
apiInstance.deleteConverterConfig(configId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **Number**| A unique configuration identifier. | 

### Return type

[**ConverterConfigUpdateResponse**](ConverterConfigUpdateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFilterMapping

> {String: String} deleteFilterMapping(configId, fileExtension)

Delete Filter Mapping

Delete a file filter mapping by id and file extension. 

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

let apiInstance = new LiltNode.ConverterConfigApi();
let configId = 56; // Number | A unique configuration identifier.
let fileExtension = "fileExtension_example"; // String | A file extension to delete.
apiInstance.deleteFilterMapping(configId, fileExtension).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **Number**| A unique configuration identifier. | 
 **fileExtension** | **String**| A file extension to delete. | 

### Return type

**{String: String}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## editFilterMapping

> {String: String} editFilterMapping(configId, fileExtension, opts)

Add Filter Mapping

Add a specific filter mapping to your file filter configuration 

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

let apiInstance = new LiltNode.ConverterConfigApi();
let configId = 56; // Number | A unique configuration identifier.
let fileExtension = "fileExtension_example"; // String | A file extension for the filter mapping.
let opts = {
  'body': new LiltNode.EditFilterMappingParameters() // EditFilterMappingParameters | 
};
apiInstance.editFilterMapping(configId, fileExtension, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **Number**| A unique configuration identifier. | 
 **fileExtension** | **String**| A file extension for the filter mapping. | 
 **body** | [**EditFilterMappingParameters**](EditFilterMappingParameters.md)|  | [optional] 

### Return type

**{String: String}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getConverterConfigById

> {String: String} getConverterConfigById(configId)

Fetch Converter Config by Id

Fetch a file filter configuration by id. 

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

let apiInstance = new LiltNode.ConverterConfigApi();
let configId = 56; // Number | A unique configuration identifier.
apiInstance.getConverterConfigById(configId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **Number**| A unique configuration identifier. | 

### Return type

**{String: String}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConverterConfigs

> {String: String} getConverterConfigs(organizationId)

List Converter Configs

List all file filter configurations for your Organization. 

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

let apiInstance = new LiltNode.ConverterConfigApi();
let organizationId = 56; // Number | A unique Organization identifier.
apiInstance.getConverterConfigs(organizationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| A unique Organization identifier. | 

### Return type

**{String: String}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

