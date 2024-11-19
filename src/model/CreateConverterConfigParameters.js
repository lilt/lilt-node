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
 * The CreateConverterConfigParameters model module.
 * @module model/CreateConverterConfigParameters
 * @version 3.0.0
 */
class CreateConverterConfigParameters {
    /**
     * Constructs a new <code>CreateConverterConfigParameters</code>.
     * @alias module:model/CreateConverterConfigParameters
     * @param signedAgreement {Boolean} Signifies that the Organization has signed the agreement or not.
     */
    constructor(signedAgreement) { 
        
        CreateConverterConfigParameters.initialize(this, signedAgreement);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, signedAgreement) { 
        obj['signedAgreement'] = signedAgreement;
    }

    /**
     * Constructs a <code>CreateConverterConfigParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateConverterConfigParameters} obj Optional instance to populate.
     * @return {module:model/CreateConverterConfigParameters} The populated <code>CreateConverterConfigParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateConverterConfigParameters();

            if (data.hasOwnProperty('signedAgreement')) {
                obj['signedAgreement'] = ApiClient.convertToType(data['signedAgreement'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Signifies that the Organization has signed the agreement or not.
 * @member {Boolean} signedAgreement
 */
CreateConverterConfigParameters.prototype['signedAgreement'] = undefined;






export default CreateConverterConfigParameters;

