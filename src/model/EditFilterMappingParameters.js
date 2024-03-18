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
 * The EditFilterMappingParameters model module.
 * @module model/EditFilterMappingParameters
 * @version 0.5.0
 */
class EditFilterMappingParameters {
    /**
     * Constructs a new <code>EditFilterMappingParameters</code>.
     * @alias module:model/EditFilterMappingParameters
     * @param configName {String} The user defined name of your configuration.
     * @param configDescription {String} A description for the configuration.
     */
    constructor(configName, configDescription) { 
        
        EditFilterMappingParameters.initialize(this, configName, configDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, configName, configDescription) { 
        obj['configName'] = configName;
        obj['configDescription'] = configDescription;
    }

    /**
     * Constructs a <code>EditFilterMappingParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditFilterMappingParameters} obj Optional instance to populate.
     * @return {module:model/EditFilterMappingParameters} The populated <code>EditFilterMappingParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditFilterMappingParameters();

            if (data.hasOwnProperty('registryEntryJson')) {
                obj['registryEntryJson'] = ApiClient.convertToType(data['registryEntryJson'], 'String');
            }
            if (data.hasOwnProperty('configName')) {
                obj['configName'] = ApiClient.convertToType(data['configName'], 'String');
            }
            if (data.hasOwnProperty('configDescription')) {
                obj['configDescription'] = ApiClient.convertToType(data['configDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The filter mapping json blob, string escaped.
 * @member {String} registryEntryJson
 */
EditFilterMappingParameters.prototype['registryEntryJson'] = undefined;

/**
 * The user defined name of your configuration.
 * @member {String} configName
 */
EditFilterMappingParameters.prototype['configName'] = undefined;

/**
 * A description for the configuration.
 * @member {String} configDescription
 */
EditFilterMappingParameters.prototype['configDescription'] = undefined;






export default EditFilterMappingParameters;
