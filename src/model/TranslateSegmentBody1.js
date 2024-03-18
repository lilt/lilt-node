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

/**
 * The TranslateSegmentBody1 model module.
 * @module model/TranslateSegmentBody1
 * @version 0.5.0
 */
class TranslateSegmentBody1 {
    /**
     * Constructs a new <code>TranslateSegmentBody1</code>.
     * @alias module:model/TranslateSegmentBody1
     * @param memoryId {Number} A unique Memory identifier.
     */
    constructor(memoryId) { 
        
        TranslateSegmentBody1.initialize(this, memoryId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, memoryId) { 
        obj['memory_id'] = memoryId;
    }

    /**
     * Constructs a <code>TranslateSegmentBody1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranslateSegmentBody1} obj Optional instance to populate.
     * @return {module:model/TranslateSegmentBody1} The populated <code>TranslateSegmentBody1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TranslateSegmentBody1();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('memory_id')) {
                obj['memory_id'] = ApiClient.convertToType(data['memory_id'], 'Number');
            }
            if (data.hasOwnProperty('source_hash')) {
                obj['source_hash'] = ApiClient.convertToType(data['source_hash'], 'Number');
            }
            if (data.hasOwnProperty('n')) {
                obj['n'] = ApiClient.convertToType(data['n'], 'Number');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('rich')) {
                obj['rich'] = ApiClient.convertToType(data['rich'], 'Boolean');
            }
            if (data.hasOwnProperty('tm_matches')) {
                obj['tm_matches'] = ApiClient.convertToType(data['tm_matches'], 'Boolean');
            }
            if (data.hasOwnProperty('project_tags')) {
                obj['project_tags'] = ApiClient.convertToType(data['project_tags'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A unique Segment identifier.
 * @member {String} source
 */
TranslateSegmentBody1.prototype['source'] = undefined;

/**
 * A unique Memory identifier.
 * @member {Number} memory_id
 */
TranslateSegmentBody1.prototype['memory_id'] = undefined;

/**
 * A source hash code.
 * @member {Number} source_hash
 */
TranslateSegmentBody1.prototype['source_hash'] = undefined;

/**
 * Return top n translations (deprecated).
 * @member {Number} n
 */
TranslateSegmentBody1.prototype['n'] = undefined;

/**
 * A target prefix
 * @member {String} prefix
 */
TranslateSegmentBody1.prototype['prefix'] = undefined;

/**
 * Returns rich translation information (e.g., with word alignments).
 * @member {Boolean} rich
 * @default false
 */
TranslateSegmentBody1.prototype['rich'] = false;

/**
 * Include translation memory fuzzy matches.
 * @member {Boolean} tm_matches
 * @default true
 */
TranslateSegmentBody1.prototype['tm_matches'] = true;

/**
 * Project tags. Projects tags in source to target if set to true.
 * @member {Boolean} project_tags
 * @default false
 */
TranslateSegmentBody1.prototype['project_tags'] = false;






export default TranslateSegmentBody1;
