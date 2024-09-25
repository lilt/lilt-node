/**
 * Lilt REST API
 * Lilt REST API Support: https://lilt.atlassian.net/servicedesk/customer/portals    The Lilt REST API enables programmatic access to the full-range of Lilt backend services including:   * Training of and translating with interactive, adaptive machine translation   * Large-scale translation memory   * The Lexicon (a large-scale termbase)   * Programmatic control of the Lilt CAT environment   * Translation memory synchronization  Requests and responses are in JSON format. The REST API only responds to HTTPS / SSL requests.  The base url for this REST API is `https://api.lilt.com/`.  ## Authentication  Requests are authenticated via REST API key, which requires the Business plan.  Requests are authenticated using [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Add your REST API key as both the `username` and `password`.  For development, you may also pass the REST API key via the `key` query parameter. This is less secure than HTTP Basic Auth, and is not recommended for production use.  ## Quotas  Our services have a general quota of 4000 requests per minute. Should you hit the maximum requests per minute, you will need to wait 60 seconds before you can send another request. 
 *
 * The version of the OpenAPI document: v3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import TranslateSegmentBody from '../model/TranslateSegmentBody';
import TranslationInfo from '../model/TranslationInfo';
import TranslationList from '../model/TranslationList';

/**
* Translate service.
* @module api/TranslateApi
* @version 0.6.3
*/
export default class TranslateApi {

    /**
    * Constructs a new TranslateApi. 
    * @alias module:api/TranslateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Translate a File
     * Start machine translation of one or more Files that have previously been uploaded.  The response will include an `id` parameter that can be used to monitor and download the translations in subsequent calls.  Example CURL: ``` curl --X --request POST 'https://api.lilt.com/v2/translate/file?key=API_KEY&fileId=583&memoryId=2495&configId=123&withTM=true' ```  
     * @param {String} fileId List of File ids to be translated, comma separated.
     * @param {String} memoryId Id of Memory to use in translation.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.configId An optional pararameter to specify an import configuration to be applied when extracting translatable content from this file.
     * @param {Boolean} opts.withTM An optional boolean parameter to toggle the use of Translation Memory in the translation of the file.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TranslationInfo>} and HTTP response
     */
    batchTranslateFileWithHttpInfo(fileId, memoryId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling batchTranslateFile");
      }
      // verify the required parameter 'memoryId' is set
      if (memoryId === undefined || memoryId === null) {
        throw new Error("Missing the required parameter 'memoryId' when calling batchTranslateFile");
      }

      let pathParams = {
      };
      let queryParams = {
        'fileId': fileId,
        'memoryId': memoryId,
        'configId': opts['configId'],
        'withTM': opts['withTM']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TranslationInfo];
      return this.apiClient.callApi(
        '/v2/translate/file', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Translate a File
     * Start machine translation of one or more Files that have previously been uploaded.  The response will include an `id` parameter that can be used to monitor and download the translations in subsequent calls.  Example CURL: ``` curl --X --request POST 'https://api.lilt.com/v2/translate/file?key=API_KEY&fileId=583&memoryId=2495&configId=123&withTM=true' ```  
     * @param {String} fileId List of File ids to be translated, comma separated.
     * @param {String} memoryId Id of Memory to use in translation.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.configId An optional pararameter to specify an import configuration to be applied when extracting translatable content from this file.
     * @param {Boolean} opts.withTM An optional boolean parameter to toggle the use of Translation Memory in the translation of the file.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TranslationInfo>}
     */
    batchTranslateFile(fileId, memoryId, opts) {
      return this.batchTranslateFileWithHttpInfo(fileId, memoryId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download translated file
     * Download a translated File.  Example CURL: ``` curl --X --request GET 'https://api.lilt.com/v2/translate/files?key=API_KEY&id=1' ```  
     * @param {String} id A translation id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Blob} and HTTP response
     */
    downloadFileWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling downloadFile");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = 'Blob';
      return this.apiClient.callApi(
        '/v2/translate/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download translated file
     * Download a translated File.  Example CURL: ``` curl --X --request GET 'https://api.lilt.com/v2/translate/files?key=API_KEY&id=1' ```  
     * @param {String} id A translation id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Blob}
     */
    downloadFile(id) {
      return this.downloadFileWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Monitor file translation
     * Get information about the one or more Files that are being translated with machine translation. Query filters are optional but at least one must be provided.  Example CURL: ``` curl --X --request GET 'https://api.lilt.com/v2/translate/file?key=API_KEY&translationIds=1,2&fromTime=1607966744&toTime=1707966744&status=InProgress' ```  
     * @param {Object} opts Optional parameters
     * @param {String} opts.translationIds List of translation ids, comma separated
     * @param {String} opts.status One of the translation statuses - `InProgress`, `Completed`, `Failed`, `ReadyForDownload`
     * @param {Number} opts.fromTime Results after this time (inclusive) will be returned, specified as seconds since the Unix epoch.
     * @param {Number} opts.toTime Results before this time (exclusive) will be returned, specified as seconds since the Unix epoch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TranslationInfo>} and HTTP response
     */
    monitorFileTranslationWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'translationIds': opts['translationIds'],
        'status': opts['status'],
        'fromTime': opts['fromTime'],
        'toTime': opts['toTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TranslationInfo];
      return this.apiClient.callApi(
        '/v2/translate/file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Monitor file translation
     * Get information about the one or more Files that are being translated with machine translation. Query filters are optional but at least one must be provided.  Example CURL: ``` curl --X --request GET 'https://api.lilt.com/v2/translate/file?key=API_KEY&translationIds=1,2&fromTime=1607966744&toTime=1707966744&status=InProgress' ```  
     * @param {Object} opts Optional parameters
     * @param {String} opts.translationIds List of translation ids, comma separated
     * @param {String} opts.status One of the translation statuses - `InProgress`, `Completed`, `Failed`, `ReadyForDownload`
     * @param {Number} opts.fromTime Results after this time (inclusive) will be returned, specified as seconds since the Unix epoch.
     * @param {Number} opts.toTime Results before this time (exclusive) will be returned, specified as seconds since the Unix epoch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TranslationInfo>}
     */
    monitorFileTranslation(opts) {
      return this.monitorFileTranslationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Translate a segment
     * Translate a source string.  Setting the `rich` parameter to `true` will change the response format to include additional information about each translation including a model score, word alignments,  and formatting information. The rich format can be seen in the example response on this page.  By default, this endpoint also returns translation memory (TM) fuzzy matches, along with associated scores. Fuzzy matches always appear ahead of machine translation output in the response.  The maximum source length is 5,000 characters.  Usage charges apply to this endpoint for production REST API keys.  
     * @param {Object} opts Optional parameters
     * @param {module:model/TranslateSegmentBody} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TranslationList} and HTTP response
     */
    translateSegmentPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TranslationList;
      return this.apiClient.callApi(
        '/v2/translate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Translate a segment
     * Translate a source string.  Setting the `rich` parameter to `true` will change the response format to include additional information about each translation including a model score, word alignments,  and formatting information. The rich format can be seen in the example response on this page.  By default, this endpoint also returns translation memory (TM) fuzzy matches, along with associated scores. Fuzzy matches always appear ahead of machine translation output in the response.  The maximum source length is 5,000 characters.  Usage charges apply to this endpoint for production REST API keys.  
     * @param {Object} opts Optional parameters
     * @param {module:model/TranslateSegmentBody} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TranslationList}
     */
    translateSegmentPost(opts) {
      return this.translateSegmentPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
