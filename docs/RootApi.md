# LiltNode.RootApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**root**](RootApi.md#root) | **GET** / | Retrieve the REST API root



## root

> ApiRoot root()

Retrieve the REST API root

This resource does not have any attributes. It lists the name of the REST API.  This endpoint can be used to verify REST API keys and to check the availability of the REST API.  

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
// Use your REST API key as both username and password.
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR API KEY';
BasicAuth.password = 'YOUR API KEY';

let apiInstance = new LiltNode.RootApi();
apiInstance.root().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiRoot**](ApiRoot.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

