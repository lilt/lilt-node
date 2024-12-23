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
 * The ProjectStats model module.
 * @module model/ProjectStats
 * @version 3.0.0
 */
class ProjectStats {
    /**
     * Constructs a new <code>ProjectStats</code>.
     * @alias module:model/ProjectStats
     * @param id {Number} 
     * @param sourceWords {Number} 
     * @param exactWords {Number} 
     * @param fuzzyWords {Number} 
     * @param newWords {Number} 
     */
    constructor(id, sourceWords, exactWords, fuzzyWords, newWords) { 
        
        ProjectStats.initialize(this, id, sourceWords, exactWords, fuzzyWords, newWords);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, sourceWords, exactWords, fuzzyWords, newWords) { 
        obj['id'] = id;
        obj['sourceWords'] = sourceWords;
        obj['exactWords'] = exactWords;
        obj['fuzzyWords'] = fuzzyWords;
        obj['newWords'] = newWords;
    }

    /**
     * Constructs a <code>ProjectStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectStats} obj Optional instance to populate.
     * @return {module:model/ProjectStats} The populated <code>ProjectStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectStats();

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
 * @member {Number} id
 */
ProjectStats.prototype['id'] = undefined;

/**
 * @member {Number} sourceWords
 */
ProjectStats.prototype['sourceWords'] = undefined;

/**
 * @member {Number} exactWords
 */
ProjectStats.prototype['exactWords'] = undefined;

/**
 * @member {Number} fuzzyWords
 */
ProjectStats.prototype['fuzzyWords'] = undefined;

/**
 * @member {Number} newWords
 */
ProjectStats.prototype['newWords'] = undefined;






export default ProjectStats;

