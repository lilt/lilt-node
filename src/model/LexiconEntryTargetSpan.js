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
 * The LexiconEntryTargetSpan model module.
 * @module model/LexiconEntryTargetSpan
 * @version 0.5.0
 */
class LexiconEntryTargetSpan {
    /**
     * Constructs a new <code>LexiconEntryTargetSpan</code>.
     * An object that indicates the location in the target of contiguous words that align with the source query. 
     * @alias module:model/LexiconEntryTargetSpan
     */
    constructor() { 
        
        LexiconEntryTargetSpan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LexiconEntryTargetSpan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LexiconEntryTargetSpan} obj Optional instance to populate.
     * @return {module:model/LexiconEntryTargetSpan} The populated <code>LexiconEntryTargetSpan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LexiconEntryTargetSpan();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The zero-indexed start index when `target` is split on whitespace. 
 * @member {Number} start
 */
LexiconEntryTargetSpan.prototype['start'] = undefined;

/**
 * The length in words after `start` of the target aligned phrase. 
 * @member {Number} length
 */
LexiconEntryTargetSpan.prototype['length'] = undefined;






export default LexiconEntryTargetSpan;

