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

import ApiClient from '../ApiClient';
import AssignmentDetails from './AssignmentDetails';
import AssignmentError from './AssignmentError';

/**
 * The AutoAssignmentResponse model module.
 * @module model/AutoAssignmentResponse
 * @version 0.5.0
 */
class AutoAssignmentResponse {
    /**
     * Constructs a new <code>AutoAssignmentResponse</code>.
     * Auto assignment status.
     * @alias module:model/AutoAssignmentResponse
     * @param projectId {Number} The id of the project.
     * @param success {Boolean} True if the operation was successful for this project.
     */
    constructor(projectId, success) { 
        
        AutoAssignmentResponse.initialize(this, projectId, success);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, projectId, success) { 
        obj['projectId'] = projectId;
        obj['success'] = success;
    }

    /**
     * Constructs a <code>AutoAssignmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoAssignmentResponse} obj Optional instance to populate.
     * @return {module:model/AutoAssignmentResponse} The populated <code>AutoAssignmentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoAssignmentResponse();

            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'Number');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [AssignmentError]);
            }
            if (data.hasOwnProperty('assignments')) {
                obj['assignments'] = ApiClient.convertToType(data['assignments'], [AssignmentDetails]);
            }
        }
        return obj;
    }


}

/**
 * The id of the project.
 * @member {Number} projectId
 */
AutoAssignmentResponse.prototype['projectId'] = undefined;

/**
 * True if the operation was successful for this project.
 * @member {Boolean} success
 */
AutoAssignmentResponse.prototype['success'] = undefined;

/**
 * An optional error message if success = false
 * @member {String} error
 */
AutoAssignmentResponse.prototype['error'] = undefined;

/**
 * A list of errors if there were any.
 * @member {Array.<module:model/AssignmentError>} errors
 */
AutoAssignmentResponse.prototype['errors'] = undefined;

/**
 * Assignment details, like which user was assigned and which role.
 * @member {Array.<module:model/AssignmentDetails>} assignments
 */
AutoAssignmentResponse.prototype['assignments'] = undefined;






export default AutoAssignmentResponse;

