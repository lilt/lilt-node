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
 * The MatchBand model module.
 * @module model/MatchBand
 * @version 0.5.0
 */
class MatchBand {
    /**
     * Constructs a new <code>MatchBand</code>.
     * A translation memory match band. 
     * @alias module:model/MatchBand
     */
    constructor() { 
        
        MatchBand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MatchBand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MatchBand} obj Optional instance to populate.
     * @return {module:model/MatchBand} The populated <code>MatchBand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchBand();

            if (data.hasOwnProperty('minimum_score')) {
                obj['minimum_score'] = ApiClient.convertToType(data['minimum_score'], 'Number');
            }
            if (data.hasOwnProperty('maximum_score')) {
                obj['maximum_score'] = ApiClient.convertToType(data['maximum_score'], 'Number');
            }
            if (data.hasOwnProperty('num_source_words')) {
                obj['num_source_words'] = ApiClient.convertToType(data['num_source_words'], 'Number');
            }
            if (data.hasOwnProperty('num_segments')) {
                obj['num_segments'] = ApiClient.convertToType(data['num_segments'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The minimum fuzzy match score.
 * @member {Number} minimum_score
 */
MatchBand.prototype['minimum_score'] = undefined;

/**
 * The maximum fuzzy match score.
 * @member {Number} maximum_score
 */
MatchBand.prototype['maximum_score'] = undefined;

/**
 * The number of source words in the band.
 * @member {Number} num_source_words
 */
MatchBand.prototype['num_source_words'] = undefined;

/**
 * The number of source segments in the band.
 * @member {Number} num_segments
 */
MatchBand.prototype['num_segments'] = undefined;






export default MatchBand;

