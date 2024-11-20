# LiltNode.CreateApi

All URIs are relative to *https://api.lilt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteLiltCreateContent**](CreateApi.md#deleteLiltCreateContent) | **DELETE** /v2/create/{contentId} | Delete Lilt Create content
[**generateLiltCreateContent**](CreateApi.md#generateLiltCreateContent) | **POST** /v2/create | Generate new Lilt Create content
[**getLiltCreateById**](CreateApi.md#getLiltCreateById) | **GET** /v2/create/{contentId} | Get Lilt Create content by ID.
[**getLiltCreateContent**](CreateApi.md#getLiltCreateContent) | **GET** /v2/create | Get Lilt Create content
[**getLiltCreatePreferences**](CreateApi.md#getLiltCreatePreferences) | **GET** /v2/create/preferences | Get Lilt Create preferences
[**regenerateLiltCreateContent**](CreateApi.md#regenerateLiltCreateContent) | **GET** /v2/create/{contentId}/create | Regenerate Lilt Create content
[**signLiltCreateTerms**](CreateApi.md#signLiltCreateTerms) | **POST** /v2/create/terms-and-conditions | Sign the Lilt Create terms and conditions
[**updateLiltCreateContent**](CreateApi.md#updateLiltCreateContent) | **PUT** /v2/create/{contentId} | Update Lilt Create content
[**updateLiltCreatePreferences**](CreateApi.md#updateLiltCreatePreferences) | **PUT** /v2/create/preferences | Update Lilt Create preferences



## deleteLiltCreateContent

> InlineResponse200 deleteLiltCreateContent(contentId)

Delete Lilt Create content

Delete a piece of Lilt Create content.  Example CURL: &#x60;&#x60;&#x60;bash curl -X DELETE &#39;https://api.lilt.com/v2/create/1234?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.CreateApi();
let contentId = 56; // Number | The content ID.
apiInstance.deleteLiltCreateContent(contentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Number**| The content ID. | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream, text/plain


## generateLiltCreateContent

> generateLiltCreateContent(templateParams)

Generate new Lilt Create content

Generate new Lilt Create content with the given parameters.  Example CURL: &#x60;&#x60;&#x60;bash curl -X POST &#39;https://api.lilt.com/v2/create?key&#x3D;API_KEY&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{   \&quot;language\&quot;:\&quot;en-US\&quot;,   \&quot;template\&quot;:\&quot;blog-post\&quot;,   \&quot;templateParams\&quot;:{     \&quot;contentLength\&quot;:\&quot;100\&quot;,     \&quot;language\&quot;:\&quot;en-US\&quot;,     \&quot;sections\&quot;:[],     \&quot;summary\&quot;:\&quot;a blog post about hiking\&quot;     },   \&quot;preferences\&quot;:{\&quot;tone\&quot;:\&quot;formal\&quot;,\&quot;styleguide\&quot;:\&quot;\&quot;} }&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.CreateApi();
let templateParams = new LiltNode.LiltCreateContentRequest(); // LiltCreateContentRequest | Input parameters that determine what content will be generated. 
apiInstance.generateLiltCreateContent(templateParams).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateParams** | [**LiltCreateContentRequest**](LiltCreateContentRequest.md)| Input parameters that determine what content will be generated.  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/octet-stream, text/plain, application/json


## getLiltCreateById

> LiltCreateContent getLiltCreateById(contentId)

Get Lilt Create content by ID.

Get Lilt Create content by ID.  Example CURL: &#x60;&#x60;&#x60;bash curl -X GET &#39;https://api.lilt.com/v2/create/1234?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.CreateApi();
let contentId = 56; // Number | The content ID.
apiInstance.getLiltCreateById(contentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Number**| The content ID. | 

### Return type

[**LiltCreateContent**](LiltCreateContent.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream, text/plain


## getLiltCreateContent

> GetLiltCreateContentResponse getLiltCreateContent()

Get Lilt Create content

Get a list of all content that has been generated by Lilt Create.  Example CURL: &#x60;&#x60;&#x60;bash curl -X GET &#39;https://api.lilt.com/v2/create?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.CreateApi();
apiInstance.getLiltCreateContent().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetLiltCreateContentResponse**](GetLiltCreateContentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream, text/plain


## getLiltCreatePreferences

> getLiltCreatePreferences()

Get Lilt Create preferences

Get the stored preferences for Lilt Create.  Example CURL: &#x60;&#x60;&#x60;bash curl -X POST &#39;https://api.lilt.com/v2/create/preferences?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.CreateApi();
apiInstance.getLiltCreatePreferences().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, text/plain, application/json


## regenerateLiltCreateContent

> regenerateLiltCreateContent(contentId)

Regenerate Lilt Create content

Regenerate the given piece of content with the current parameters.  Example CURL: &#x60;&#x60;&#x60;bash curl -X GET &#39;https://api.lilt.com/v2/create/1234/create?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.CreateApi();
let contentId = 56; // Number | The content ID.
apiInstance.regenerateLiltCreateContent(contentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Number**| The content ID. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, text/plain, application/json


## signLiltCreateTerms

> SignLiltCreateTermsResponse signLiltCreateTerms(signedAgreement)

Sign the Lilt Create terms and conditions

Lilt Create requires that the terms and conditions are signed first before using it. The terms and conditions can be signed by using this endpoint.  Example CURL: &#x60;&#x60;&#x60;bash curl -X POST &#39;https://api.lilt.com/v2/create/terms-and-conditions?key&#x3D;API_KEY&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{\&quot;signedAgreement\&quot;: true}&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.CreateApi();
let signedAgreement = new LiltNode.CreateConverterConfigParameters(); // CreateConverterConfigParameters | 
apiInstance.signLiltCreateTerms(signedAgreement).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signedAgreement** | [**CreateConverterConfigParameters**](CreateConverterConfigParameters.md)|  | 

### Return type

[**SignLiltCreateTermsResponse**](SignLiltCreateTermsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/octet-stream, text/plain


## updateLiltCreateContent

> LiltCreateContent updateLiltCreateContent(contentId, opts)

Update Lilt Create content

Update a piece of Lilt Create content.  Example CURL: &#x60;&#x60;&#x60;bash curl -X PUT &#39;https://api.lilt.com/v2/create/1234?key&#x3D;API_KEY&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{\&quot;language\&quot;:\&quot;de-DE\&quot;}&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.CreateApi();
let contentId = 56; // Number | The content ID.
let opts = {
  'body': new LiltNode.LiltCreateContent() // LiltCreateContent | 
};
apiInstance.updateLiltCreateContent(contentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Number**| The content ID. | 
 **body** | [**LiltCreateContent**](LiltCreateContent.md)|  | [optional] 

### Return type

[**LiltCreateContent**](LiltCreateContent.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/octet-stream, text/plain


## updateLiltCreatePreferences

> updateLiltCreatePreferences(opts)

Update Lilt Create preferences

Update the stored preferences for Lilt Create.  Example CURL: &#x60;&#x60;&#x60;bash curl -X PUT &#39;https://api.lilt.com/v2/create/preferences?key&#x3D;API_KEY&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{\&quot;tone\&quot;: \&quot;formal\&quot;, \&quot;styleguide\&quot;: \&quot;\&quot;}&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.CreateApi();
let opts = {
  'styleguide': new LiltNode.LiltCreateContent() // LiltCreateContent | Which styleguide to use.
};
apiInstance.updateLiltCreatePreferences(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **styleguide** | [**LiltCreateContent**](LiltCreateContent.md)| Which styleguide to use. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/octet-stream, text/plain, application/json

