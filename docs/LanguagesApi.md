# LiltNode.LanguagesApi

All URIs are relative to *https://api.lilt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLanguages**](LanguagesApi.md#getLanguages) | **GET** /v2/languages | Retrieve supported languages



## getLanguages

> LanguagesResponse getLanguages()

Retrieve supported languages

Get a list of supported languages.  

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
// Use your REST API key as both username and password.
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR API KEY';
BasicAuth.password = 'YOUR API KEY';

let apiInstance = new LiltNode.LanguagesApi();
apiInstance.getLanguages().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LanguagesResponse**](LanguagesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream, text/plain

