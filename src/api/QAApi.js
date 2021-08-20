/**
 * Lilt REST API
 * The Lilt REST API enables programmatic access to the full-range of Lilt backend services including:   * Training of and translating with interactive, adaptive machine translation   * Large-scale translation memory   * The Lexicon (a large-scale termbase)   * Programmatic control of the Lilt CAT environment   * Translation memory synchronization  Requests and responses are in JSON format. The REST API only responds to HTTPS / SSL requests. ## Authentication Requests are authenticated via REST API key, which requires the Business plan.  Requests are authenticated using [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Add your REST API key as both the `username` and `password`.  For development, you may also pass the REST API key via the `key` query parameter. This is less secure than HTTP Basic Auth, and is not recommended for production use. 
 *
 * The version of the OpenAPI document: v2.0
 * Contact: support@lilt.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error2 from '../model/Error2';
import QARuleMatches from '../model/QARuleMatches';

/**
* QA service.
* @module api/QAApi
* @version 0.6.2
*/
export default class QAApi {

    /**
    * Constructs a new QAApi. 
    * @alias module:api/QAApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Perform QA check
     * Perform QA checks on a target string. Optionally, you can specify a source string for additional bilingual checks, e.g. number consistency. 
     * @param {String} target A target string to be checked.
     * @param {String} trglang An ISO 639-1 language code.
     * @param {Object} opts Optional parameters
     * @param {String} opts.source An optional source string.
     * @param {String} opts.srclang An ISO 639-1 language code.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QARuleMatches} and HTTP response
     */
    qaCheckWithHttpInfo(target, trglang, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling qaCheck");
      }
      // verify the required parameter 'trglang' is set
      if (trglang === undefined || trglang === null) {
        throw new Error("Missing the required parameter 'trglang' when calling qaCheck");
      }

      let pathParams = {
      };
      let queryParams = {
        'target': target,
        'trglang': trglang,
        'source': opts['source'],
        'srclang': opts['srclang']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = QARuleMatches;
      return this.apiClient.callApi(
        '/qa', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Perform QA check
     * Perform QA checks on a target string. Optionally, you can specify a source string for additional bilingual checks, e.g. number consistency. 
     * @param {String} target A target string to be checked.
     * @param {String} trglang An ISO 639-1 language code.
     * @param {Object} opts Optional parameters
     * @param {String} opts.source An optional source string.
     * @param {String} opts.srclang An ISO 639-1 language code.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/QARuleMatches}
     */
    qaCheck(target, trglang, opts) {
      return this.qaCheckWithHttpInfo(target, trglang, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
