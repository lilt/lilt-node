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
import Project from '../model/Project';
import ProjectCreateParameters from '../model/ProjectCreateParameters';
import ProjectDeleteResponse from '../model/ProjectDeleteResponse';

/**
* Projects service.
* @module api/ProjectsApi
* @version v3.0
*/
export default class ProjectsApi {

    /**
    * Constructs a new ProjectsApi. 
    * @alias module:api/ProjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Project
     * Create a Project. A Project is a collection of Documents.  A Project is associated with exactly one Memory.  Projects appear in the dashboard of the web app.  
     * @param {module:model/ProjectCreateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    createProjectWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProject");
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
      let accepts = ['application/json', 'application/octet-stream', 'text/plain'];
      let returnType = Project;
      return this.apiClient.callApi(
        '/v2/projects', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Project
     * Create a Project. A Project is a collection of Documents.  A Project is associated with exactly one Memory.  Projects appear in the dashboard of the web app.  
     * @param {module:model/ProjectCreateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    createProject(body) {
      return this.createProjectWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Project
     * Delete a Project. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id A unique Project identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProjectDeleteResponse} and HTTP response
     */
    deleteProjectWithHttpInfo(opts) {
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
      let accepts = ['application/json', 'application/octet-stream', 'text/plain'];
      let returnType = ProjectDeleteResponse;
      return this.apiClient.callApi(
        '/v2/projects', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Project
     * Delete a Project. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id A unique Project identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectDeleteResponse}
     */
    deleteProject(opts) {
      return this.deleteProjectWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Project
     * Retrieves one or more projects, including the documents associated with each project. Retrieving a project is the most efficient way to retrieve a single project, multiple projects or a list of all available projects.  To retrieve a specific project, specify the `id` request parameter or you can retrieve multiple projects by adding comma (,) between ids eg. `?id=1234,5678`. To retrieve all projects, omit the `id` request parameter. To limit the retrieved projects to those with a particular source language or target language, specify the corresponding ISO 639-1 language codes in the `srclang` and `trglang` request parameters, respectively.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id A unique Project identifier. It can be a single id or multiple ids separated by a comma
     * @param {String} opts.srclang An ISO 639-1 language code.
     * @param {String} opts.trglang An ISO 639-1 language code.
     * @param {Number} opts.fromTime Unix time stamp (epoch, in seconds) of Projects with `created_at` greater than or equal to the value.
     * @param {Number} opts.toTime Unix time stamp (epoch, in seconds) of Projects with `created_at` less than the value.
     * @param {String} opts.state A project state (backlog, inProgress, inReview, inQA, done).
     * @param {Boolean} opts.archived A flag that toggles whether to include archived projects in the response (the default is `true`).
     * @param {Number} opts.connectorId A unique Connector identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Project>} and HTTP response
     */
    getProjectsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id'],
        'srclang': opts['srclang'],
        'trglang': opts['trglang'],
        'from_time': opts['fromTime'],
        'to_time': opts['toTime'],
        'state': opts['state'],
        'archived': opts['archived'],
        'connector_id': opts['connectorId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/octet-stream', 'text/plain'];
      let returnType = [Project];
      return this.apiClient.callApi(
        '/v2/projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Project
     * Retrieves one or more projects, including the documents associated with each project. Retrieving a project is the most efficient way to retrieve a single project, multiple projects or a list of all available projects.  To retrieve a specific project, specify the `id` request parameter or you can retrieve multiple projects by adding comma (,) between ids eg. `?id=1234,5678`. To retrieve all projects, omit the `id` request parameter. To limit the retrieved projects to those with a particular source language or target language, specify the corresponding ISO 639-1 language codes in the `srclang` and `trglang` request parameters, respectively.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id A unique Project identifier. It can be a single id or multiple ids separated by a comma
     * @param {String} opts.srclang An ISO 639-1 language code.
     * @param {String} opts.trglang An ISO 639-1 language code.
     * @param {Number} opts.fromTime Unix time stamp (epoch, in seconds) of Projects with `created_at` greater than or equal to the value.
     * @param {Number} opts.toTime Unix time stamp (epoch, in seconds) of Projects with `created_at` less than the value.
     * @param {String} opts.state A project state (backlog, inProgress, inReview, inQA, done).
     * @param {Boolean} opts.archived A flag that toggles whether to include archived projects in the response (the default is `true`).
     * @param {Number} opts.connectorId A unique Connector identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Project>}
     */
    getProjects(opts) {
      return this.getProjectsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
