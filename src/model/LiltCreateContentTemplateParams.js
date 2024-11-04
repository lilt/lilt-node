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
 * The LiltCreateContentTemplateParams model module.
 * @module model/LiltCreateContentTemplateParams
 * @version 0.6.3
 */
class LiltCreateContentTemplateParams {
    /**
     * Constructs a new <code>LiltCreateContentTemplateParams</code>.
     * The template parameters of the content.
     * @alias module:model/LiltCreateContentTemplateParams
     * @param language {String} The language of the content.
     */
    constructor(language) { 
        
        LiltCreateContentTemplateParams.initialize(this, language);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, language) { 
        obj['language'] = language;
    }

    /**
     * Constructs a <code>LiltCreateContentTemplateParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LiltCreateContentTemplateParams} obj Optional instance to populate.
     * @return {module:model/LiltCreateContentTemplateParams} The populated <code>LiltCreateContentTemplateParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LiltCreateContentTemplateParams();

            if (data.hasOwnProperty('contentLength')) {
                obj['contentLength'] = ApiClient.convertToType(data['contentLength'], 'Number');
            }
            if (data.hasOwnProperty('memoryId')) {
                obj['memoryId'] = ApiClient.convertToType(data['memoryId'], 'Number');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('sections')) {
                obj['sections'] = ApiClient.convertToType(data['sections'], ['String']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The length of the content.
 * @member {Number} contentLength
 */
LiltCreateContentTemplateParams.prototype['contentLength'] = undefined;

/**
 * The ID referencing a Data Source.
 * @member {Number} memoryId
 */
LiltCreateContentTemplateParams.prototype['memoryId'] = undefined;

/**
 * The language of the content.
 * @member {String} language
 */
LiltCreateContentTemplateParams.prototype['language'] = undefined;

/**
 * The sections of the content.
 * @member {Array.<String>} sections
 */
LiltCreateContentTemplateParams.prototype['sections'] = undefined;

/**
 * The summary of the content.
 * @member {String} summary
 */
LiltCreateContentTemplateParams.prototype['summary'] = undefined;






export default LiltCreateContentTemplateParams;

