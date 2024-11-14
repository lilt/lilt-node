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
 * The Segment model module.
 * @module model/Segment
 * @version v3.0
 */
class Segment {
    /**
     * Constructs a new <code>Segment</code>.
     * A Segment is a source string and, optionally, its translation. A Segment can be associated with both a Memory and a Document. The Segment object contains additional metadata about the source and target strings. 
     * @alias module:model/Segment
     */
    constructor() { 
        
        Segment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Segment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Segment} obj Optional instance to populate.
     * @return {module:model/Segment} The populated <code>Segment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Segment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('document_id')) {
                obj['document_id'] = ApiClient.convertToType(data['document_id'], 'Number');
            }
            if (data.hasOwnProperty('memory_id')) {
                obj['memory_id'] = ApiClient.convertToType(data['memory_id'], 'Number');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('srclang')) {
                obj['srclang'] = ApiClient.convertToType(data['srclang'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('trglang')) {
                obj['trglang'] = ApiClient.convertToType(data['trglang'], 'String');
            }
            if (data.hasOwnProperty('is_confirmed')) {
                obj['is_confirmed'] = ApiClient.convertToType(data['is_confirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('is_reviewed')) {
                obj['is_reviewed'] = ApiClient.convertToType(data['is_reviewed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A unique number identifying the Segment.
 * @member {Number} id
 */
Segment.prototype['id'] = undefined;

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 * @member {Number} created_at
 */
Segment.prototype['created_at'] = undefined;

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 * @member {Number} updated_at
 */
Segment.prototype['updated_at'] = undefined;

/**
 * A unique Document identifier.
 * @member {Number} document_id
 */
Segment.prototype['document_id'] = undefined;

/**
 * The Memory with which this Segment is associated.
 * @member {Number} memory_id
 */
Segment.prototype['memory_id'] = undefined;

/**
 * The source string.
 * @member {String} source
 */
Segment.prototype['source'] = undefined;

/**
 * An ISO 639-1 language code.
 * @member {String} srclang
 */
Segment.prototype['srclang'] = undefined;

/**
 * The target string.
 * @member {String} target
 */
Segment.prototype['target'] = undefined;

/**
 * An ISO 639-1 language code.
 * @member {String} trglang
 */
Segment.prototype['trglang'] = undefined;

/**
 * The confirmation status.
 * @member {Boolean} is_confirmed
 */
Segment.prototype['is_confirmed'] = undefined;

/**
 * The review status.
 * @member {Boolean} is_reviewed
 */
Segment.prototype['is_reviewed'] = undefined;






export default Segment;

