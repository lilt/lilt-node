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
 * The SDLXLIFFFilter model module.
 * @module model/SDLXLIFFFilter
 * @version 3.0.0
 */
class SDLXLIFFFilter {
    /**
     * Constructs a new <code>SDLXLIFFFilter</code>.
     * @alias module:model/SDLXLIFFFilter
     * @param confName {module:model/SDLXLIFFFilter.ConfNameEnum} the current state of the SDLXLIFF Trans Unit.
     */
    constructor(confName) { 
        
        SDLXLIFFFilter.initialize(this, confName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, confName) { 
        obj['confName'] = confName;
    }

    /**
     * Constructs a <code>SDLXLIFFFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDLXLIFFFilter} obj Optional instance to populate.
     * @return {module:model/SDLXLIFFFilter} The populated <code>SDLXLIFFFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDLXLIFFFilter();

            if (data.hasOwnProperty('confName')) {
                obj['confName'] = ApiClient.convertToType(data['confName'], 'String');
            }
            if (data.hasOwnProperty('allowablePercentage')) {
                obj['allowablePercentage'] = ApiClient.convertToType(data['allowablePercentage'], 'Number');
            }
            if (data.hasOwnProperty('allowUnlockedSegments')) {
                obj['allowUnlockedSegments'] = ApiClient.convertToType(data['allowUnlockedSegments'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * the current state of the SDLXLIFF Trans Unit.
 * @member {module:model/SDLXLIFFFilter.ConfNameEnum} confName
 */
SDLXLIFFFilter.prototype['confName'] = undefined;

/**
 * This represents for the current conf_name what percentage the filter applies to.  If you pass -1 it will take any value for this field and won't ignore blank values. If you pass 50, Lilt will only import Segments that have a 50 percent match or better.
 * @member {Number} allowablePercentage
 */
SDLXLIFFFilter.prototype['allowablePercentage'] = undefined;

/**
 * Boolean that tells Lilt whether we should allow unlocked Segments for this conf_name.
 * @member {Boolean} allowUnlockedSegments
 */
SDLXLIFFFilter.prototype['allowUnlockedSegments'] = undefined;





/**
 * Allowed values for the <code>confName</code> property.
 * @enum {String}
 * @readonly
 */
SDLXLIFFFilter['ConfNameEnum'] = {

    /**
     * value: "Translated"
     * @const
     */
    "Translated": "Translated",

    /**
     * value: "Draft"
     * @const
     */
    "Draft": "Draft",

    /**
     * value: "ApprovedTranslation"
     * @const
     */
    "ApprovedTranslation": "ApprovedTranslation",

    /**
     * value: "Locked"
     * @const
     */
    "Locked": "Locked",

    /**
     * value: "SignedOff"
     * @const
     */
    "SignedOff": "SignedOff"
};



export default SDLXLIFFFilter;

