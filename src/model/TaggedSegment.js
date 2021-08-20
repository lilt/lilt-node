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
 * The TaggedSegment model module.
 * @module model/TaggedSegment
 * @version 0.6.2
 */
class TaggedSegment {
    /**
     * Constructs a new <code>TaggedSegment</code>.
     * A source string with tags automatically projected from source to target.
     * @alias module:model/TaggedSegment
     */
    constructor() { 
        
        TaggedSegment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaggedSegment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaggedSegment} obj Optional instance to populate.
     * @return {module:model/TaggedSegment} The populated <code>TaggedSegment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaggedSegment();

            if (data.hasOwnProperty('source_tagged')) {
                obj['source_tagged'] = ApiClient.convertToType(data['source_tagged'], 'String');
            }
            if (data.hasOwnProperty('target_tagged')) {
                obj['target_tagged'] = ApiClient.convertToType(data['target_tagged'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The tagged source string.
 * @member {String} source_tagged
 */
TaggedSegment.prototype['source_tagged'] = undefined;

/**
 * The tagged target string.
 * @member {String} target_tagged
 */
TaggedSegment.prototype['target_tagged'] = undefined;






export default TaggedSegment;

