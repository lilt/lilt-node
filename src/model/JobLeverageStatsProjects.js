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

import ApiClient from '../ApiClient';

/**
 * The JobLeverageStatsProjects model module.
 * @module model/JobLeverageStatsProjects
 * @version 0.6.2
 */
class JobLeverageStatsProjects {
    /**
     * Constructs a new <code>JobLeverageStatsProjects</code>.
     * @alias module:model/JobLeverageStatsProjects
     */
    constructor() { 
        
        JobLeverageStatsProjects.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobLeverageStatsProjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobLeverageStatsProjects} obj Optional instance to populate.
     * @return {module:model/JobLeverageStatsProjects} The populated <code>JobLeverageStatsProjects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobLeverageStatsProjects();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('sourceWords')) {
                obj['sourceWords'] = ApiClient.convertToType(data['sourceWords'], 'Number');
            }
            if (data.hasOwnProperty('exactWords')) {
                obj['exactWords'] = ApiClient.convertToType(data['exactWords'], 'Number');
            }
            if (data.hasOwnProperty('fuzzyWords')) {
                obj['fuzzyWords'] = ApiClient.convertToType(data['fuzzyWords'], 'Number');
            }
            if (data.hasOwnProperty('newWords')) {
                obj['newWords'] = ApiClient.convertToType(data['newWords'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The Project ID.
 * @member {Number} id
 */
JobLeverageStatsProjects.prototype['id'] = undefined;

/**
 * Total number of source words.
 * @member {Number} sourceWords
 */
JobLeverageStatsProjects.prototype['sourceWords'] = undefined;

/**
 * Total number of exact words.
 * @member {Number} exactWords
 */
JobLeverageStatsProjects.prototype['exactWords'] = undefined;

/**
 * Total number of fuzzy words.
 * @member {Number} fuzzyWords
 */
JobLeverageStatsProjects.prototype['fuzzyWords'] = undefined;

/**
 * Total number of fuzzy words.
 * @member {Number} newWords
 */
JobLeverageStatsProjects.prototype['newWords'] = undefined;






export default JobLeverageStatsProjects;

