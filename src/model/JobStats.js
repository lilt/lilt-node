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
import JobProject from './JobProject';

/**
 * The JobStats model module.
 * @module model/JobStats
 * @version 3.0.0
 */
class JobStats {
    /**
     * Constructs a new <code>JobStats</code>.
     * A job stats shows an overview of job&#39;s statistical data including total number of exact words, fuzzy words, language pairs, projects, etc. 
     * @alias module:model/JobStats
     */
    constructor() { 
        
        JobStats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobStats} obj Optional instance to populate.
     * @return {module:model/JobStats} The populated <code>JobStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobStats();

            if (data.hasOwnProperty('exactWords')) {
                obj['exactWords'] = ApiClient.convertToType(data['exactWords'], 'Number');
            }
            if (data.hasOwnProperty('fuzzyWords')) {
                obj['fuzzyWords'] = ApiClient.convertToType(data['fuzzyWords'], 'Number');
            }
            if (data.hasOwnProperty('newWords')) {
                obj['newWords'] = ApiClient.convertToType(data['newWords'], 'Number');
            }
            if (data.hasOwnProperty('numDeliveredProjects')) {
                obj['numDeliveredProjects'] = ApiClient.convertToType(data['numDeliveredProjects'], 'Number');
            }
            if (data.hasOwnProperty('numLanguagePairs')) {
                obj['numLanguagePairs'] = ApiClient.convertToType(data['numLanguagePairs'], 'Number');
            }
            if (data.hasOwnProperty('numProjects')) {
                obj['numProjects'] = ApiClient.convertToType(data['numProjects'], 'Number');
            }
            if (data.hasOwnProperty('percentReviewed')) {
                obj['percentReviewed'] = ApiClient.convertToType(data['percentReviewed'], 'Number');
            }
            if (data.hasOwnProperty('percentTranslated')) {
                obj['percentTranslated'] = ApiClient.convertToType(data['percentTranslated'], 'Number');
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [JobProject]);
            }
            if (data.hasOwnProperty('sourceWords')) {
                obj['sourceWords'] = ApiClient.convertToType(data['sourceWords'], 'Number');
            }
            if (data.hasOwnProperty('uniqueLanguagePairs')) {
                obj['uniqueLanguagePairs'] = ApiClient.convertToType(data['uniqueLanguagePairs'], 'Number');
            }
            if (data.hasOwnProperty('uniqueLinguists')) {
                obj['uniqueLinguists'] = ApiClient.convertToType(data['uniqueLinguists'], 'Number');
            }
            if (data.hasOwnProperty('workflowStatus')) {
                obj['workflowStatus'] = ApiClient.convertToType(data['workflowStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Total number of exact words.
 * @member {Number} exactWords
 */
JobStats.prototype['exactWords'] = undefined;

/**
 * Total number of fuzzy words.
 * @member {Number} fuzzyWords
 */
JobStats.prototype['fuzzyWords'] = undefined;

/**
 * Total number of fuzzy words.
 * @member {Number} newWords
 */
JobStats.prototype['newWords'] = undefined;

/**
 * Total number of delivered projects.
 * @member {Number} numDeliveredProjects
 */
JobStats.prototype['numDeliveredProjects'] = undefined;

/**
 * Total number of delivered projects.
 * @member {Number} numLanguagePairs
 */
JobStats.prototype['numLanguagePairs'] = undefined;

/**
 * Total number of projects.
 * @member {Number} numProjects
 */
JobStats.prototype['numProjects'] = undefined;

/**
 * Overall percentage of documents reviewed.
 * @member {Number} percentReviewed
 */
JobStats.prototype['percentReviewed'] = undefined;

/**
 * Overall percentage of documents translated.
 * @member {Number} percentTranslated
 */
JobStats.prototype['percentTranslated'] = undefined;

/**
 * @member {Array.<module:model/JobProject>} projects
 */
JobStats.prototype['projects'] = undefined;

/**
 * Total number of source words.
 * @member {Number} sourceWords
 */
JobStats.prototype['sourceWords'] = undefined;

/**
 * Number of unique language pairs.
 * @member {Number} uniqueLanguagePairs
 */
JobStats.prototype['uniqueLanguagePairs'] = undefined;

/**
 * Number of unique linguists.
 * @member {Number} uniqueLinguists
 */
JobStats.prototype['uniqueLinguists'] = undefined;

/**
 * The status of the Workflow for the current job.
 * @member {module:model/JobStats.WorkflowStatusEnum} workflowStatus
 */
JobStats.prototype['workflowStatus'] = undefined;





/**
 * Allowed values for the <code>workflowStatus</code> property.
 * @enum {String}
 * @readonly
 */
JobStats['WorkflowStatusEnum'] = {

    /**
     * value: "READY_TO_START"
     * @const
     */
    "READY_TO_START": "READY_TO_START",

    /**
     * value: "IN_PROGRESS"
     * @const
     */
    "IN_PROGRESS": "IN_PROGRESS",

    /**
     * value: "DONE"
     * @const
     */
    "DONE": "DONE"
};



export default JobStats;

