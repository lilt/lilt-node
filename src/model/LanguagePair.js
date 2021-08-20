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
 * The LanguagePair model module.
 * @module model/LanguagePair
 * @version 0.6.2
 */
class LanguagePair {
    /**
     * Constructs a new <code>LanguagePair</code>.
     * A language pair couples the source and target language along with memory and pre-translations settings associated to a project. 
     * @alias module:model/LanguagePair
     * @param trgLang {String} Target langauge, an ISO 639-1 language identifier.
     * @param memoryId {Number} A unique number identifying the associated Memory.
     */
    constructor(trgLang, memoryId) { 
        
        LanguagePair.initialize(this, trgLang, memoryId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, trgLang, memoryId) { 
        obj['trgLang'] = trgLang;
        obj['memoryId'] = memoryId;
    }

    /**
     * Constructs a <code>LanguagePair</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LanguagePair} obj Optional instance to populate.
     * @return {module:model/LanguagePair} The populated <code>LanguagePair</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LanguagePair();

            if (data.hasOwnProperty('srcLang')) {
                obj['srcLang'] = ApiClient.convertToType(data['srcLang'], 'String');
            }
            if (data.hasOwnProperty('srcLocale')) {
                obj['srcLocale'] = ApiClient.convertToType(data['srcLocale'], 'String');
            }
            if (data.hasOwnProperty('trgLang')) {
                obj['trgLang'] = ApiClient.convertToType(data['trgLang'], 'String');
            }
            if (data.hasOwnProperty('trgLocale')) {
                obj['trgLocale'] = ApiClient.convertToType(data['trgLocale'], 'String');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'String');
            }
            if (data.hasOwnProperty('memoryId')) {
                obj['memoryId'] = ApiClient.convertToType(data['memoryId'], 'Number');
            }
            if (data.hasOwnProperty('pretranslate')) {
                obj['pretranslate'] = ApiClient.convertToType(data['pretranslate'], 'Boolean');
            }
            if (data.hasOwnProperty('autoAccept')) {
                obj['autoAccept'] = ApiClient.convertToType(data['autoAccept'], 'Boolean');
            }
            if (data.hasOwnProperty('caseSensitive')) {
                obj['caseSensitive'] = ApiClient.convertToType(data['caseSensitive'], 'Boolean');
            }
            if (data.hasOwnProperty('takeMatchAttribution')) {
                obj['takeMatchAttribution'] = ApiClient.convertToType(data['takeMatchAttribution'], 'Boolean');
            }
            if (data.hasOwnProperty('configId')) {
                obj['configId'] = ApiClient.convertToType(data['configId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Source langauge, an ISO 639-1 language identifier.
 * @member {String} srcLang
 */
LanguagePair.prototype['srcLang'] = undefined;

/**
 * A locale identifier, supported for source langauge.
 * @member {String} srcLocale
 */
LanguagePair.prototype['srcLocale'] = undefined;

/**
 * Target langauge, an ISO 639-1 language identifier.
 * @member {String} trgLang
 */
LanguagePair.prototype['trgLang'] = undefined;

/**
 * A locale identifier, supported for target language.
 * @member {String} trgLocale
 */
LanguagePair.prototype['trgLocale'] = undefined;

/**
 * An ISO date.
 * @member {String} dueDate
 */
LanguagePair.prototype['dueDate'] = undefined;

/**
 * A unique number identifying the associated Memory.
 * @member {Number} memoryId
 */
LanguagePair.prototype['memoryId'] = undefined;

/**
 * Attribute translation authorship of exact matches to the creator of the document being pretranslated.
 * @member {Boolean} pretranslate
 */
LanguagePair.prototype['pretranslate'] = undefined;

/**
 * Accept and lock exact matches.
 * @member {Boolean} autoAccept
 */
LanguagePair.prototype['autoAccept'] = undefined;

/**
 * Use case sensitive translation memory matching.
 * @member {Boolean} caseSensitive
 */
LanguagePair.prototype['caseSensitive'] = undefined;

/**
 * Use MT for unmatched segments.
 * @member {Boolean} takeMatchAttribution
 */
LanguagePair.prototype['takeMatchAttribution'] = undefined;

/**
 * Configuration id
 * @member {Number} configId
 */
LanguagePair.prototype['configId'] = undefined;






export default LanguagePair;

