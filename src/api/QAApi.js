/**
 * Lilt REST API
 * The Lilt REST API enables programmatic access to the full-range of Lilt backend services including:   * Training of and translating with interactive, adaptive machine translation   * Large-scale translation memory   * The Lexicon (a large-scale termbase)   * Programmatic control of the Lilt CAT environment   * Translation memory synchronization  Requests and responses are in JSON format. The REST API only responds to HTTPS / SSL requests. ## Authentication Requests are authenticated via REST API key, which requires the Business plan.  Requests are authenticated using [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Add your REST API key as both the `username` and `password`.  For development, you may also pass the REST API key via the `key` query parameter. This is less secure than HTTP Basic Auth, and is not recommended for production use. 
 *
 * OpenAPI spec version: v2.0
 * Contact: support@lilt.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import Error from '../model/Error';
import QARuleMatches from '../model/QARuleMatches';

/**
* QA service.
* @module api/QAApi
* @version v2.0
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
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QARuleMatches} and HTTP response
     */
    qaCheckWithHttpInfo(target, trglang, opts) {
      opts = opts || {};
      let postBody = null;

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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Perform QA check
     * Perform QA checks on a target string. Optionally, you can specify a source string for additional bilingual checks, e.g. number consistency. 
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/QARuleMatches}
     */
    qaCheck(target, trglang, opts) {
      return this.qaCheckWithHttpInfo(target, trglang, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
