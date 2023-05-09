/**
 * Lilt REST API
 * The Lilt REST API enables programmatic access to the full-range of Lilt backend services including:   * Training of and translating with interactive, adaptive machine translation   * Large-scale translation memory   * The Lexicon (a large-scale termbase)   * Programmatic control of the Lilt CAT environment   * Translation memory synchronization  Requests and responses are in JSON format. The REST API only responds to HTTPS / SSL requests.  ## Authentication  Requests are authenticated via REST API key, which requires the Business plan.  Requests are authenticated using [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Add your REST API key as both the `username` and `password`.  For development, you may also pass the REST API key via the `key` query parameter. This is less secure than HTTP Basic Auth, and is not recommended for production use.  ## Quotas  Our services have a general quota of 4000 requests per minute. Should you hit the maximum requests per minute, you will need to wait 60 seconds before you can send another request. 
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
import Connector from '../model/Connector';
import ConnectorArguments from '../model/ConnectorArguments';
import ConnectorDeleteResponse from '../model/ConnectorDeleteResponse';
import ConnectorJob from '../model/ConnectorJob';
import Error from '../model/Error';

/**
* Connectors service.
* @module api/ConnectorsApi
* @version 0.5.0
*/
export default class ConnectorsApi {

    /**
    * Constructs a new ConnectorsApi. 
    * @alias module:api/ConnectorsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Upload a Connector
     * Create a new connector linked to a supported external cms. 
     * @param {module:model/Connector} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Connector} and HTTP response
     */
    createConnectorWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createConnector");
      }

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
      let returnType = Connector;
      return this.apiClient.callApi(
        '/connectors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload a Connector
     * Create a new connector linked to a supported external cms. 
     * @param {module:model/Connector} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Connector}
     */
    createConnector(body) {
      return this.createConnectorWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Connector
     * Delete a Connector.  Example CURL command: ```   curl -X DELETE https://lilt.com/2/connectors?key=API_KEY&id=123 ```  
     * @param {Number} id A unique Connector identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConnectorDeleteResponse} and HTTP response
     */
    deleteConnectorWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteConnector");
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
      let accepts = ['application/json'];
      let returnType = ConnectorDeleteResponse;
      return this.apiClient.callApi(
        '/connectors', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Connector
     * Delete a Connector.  Example CURL command: ```   curl -X DELETE https://lilt.com/2/connectors?key=API_KEY&id=123 ```  
     * @param {Number} id A unique Connector identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConnectorDeleteResponse}
     */
    deleteConnector(id) {
      return this.deleteConnectorWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deliver a Connector Job
     * Request an export job for the given connector job ID. This will check Lilt for completed projects that are associated with this job and deliver them to the target system.  Example CURL command: ```  curl -X POST https://lilt.com/2/connectors/jobs/deliver?key=API_KEY&id=9274 ``` 
     * @param {Number} id A unique Connector Job identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    exportConnectorJobWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling exportConnectorJob");
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
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/connectors/jobs/deliver', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deliver a Connector Job
     * Request an export job for the given connector job ID. This will check Lilt for completed projects that are associated with this job and deliver them to the target system.  Example CURL command: ```  curl -X POST https://lilt.com/2/connectors/jobs/deliver?key=API_KEY&id=9274 ``` 
     * @param {Number} id A unique Connector Job identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    exportConnectorJob(id) {
      return this.exportConnectorJobWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Connector Job
     * Retrieves a connector job available to your user. Use this to check the status of jobs started by the `/connectors/sync` and `/connectors/jobs/deliver` endpoints.  Example CURL command: ```  curl -X GET https://lilt.com/2/connectors/jobs?key=API_KEY&id=9274 ``` 
     * @param {Number} id A unique Connector Job identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConnectorJob>} and HTTP response
     */
    getConnectorJobsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getConnectorJobs");
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
      let accepts = ['application/json'];
      let returnType = [ConnectorJob];
      return this.apiClient.callApi(
        '/connectors/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Connector Job
     * Retrieves a connector job available to your user. Use this to check the status of jobs started by the `/connectors/sync` and `/connectors/jobs/deliver` endpoints.  Example CURL command: ```  curl -X GET https://lilt.com/2/connectors/jobs?key=API_KEY&id=9274 ``` 
     * @param {Number} id A unique Connector Job identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ConnectorJob>}
     */
    getConnectorJobs(id) {
      return this.getConnectorJobsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Connector
     * Retrieves one or more connectors available to your user. Connectors are not associated with a project or a memory.  To retrieve a specific connector, specify the <strong>id</strong> request parameter. To retrieve all connectors, omit the <strong>id</strong> request parameter.  Example CURL command: ```  curl -X GET https://lilt.com/2/connectors?key=API_KEY&id=274```
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id A unique Connector identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Connector>} and HTTP response
     */
    getConnectorsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Connector];
      return this.apiClient.callApi(
        '/connectors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Connector
     * Retrieves one or more connectors available to your user. Connectors are not associated with a project or a memory.  To retrieve a specific connector, specify the <strong>id</strong> request parameter. To retrieve all connectors, omit the <strong>id</strong> request parameter.  Example CURL command: ```  curl -X GET https://lilt.com/2/connectors?key=API_KEY&id=274```
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id A unique Connector identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Connector>}
     */
    getConnectors(opts) {
      return this.getConnectorsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sync a Connector
     * Request an import job for the given connector ID. This will check the target system for new content to pull into Lilt.  Example CURL command: ```  curl -X GET https://lilt.com/2/connectors/sync?key=API_KEY&id=128 ``` 
     * @param {Number} id A unique Connector identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConnectorJob} and HTTP response
     */
    syncConnectorWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling syncConnector");
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
      let accepts = ['application/json'];
      let returnType = ConnectorJob;
      return this.apiClient.callApi(
        '/connectors/sync', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sync a Connector
     * Request an import job for the given connector ID. This will check the target system for new content to pull into Lilt.  Example CURL command: ```  curl -X GET https://lilt.com/2/connectors/sync?key=API_KEY&id=128 ``` 
     * @param {Number} id A unique Connector identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConnectorJob}
     */
    syncConnector(id) {
      return this.syncConnectorWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload a Connector
     * Create a new connector linked to a supported external content source. 
     * @param {module:model/ConnectorArguments} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Connector} and HTTP response
     */
    updateConnectorWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateConnector");
      }

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
      let returnType = Connector;
      return this.apiClient.callApi(
        '/connectors', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload a Connector
     * Create a new connector linked to a supported external content source. 
     * @param {module:model/ConnectorArguments} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Connector}
     */
    updateConnector(body) {
      return this.updateConnectorWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
