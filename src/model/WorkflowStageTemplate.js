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

import ApiClient from '../ApiClient';

/**
 * The WorkflowStageTemplate model module.
 * @module model/WorkflowStageTemplate
 * @version 0.6.3
 */
class WorkflowStageTemplate {
    /**
     * Constructs a new <code>WorkflowStageTemplate</code>.
     * A single stage within a Workflow Template.
     * @alias module:model/WorkflowStageTemplate
     */
    constructor() { 
        
        WorkflowStageTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowStageTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowStageTemplate} obj Optional instance to populate.
     * @return {module:model/WorkflowStageTemplate} The populated <code>WorkflowStageTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowStageTemplate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('assignmentType')) {
                obj['assignmentType'] = ApiClient.convertToType(data['assignmentType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The human readable name of a Workflow stage.
 * @member {String} name
 */
WorkflowStageTemplate.prototype['name'] = undefined;

/**
 * An enum to represent all possible types of Workflow stage.
 * @member {module:model/WorkflowStageTemplate.AssignmentTypeEnum} assignmentType
 */
WorkflowStageTemplate.prototype['assignmentType'] = undefined;





/**
 * Allowed values for the <code>assignmentType</code> property.
 * @enum {String}
 * @readonly
 */
WorkflowStageTemplate['AssignmentTypeEnum'] = {

    /**
     * value: "READY_TO_START"
     * @const
     */
    "READY_TO_START": "READY_TO_START",

    /**
     * value: "TRANSLATE"
     * @const
     */
    "TRANSLATE": "TRANSLATE",

    /**
     * value: "REVIEW"
     * @const
     */
    "REVIEW": "REVIEW",

    /**
     * value: "SECONDARY_REVIEW"
     * @const
     */
    "SECONDARY_REVIEW": "SECONDARY_REVIEW",

    /**
     * value: "DONE"
     * @const
     */
    "DONE": "DONE"
};



export default WorkflowStageTemplate;

