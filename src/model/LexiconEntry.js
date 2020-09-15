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
import LexiconEntryExamples from './LexiconEntryExamples';
import LexiconEntryTranslations from './LexiconEntryTranslations';

/**
 * The LexiconEntry model module.
 * @module model/LexiconEntry
 * @version 0.5.0
 */
class LexiconEntry {
    /**
     * Constructs a new <code>LexiconEntry</code>.
     * An Lexicon entry for a source term or phrase. 
     * @alias module:model/LexiconEntry
     */
    constructor() { 
        
        LexiconEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LexiconEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LexiconEntry} obj Optional instance to populate.
     * @return {module:model/LexiconEntry} The populated <code>LexiconEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LexiconEntry();

            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [LexiconEntryTranslations]);
            }
            if (data.hasOwnProperty('examples')) {
                obj['examples'] = ApiClient.convertToType(data['examples'], [LexiconEntryExamples]);
            }
        }
        return obj;
    }


}

/**
 * A list of translations for the query term.
 * @member {Array.<module:model/LexiconEntryTranslations>} translations
 */
LexiconEntry.prototype['translations'] = undefined;

/**
 * A list of concordance examples for the query term.
 * @member {Array.<module:model/LexiconEntryExamples>} examples
 */
LexiconEntry.prototype['examples'] = undefined;






export default LexiconEntry;

