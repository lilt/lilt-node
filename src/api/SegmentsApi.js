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
import SegmentCreateParameters from '../model/SegmentCreateParameters';
import SegmentDeleteResponse from '../model/SegmentDeleteResponse';
import SegmentUpdateParameters from '../model/SegmentUpdateParameters';

/**
* Segments service.
* @module api/SegmentsApi
* @version 0.5.0
*/
export default class SegmentsApi {

    /**
    * Constructs a new SegmentsApi. 
    * @alias module:api/SegmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Segment
     * Create a Segment and add it to a Memory. A Segment is a source/target pair that is used to train the machine translation system and populate the translation memory. This is not intended to be used on documents and will throw an error.  The maximum source length is 5,000 characters.  
     * @param {module:model/SegmentCreateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createSegmentWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSegment");
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
        '/segments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Segment
     * Create a Segment and add it to a Memory. A Segment is a source/target pair that is used to train the machine translation system and populate the translation memory. This is not intended to be used on documents and will throw an error.  The maximum source length is 5,000 characters.  
     * @param {module:model/SegmentCreateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createSegment(body) {
      return this.createSegmentWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Segment
     * Delete a Segment from memory. This will not delete a segment from a document. 
     * @param {Number} id A unique Segment identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SegmentDeleteResponse} and HTTP response
     */
    deleteSegmentWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSegment");
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
      let returnType = SegmentDeleteResponse;
      return this.apiClient.callApi(
        '/segments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Segment
     * Delete a Segment from memory. This will not delete a segment from a document. 
     * @param {Number} id A unique Segment identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SegmentDeleteResponse}
     */
    deleteSegment(id) {
      return this.deleteSegmentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Segment
     * Retrieve a Segment.  
     * @param {Number} id A unique Segment identifier.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeComments Include comments in the response. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getSegmentWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSegment");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'include_comments': opts['includeComments']
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
        '/segments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Segment
     * Retrieve a Segment.  
     * @param {Number} id A unique Segment identifier.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeComments Include comments in the response. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getSegment(id, opts) {
      return this.getSegmentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unaccept and unlock segments
     * Unaccept and unlock segments. Sets individual segments' \"Review Done\" to false. Confirmed segments will remain confirmed.  Example curl: ```   curl --X --request POST 'https://lilt.com/2/segments/review/unlock?key=API_KEY' \\   --header 'Content-Type: application/json' \\   --data-raw '{       \"segmentIds\": [23921, 23922]   }' ``` 
     * @param {Object} body segment ids to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    segmentsReviewUnlockPostWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling segmentsReviewUnlockPost");
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
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/segments/review/unlock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unaccept and unlock segments
     * Unaccept and unlock segments. Sets individual segments' \"Review Done\" to false. Confirmed segments will remain confirmed.  Example curl: ```   curl --X --request POST 'https://lilt.com/2/segments/review/unlock?key=API_KEY' \\   --header 'Content-Type: application/json' \\   --data-raw '{       \"segmentIds\": [23921, 23922]   }' ``` 
     * @param {Object} body segment ids to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    segmentsReviewUnlockPost(body) {
      return this.segmentsReviewUnlockPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Tag a Segment
     * Project tags for a segment. The `source_tagged` string contains one or more SGML tags. The `target` string is untagged. This endpoint will automatically place the source tags in the target.  Usage charges apply to this endpoint for production REST API keys.  
     * @param {String} sourceTagged The tagged source string.
     * @param {String} target The target string.
     * @param {Number} memoryId A unique Memory identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    tagSegmentWithHttpInfo(sourceTagged, target, memoryId) {
      let postBody = null;
      // verify the required parameter 'sourceTagged' is set
      if (sourceTagged === undefined || sourceTagged === null) {
        throw new Error("Missing the required parameter 'sourceTagged' when calling tagSegment");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling tagSegment");
      }
      // verify the required parameter 'memoryId' is set
      if (memoryId === undefined || memoryId === null) {
        throw new Error("Missing the required parameter 'memoryId' when calling tagSegment");
      }

      let pathParams = {
      };
      let queryParams = {
        'source_tagged': sourceTagged,
        'target': target,
        'memory_id': memoryId
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
        '/segments/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Tag a Segment
     * Project tags for a segment. The `source_tagged` string contains one or more SGML tags. The `target` string is untagged. This endpoint will automatically place the source tags in the target.  Usage charges apply to this endpoint for production REST API keys.  
     * @param {String} sourceTagged The tagged source string.
     * @param {String} target The target string.
     * @param {Number} memoryId A unique Memory identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    tagSegment(sourceTagged, target, memoryId) {
      return this.tagSegmentWithHttpInfo(sourceTagged, target, memoryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Segment
     * Update a Segment in memory. The Memory will be updated with the new target string.  
     * @param {module:model/SegmentUpdateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateSegmentWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSegment");
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
        '/segments', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Segment
     * Update a Segment in memory. The Memory will be updated with the new target string.  
     * @param {module:model/SegmentUpdateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateSegment(body) {
      return this.updateSegmentWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
