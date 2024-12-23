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
 * The LiltCreateContentPreferences model module.
 * @module model/LiltCreateContentPreferences
 * @version 3.0.0
 */
class LiltCreateContentPreferences {
    /**
     * Constructs a new <code>LiltCreateContentPreferences</code>.
     * The preferences of the content.
     * @alias module:model/LiltCreateContentPreferences
     */
    constructor() { 
        
        LiltCreateContentPreferences.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LiltCreateContentPreferences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LiltCreateContentPreferences} obj Optional instance to populate.
     * @return {module:model/LiltCreateContentPreferences} The populated <code>LiltCreateContentPreferences</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LiltCreateContentPreferences();

            if (data.hasOwnProperty('tone')) {
                obj['tone'] = ApiClient.convertToType(data['tone'], 'String');
            }
            if (data.hasOwnProperty('styleguide')) {
                obj['styleguide'] = ApiClient.convertToType(data['styleguide'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The tone of the content.
 * @member {String} tone
 */
LiltCreateContentPreferences.prototype['tone'] = undefined;

/**
 * The styleguide of the content.
 * @member {String} styleguide
 */
LiltCreateContentPreferences.prototype['styleguide'] = undefined;






export default LiltCreateContentPreferences;

