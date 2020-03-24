# lilt.MemoriesApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMemory**](MemoriesApi.md#createMemory) | **POST** /memories | Create a Memory
[**deleteMemory**](MemoriesApi.md#deleteMemory) | **DELETE** /memories | Delete a Memory
[**getMemory**](MemoriesApi.md#getMemory) | **GET** /memories | Retrieve a Memory
[**importMemoryFile**](MemoriesApi.md#importMemoryFile) | **POST** /memories/import | File import for a Memory
[**queryMemory**](MemoriesApi.md#queryMemory) | **GET** /memories/query | Query a Memory
[**syncDeleteMemory**](MemoriesApi.md#syncDeleteMemory) | **DELETE** /memories/sync | Delete-sync for a Memory
[**syncDownMemory**](MemoriesApi.md#syncDownMemory) | **GET** /memories/sync | Get-sync for a Memory
[**syncInsertMemory**](MemoriesApi.md#syncInsertMemory) | **POST** /memories/sync | Insert-sync for a Memory
[**syncUpdateMemory**](MemoriesApi.md#syncUpdateMemory) | **PUT** /memories/sync | Update-sync for a Memory
[**updateMemory**](MemoriesApi.md#updateMemory) | **PUT** /memories | Update the name of a Memory

<a name="createMemory"></a>
# **createMemory**
> Memory createMemory(body)

Create a Memory

Create a new Memory. A Memory is a container that collects source/target sentences for a specific language pair (e.g., English&gt;French). The data in the Memory is used to train the MT system, populate the TM, and update the lexicon. Memories are private to your account - the data is not shared across users - unless you explicitly share a Memory with your team (via web app only).  &lt;a href&#x3D;\&quot;https://lilt.com/kb/memory/memories\&quot; target&#x3D;_blank&gt;Refer to our KB&lt;/a&gt; for a more detailed description.  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let body = null; // Object | The Memory resource to create.

apiInstance.createMemory(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| The Memory resource to create. | 

### Return type

[**Memory**](Memory.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMemory"></a>
# **deleteMemory**
> Object deleteMemory(id)

Delete a Memory

Delete a Memory. 

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let id = 56; // Number | A unique Memory identifier.

apiInstance.deleteMemory(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Memory identifier. | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMemory"></a>
# **getMemory**
> [Memory] getMemory(opts)

Retrieve a Memory

Retrieve a Memory. If you cannot access the Memory (401 error) please check permissions (e.g. in case you created the Memory via the web app with a different account you may have to explicitly share that Memory).  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let opts = { 
  'id': 56 // Number | An optional Memory identifier.
};
apiInstance.getMemory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| An optional Memory identifier. | [optional] 

### Return type

[**[Memory]**](Memory.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="importMemoryFile"></a>
# **importMemoryFile**
> Object importMemoryFile(bodymemoryIdname)

File import for a Memory

Imports common translation memory or termbase file formats to a specific Lilt memory. Currently supported file formats are &#x60;*.tmx&#x60;, &#x60;*.sdltm&#x60; and &#x60;*.tmq&#x60; for TM data; &#x60;*.csv&#x60; and &#x60;*.tbx&#x60; for termbase data. Request parameters should be passed as JSON object with the header field &#x60;LILT-API&#x60;.  Example cURL command to upload a translation memory file named &#x60;my_memory.sdltm&#x60; in the current working directory: &#x60;&#x60;&#x60;   curl -X POST https://lilt.com/2/memories/import?key&#x3D;API_KEY \\     --header \&quot;LILT-API: {\\\&quot;name\\\&quot;: \\\&quot;my_memory.sdltm\\\&quot;,\\\&quot;memory_id\\\&quot;: 42}\&quot; \\     --header \&quot;Content-Type: application/octet-stream\&quot; \\     --data-binary @my_memory.sdltm &#x60;&#x60;&#x60;  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let body = "body_example"; // String | The file contents to be uploaded. The entire POST body will be treated as the file.
let memoryId = 56; // Number | A unique Memory identifier.
let name = "name_example"; // String | Name of the TM or termbase file.

apiInstance.importMemoryFile(bodymemoryIdname).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**String**](String.md)| The file contents to be uploaded. The entire POST body will be treated as the file. | 
 **memoryId** | **Number**| A unique Memory identifier. | 
 **name** | **String**| Name of the TM or termbase file. | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="queryMemory"></a>
# **queryMemory**
> [TranslationMemoryEntry] queryMemory(id, query, opts)

Query a Memory

Perform a translation memory query.  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let id = 56; // Number | A unique Memory identifier.
let query = "query_example"; // String | A source query.
let opts = { 
  'n': 56 // Number | Maximum number of results to return.
};
apiInstance.queryMemory(id, query, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Memory identifier. | 
 **query** | **String**| A source query. | 
 **n** | **Number**| Maximum number of results to return. | [optional] 

### Return type

[**[TranslationMemoryEntry]**](TranslationMemoryEntry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="syncDeleteMemory"></a>
# **syncDeleteMemory**
> Object syncDeleteMemory(id, opts)

Delete-sync for a Memory

Deletes segments in the Memory matching the &#x60;from_time&#x60;, &#x60;to_time&#x60; and &#x60;when&#x60; parameters.  Example CURL command: &#x60;&#x60;&#x60;   curl -X DELETE https://lilt.com/2/memories/sync?key&#x3D;API_KEY&amp;id&#x3D;42&amp;from_time&#x3D;1491048000&amp;to_time&#x3D;1491049800&amp;when&#x3D;created &#x60;&#x60;&#x60;  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let id = 56; // Number | A unique Memory identifier.
let opts = { 
  'fromTime': 56, // Number | Unix time stamp (epoch, in seconds) of the start of the Memory section.
  'toTime': 56, // Number | Unix time stamp (epoch, in seconds) of the end of the Memory section.
  'when': "when_example" // String | The date field on which retrieved segments match from/to time stamps: `created`, `updated`, `deleted`.
};
apiInstance.syncDeleteMemory(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Memory identifier. | 
 **fromTime** | **Number**| Unix time stamp (epoch, in seconds) of the start of the Memory section. | [optional] 
 **toTime** | **Number**| Unix time stamp (epoch, in seconds) of the end of the Memory section. | [optional] 
 **when** | **String**| The date field on which retrieved segments match from/to time stamps: &#x60;created&#x60;, &#x60;updated&#x60;, &#x60;deleted&#x60;. | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="syncDownMemory"></a>
# **syncDownMemory**
> &#x27;Blob&#x27; syncDownMemory(id, opts)

Get-sync for a Memory

Get all or part of a memory in TMX 1.4b format. If the &#x60;from_time&#x60; and/or &#x60;to_time&#x60; are omitted, then all segments are returned. The parameter &#x60;when&#x60; specifies on which date field &#x60;from_time&#x60; and &#x60;to_time&#x60; are matched. Possible values are &#x60;created&#x60; (when the segment was originally created in the memory), &#x60;updated&#x60; (when the segment was lastly updated), and &#x60;deleted&#x60; (when the segment was deleted).  Example CURL command: &#x60;&#x60;&#x60;   curl -X GET https://lilt.com/2/memories/sync?key&#x3D;API_KEY&amp;id&#x3D;42 -o from_lilt.tmx &#x60;&#x60;&#x60;  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let id = 56; // Number | A unique Memory identifier.
let opts = { 
  'fromTime': 56, // Number | Unix time stamp (epoch, in seconds) of the start of the Memory section.
  'toTime': 56, // Number | Unix time stamp (epoch, in seconds) of the end of the Memory section.
  'when': "when_example" // String | The date field on which retrieved segments match from/to time stamps: `created`, `updated`, `deleted`. If this parameter is omitted, then the whole Memory is returned.
};
apiInstance.syncDownMemory(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique Memory identifier. | 
 **fromTime** | **Number**| Unix time stamp (epoch, in seconds) of the start of the Memory section. | [optional] 
 **toTime** | **Number**| Unix time stamp (epoch, in seconds) of the end of the Memory section. | [optional] 
 **when** | **String**| The date field on which retrieved segments match from/to time stamps: &#x60;created&#x60;, &#x60;updated&#x60;, &#x60;deleted&#x60;. If this parameter is omitted, then the whole Memory is returned. | [optional] 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-tmx

<a name="syncInsertMemory"></a>
# **syncInsertMemory**
> Object syncInsertMemory(bodyid, opts)

Insert-sync for a Memory

Inserts a TM in TMX 1.4b format into the Memory. Request parameters should be passed as JSON object with the header field &#x60;LILT-API&#x60;.  Example CURL command: &#x60;&#x60;&#x60;   curl -X POST https://lilt.com/2/memories/sync?key&#x3D;API_KEY \\     --header \&quot;LILT-API: {\\\&quot;name\\\&quot;: \\\&quot;my_memory.tmx\\\&quot;,\\\&quot;id\\\&quot;: 42}\&quot; \\     --header \&quot;Content-Type: application/octet-stream\&quot; \\     --data-binary @my_memory.tmx &#x60;&#x60;&#x60;  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let body = "body_example"; // String | The file contents to be uploaded. The entire POST body will be treated as the file.
let id = 56; // Number | A unique Memory identifier.
let opts = { 
  'name': "name_example" // String | Name of the TMX file.
};
apiInstance.syncInsertMemory(bodyid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**String**](String.md)| The file contents to be uploaded. The entire POST body will be treated as the file. | 
 **id** | **Number**| A unique Memory identifier. | 
 **name** | **String**| Name of the TMX file. | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="syncUpdateMemory"></a>
# **syncUpdateMemory**
> Object syncUpdateMemory(bodyid, opts)

Update-sync for a Memory

Updates the Memory with given TMX file. Request parameters should be passed as JSON object with the header field &#x60;LILT-API&#x60;. The number of segments returned by the &#x60;from_time&#x60;, &#x60;to_time&#x60;, &#x60;when&#x60; parameters and the number of segments in the TMX file need to be identical.  Example CURL command: &#x60;&#x60;&#x60;   curl -X PUT https://lilt.com/2/memories/sync?key&#x3D;API_KEY \\     --header \&quot;LILT-API: {\\\&quot;name\\\&quot;: \\\&quot;my_memory.tmx\\\&quot;, \\\&quot;id\\\&quot;: 42, \\\&quot;from_time\\\&quot;: 1491048000, \\\&quot;to_time\\\&quot;: 1491049800, \&quot;when\&quot;: \&quot;Updated\&quot;}\&quot; \\     --header \&quot;Content-Type: application/octet-stream\&quot; \\     --data-binary @my_memory.tmx &#x60;&#x60;&#x60;  

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let body = "body_example"; // String | The file contents to be uploaded. The entire PUT body will be treated as the file.
let id = 56; // Number | A unique Memory identifier.
let opts = { 
  'fromTime': 56 // Number | Unix time stamp (epoch, in seconds) of the start of the Memory section.
  'toTime': 56 // Number | Unix time stamp (epoch, in seconds) of the end of the Memory section.
  'when': "when_example" // String | The date field on which retrieved segments match from/to time stamps: `created`, `updated`, `deleted`.
};
apiInstance.syncUpdateMemory(bodyid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**String**](String.md)| The file contents to be uploaded. The entire PUT body will be treated as the file. | 
 **id** | **Number**| A unique Memory identifier. | 
 **fromTime** | **Number**| Unix time stamp (epoch, in seconds) of the start of the Memory section. | [optional] 
 **toTime** | **Number**| Unix time stamp (epoch, in seconds) of the end of the Memory section. | [optional] 
 **when** | **String**| The date field on which retrieved segments match from/to time stamps: &#x60;created&#x60;, &#x60;updated&#x60;, &#x60;deleted&#x60;. | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMemory"></a>
# **updateMemory**
> Memory updateMemory(body)

Update the name of a Memory

Update a Memory. 

### Example
```javascript
import lilt from 'lilt-node';
let defaultClient = lilt.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new lilt.MemoriesApi();
let body = null; // Object | The Memory resource to update.

apiInstance.updateMemory(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| The Memory resource to update. | 

### Return type

[**Memory**](Memory.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

