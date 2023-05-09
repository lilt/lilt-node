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
 * The SegmentCreateParameters model module.
 * @module model/SegmentCreateParameters
 * @version 0.5.0
 */
class SegmentCreateParameters {
    /**
     * Constructs a new <code>SegmentCreateParameters</code>.
     * @alias module:model/SegmentCreateParameters
     * @param source {String} The source string.
     */
    constructor(source) { 
        
        SegmentCreateParameters.initialize(this, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source) { 
        obj['source'] = source;
    }

    /**
     * Constructs a <code>SegmentCreateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SegmentCreateParameters} obj Optional instance to populate.
     * @return {module:model/SegmentCreateParameters} The populated <code>SegmentCreateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SegmentCreateParameters();

            if (data.hasOwnProperty('memory_id')) {
                obj['memory_id'] = ApiClient.convertToType(data['memory_id'], 'Number');
            }
            if (data.hasOwnProperty('document_id')) {
                obj['document_id'] = ApiClient.convertToType(data['document_id'], 'Number');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique Memory identifier.
 * @member {Number} memory_id
 */
SegmentCreateParameters.prototype['memory_id'] = undefined;

/**
 * A unique Document identifier.
 * @member {Number} document_id
 */
SegmentCreateParameters.prototype['document_id'] = undefined;

/**
 * The source string.
 * @member {String} source
 */
SegmentCreateParameters.prototype['source'] = undefined;

/**
 * The target string.
 * @member {String} target
 */
SegmentCreateParameters.prototype['target'] = undefined;






export default SegmentCreateParameters;

