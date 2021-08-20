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
 * The Setting model module.
 * @module model/Setting
 * @version 0.6.2
 */
class Setting {
    /**
     * Constructs a new <code>Setting</code>.
     * A configuration setting.
     * @alias module:model/Setting
     */
    constructor() { 
        
        Setting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Setting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Setting} obj Optional instance to populate.
     * @return {module:model/Setting} The populated <code>Setting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Setting();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('valueType')) {
                obj['valueType'] = ApiClient.convertToType(data['valueType'], 'String');
            }
            if (data.hasOwnProperty('isUserFacing')) {
                obj['isUserFacing'] = ApiClient.convertToType(data['isUserFacing'], 'Boolean');
            }
            if (data.hasOwnProperty('isDefault')) {
                obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The identifier of the setting.
 * @member {Number} id
 */
Setting.prototype['id'] = undefined;

/**
 * The name of the setting.
 * @member {String} name
 */
Setting.prototype['name'] = undefined;

/**
 * the type of value the setting may have - Boolean, Json, Number, String.
 * @member {String} valueType
 */
Setting.prototype['valueType'] = undefined;

/**
 * Whether the setting is editable by the user.
 * @member {Boolean} isUserFacing
 */
Setting.prototype['isUserFacing'] = undefined;

/**
 * True when the setting value is inherited from the default setting.
 * @member {Boolean} isDefault
 */
Setting.prototype['isDefault'] = undefined;






export default Setting;

