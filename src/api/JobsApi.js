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
import JobCreateParameters from '../model/JobCreateParameters';
import JobDeleteResponse from '../model/JobDeleteResponse';
import JobUpdateParameters from '../model/JobUpdateParameters';

/**
* Jobs service.
* @module api/JobsApi
* @version 0.5.0
*/
export default class JobsApi {

    /**
    * Constructs a new JobsApi. 
    * @alias module:api/JobsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Archive a Job
     * Set job to archived, unassign all linguists and archive all projects and documents inside the job.  It will return the archived job.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs/{id}/archive?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    archiveJobWithHttpInfo(jobId) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling archiveJob");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/jobs/{jobId}/archive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Archive a Job
     * Set job to archived, unassign all linguists and archive all projects and documents inside the job.  It will return the archived job.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs/{id}/archive?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    archiveJob(jobId) {
      return this.archiveJobWithHttpInfo(jobId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Job
     * Create a Job. A Job is a collection of Projects. A Job will contain multiple projects, based on the language pair. A Project is associated with exactly one Memory.  Jobs appear in the Jobs dashboard of the web app.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs?key=API_KEY' \\ --header 'Content-Type: application/json' \\ --data-raw '{   \"name\": \"test job\",   \"fileIds\": [5009, 5010, 5011],   \"due\": \"2022-05-05T10:56:44.985Z\",   \"srcLang\": \"en\",   \"srcLocale\": \"US\",   \"languagePairs\": [       { \"memoryId\": 3121, \"trgLang\": \"de\" },       { \"memoryId\": 2508, \"trgLang\": \"fr\" },       { \"memoryId\": 3037, \"trgLang\": \"zh\" }     ] }' ```  
     * @param {module:model/JobCreateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createJobWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createJob");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/jobs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Job
     * Create a Job. A Job is a collection of Projects. A Job will contain multiple projects, based on the language pair. A Project is associated with exactly one Memory.  Jobs appear in the Jobs dashboard of the web app.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs?key=API_KEY' \\ --header 'Content-Type: application/json' \\ --data-raw '{   \"name\": \"test job\",   \"fileIds\": [5009, 5010, 5011],   \"due\": \"2022-05-05T10:56:44.985Z\",   \"srcLang\": \"en\",   \"srcLocale\": \"US\",   \"languagePairs\": [       { \"memoryId\": 3121, \"trgLang\": \"de\" },       { \"memoryId\": 2508, \"trgLang\": \"fr\" },       { \"memoryId\": 3037, \"trgLang\": \"zh\" }     ] }' ```  
     * @param {module:model/JobCreateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createJob(body) {
      return this.createJobWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Job
     * Delete a job, deletes all projects and documents in the job, deletes all the segments from all the job's translation memories.  Example CURL command:   ``` curl -X DELETE 'https://lilt.com/2/jobs/{id}?key=API_KEY' ```
     * @param {Number} id A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobDeleteResponse} and HTTP response
     */
    deleteJobWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteJob");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = JobDeleteResponse;
      return this.apiClient.callApi(
        '/jobs/{jobId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Job
     * Delete a job, deletes all projects and documents in the job, deletes all the segments from all the job's translation memories.  Example CURL command:   ``` curl -X DELETE 'https://lilt.com/2/jobs/{id}?key=API_KEY' ```
     * @param {Number} id A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobDeleteResponse}
     */
    deleteJob(id) {
      return this.deleteJobWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deliver a Job
     * Set the job state to delivered and set all the projects in the job to done  It will return the delivered job.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs/{id}/deliver?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deliverJobWithHttpInfo(jobId) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling deliverJob");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/jobs/{jobId}/deliver', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deliver a Job
     * Set the job state to delivered and set all the projects in the job to done  It will return the delivered job.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs/{id}/deliver?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deliverJob(jobId) {
      return this.deliverJobWithHttpInfo(jobId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download a Job
     * Make sure you have exported a job with the same id before using this api.    Downloading files requires the exported job `id` in the param.  Example CURL command:   ``` curl -X GET 'https://lilt.com/2/jobs/{id}/download?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    downloadJobWithHttpInfo(jobId) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling downloadJob");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
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
        '/jobs/{jobId}/downlod', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download a Job
     * Make sure you have exported a job with the same id before using this api.    Downloading files requires the exported job `id` in the param.  Example CURL command:   ``` curl -X GET 'https://lilt.com/2/jobs/{id}/download?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    downloadJob(jobId) {
      return this.downloadJobWithHttpInfo(jobId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Export a Job
     * Prepare job files for download. To export translated documents from the job use the query parameter `type=files`:   Example CURL command:   ``` curl -X GET 'https://lilt.com/2/jobs/{id}/export?key=API_KEY&type=files' ```  To export job memories use the query parameter `type=memory`.  The status of the export can be checked by requesting the job `GET /jobs/:jobId`, `job.isProcessing` will be `1` while in progress, `0` when idle and `-2` when the export failed.
     * @param {Number} jobId A job id.
     * @param {String} type category for files and memory.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    exportJobWithHttpInfo(jobId, type) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling exportJob");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling exportJob");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
        'type': type
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
        '/jobs/{jobId}/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Export a Job
     * Prepare job files for download. To export translated documents from the job use the query parameter `type=files`:   Example CURL command:   ``` curl -X GET 'https://lilt.com/2/jobs/{id}/export?key=API_KEY&type=files' ```  To export job memories use the query parameter `type=memory`.  The status of the export can be checked by requesting the job `GET /jobs/:jobId`, `job.isProcessing` will be `1` while in progress, `0` when idle and `-2` when the export failed.
     * @param {Number} jobId A job id.
     * @param {String} type category for files and memory.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    exportJob(jobId, type) {
      return this.exportJobWithHttpInfo(jobId, type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Job
     * Retrieves a job data along with stats. To retrieve a specific job, you will need the job `id` in the url path.  Example CURL command:   ``` curl -X GET 'https://lilt.com/2/jobs/{id}?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getJobWithHttpInfo(jobId) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getJob");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/jobs/{jobId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Job
     * Retrieves a job data along with stats. To retrieve a specific job, you will need the job `id` in the url path.  Example CURL command:   ``` curl -X GET 'https://lilt.com/2/jobs/{id}?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getJob(jobId) {
      return this.getJobWithHttpInfo(jobId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve Job Leverage Stats
     * Get the TM leverage stats for the job (new/exact/fuzzy matches).  Example CURL command:  ``` curl -X POST 'https://lilt.com/2/jobs/{id}/stats?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getJobLeverageStatsWithHttpInfo(jobId) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getJobLeverageStats");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/jobs/{jobId}/stats', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve Job Leverage Stats
     * Get the TM leverage stats for the job (new/exact/fuzzy matches).  Example CURL command:  ``` curl -X POST 'https://lilt.com/2/jobs/{id}/stats?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getJobLeverageStats(jobId) {
      return this.getJobLeverageStatsWithHttpInfo(jobId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reactivate a Job
     * Set the job state to active. Does not change the state of projects associated with the given job.  It will return the reactivated job.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs/{id}/reactivate?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    reactivateJobWithHttpInfo(jobId) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling reactivateJob");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/jobs/{jobId}/reactivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Reactivate a Job
     * Set the job state to active. Does not change the state of projects associated with the given job.  It will return the reactivated job.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs/{id}/reactivate?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    reactivateJob(jobId) {
      return this.reactivateJobWithHttpInfo(jobId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve all Jobs
     * Get all Jobs. You can retrieve all jobs from your account using the above API.  Example CURL command:   ``` curl -X GET 'https://lilt.com/2/jobs?key=API_KEY&isArchived=false' ```
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isArchived Retrieves all jobs that are archived.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    retrieveAllJobsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'isArchived': opts['isArchived']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Object];
      return this.apiClient.callApi(
        '/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve all Jobs
     * Get all Jobs. You can retrieve all jobs from your account using the above API.  Example CURL command:   ``` curl -X GET 'https://lilt.com/2/jobs?key=API_KEY&isArchived=false' ```
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isArchived Retrieves all jobs that are archived.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    retrieveAllJobs(opts) {
      return this.retrieveAllJobsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unarchive a Job
     * Set job to unarchived, the job will move to active status.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs/{id}/unarchive?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    unarchiveJobWithHttpInfo(jobId) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling unarchiveJob");
      }

      let pathParams = {
        'jobId': jobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/jobs/{jobId}/unarchive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unarchive a Job
     * Set job to unarchived, the job will move to active status.  Example CURL command:   ``` curl -X POST 'https://lilt.com/2/jobs/{id}/unarchive?key=API_KEY' ```
     * @param {Number} jobId A job id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    unarchiveJob(jobId) {
      return this.unarchiveJobWithHttpInfo(jobId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Job
     * Updates a job with the new job properties. To update a specific job, you will need the job `id` in the url path.  You can update job's name and due date by passing the property and new value in the body.  Example CURL command:   ``` curl -X PUT 'https://lilt.com/2/jobs/{id}?key=API_KEY' \\ --header 'Content-Type: application/json' \\ --data-raw '{   \"name\": \"test job\",   \"due\": \"2022-05-05T10:56:44.985Z\" }' ```
     * @param {Number} id A job id.
     * @param {Object} opts Optional parameters
     * @param {module:model/JobUpdateParameters} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateJobWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateJob");
      }

      let pathParams = {
        'id': id
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/jobs/{jobId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Job
     * Updates a job with the new job properties. To update a specific job, you will need the job `id` in the url path.  You can update job's name and due date by passing the property and new value in the body.  Example CURL command:   ``` curl -X PUT 'https://lilt.com/2/jobs/{id}?key=API_KEY' \\ --header 'Content-Type: application/json' \\ --data-raw '{   \"name\": \"test job\",   \"due\": \"2022-05-05T10:56:44.985Z\" }' ```
     * @param {Number} id A job id.
     * @param {Object} opts Optional parameters
     * @param {module:model/JobUpdateParameters} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateJob(id, opts) {
      return this.updateJobWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
