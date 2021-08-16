# LiltNode.SettingsApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationSettings**](SettingsApi.md#getOrganizationSettings) | **GET** /settings/organization | Update or create a setting
[**getProjectSettings**](SettingsApi.md#getProjectSettings) | **GET** /settings/project/{projectId} | Get settings for a project
[**getUserSettings**](SettingsApi.md#getUserSettings) | **GET** /settings/user | Get settings for a project
[**upsertSetting**](SettingsApi.md#upsertSetting) | **POST** /settings | Get organization-level settings



## getOrganizationSettings

> SettingDictionary getOrganizationSettings()

Update or create a setting

Get the organization-level settings for the active users organization  Example CURL:  &#x60;&#x60;&#x60; curl --location --request GET &#39;https://lilt.com/2/settings/organization?key&#x3D;&lt;API_KEY&gt;&#39; \\ &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.SettingsApi();
apiInstance.getOrganizationSettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SettingDictionary**](SettingDictionary.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectSettings

> SettingDictionary getProjectSettings(projectId)

Get settings for a project

Get the settings as applied to a specific project.  Active settings will combine project-level settings, organization-level settings and fallback to setting default values.  Example CURL:  &#x60;&#x60;&#x60; curl --location --request GET &#39;https://lilt.com/2/settings/project/123?key&#x3D;&lt;API_KEY&gt;&#39; \\ &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.SettingsApi();
let projectId = 56; // Number | A project id.
apiInstance.getProjectSettings(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Number**| A project id. | 

### Return type

[**SettingDictionary**](SettingDictionary.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserSettings

> SettingDictionary getUserSettings()

Get settings for a project

Get the active settings applied to a user.  Example CURL:  &#x60;&#x60;&#x60; curl --location --request GET &#39;https://lilt.com/2/settings/user?key&#x3D;&lt;API_KEY&gt;&#39; \\ &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.SettingsApi();
apiInstance.getUserSettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SettingDictionary**](SettingDictionary.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## upsertSetting

> Object upsertSetting(opts)

Get organization-level settings

Create or update the value for the given setting and setting scope.  Example CURL to set an organization-level setting:  &#x60;&#x60;&#x60; curl --location --request POST &#39;https://lilt.com/2/settings?key&#x3D;&lt;API_KEY&gt;&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{     \&quot;settingName\&quot;: \&quot;requireBatchQaTranslator\&quot;,     \&quot;value\&quot;: false,     \&quot;organizationId\&quot;: 285,     \&quot;scope\&quot;: \&quot;Organization\&quot; }&#39; &#x60;&#x60;&#x60;  

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

let apiInstance = new LiltNode.SettingsApi();
let opts = {
  'body': null // Object | 
};
apiInstance.upsertSetting(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

