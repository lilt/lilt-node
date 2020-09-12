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
 * The QARuleMatchesContext model module.
 * @module model/QARuleMatchesContext
 * @version 0.5.0
 */
class QARuleMatchesContext {
    /**
     * Constructs a new <code>QARuleMatchesContext</code>.
     * @alias module:model/QARuleMatchesContext
     * @param length {Number} The length of the error in characters in the context.
     * @param offset {Number} The 0-based character offset of the error in the context text.
     * @param text {String} Context of the error, i.e. the error and some text to the left and to the left.
     */
    constructor(length, offset, text) { 
        
        QARuleMatchesContext.initialize(this, length, offset, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, length, offset, text) { 
        obj['length'] = length;
        obj['offset'] = offset;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>QARuleMatchesContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QARuleMatchesContext} obj Optional instance to populate.
     * @return {module:model/QARuleMatchesContext} The populated <code>QARuleMatchesContext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QARuleMatchesContext();

            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The length of the error in characters in the context.
 * @member {Number} length
 */
QARuleMatchesContext.prototype['length'] = undefined;

/**
 * The 0-based character offset of the error in the context text.
 * @member {Number} offset
 */
QARuleMatchesContext.prototype['offset'] = undefined;

/**
 * Context of the error, i.e. the error and some text to the left and to the left.
 * @member {String} text
 */
QARuleMatchesContext.prototype['text'] = undefined;






export default QARuleMatchesContext;

