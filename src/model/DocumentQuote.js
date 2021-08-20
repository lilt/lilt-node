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
import MatchBand from './MatchBand';

/**
 * The DocumentQuote model module.
 * @module model/DocumentQuote
 * @version 0.6.2
 */
class DocumentQuote {
    /**
     * Constructs a new <code>DocumentQuote</code>.
     * Quoting information for a Document. 
     * @alias module:model/DocumentQuote
     */
    constructor() { 
        
        DocumentQuote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentQuote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentQuote} obj Optional instance to populate.
     * @return {module:model/DocumentQuote} The populated <code>DocumentQuote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentQuote();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('num_source_words')) {
                obj['num_source_words'] = ApiClient.convertToType(data['num_source_words'], 'Number');
            }
            if (data.hasOwnProperty('num_words_new')) {
                obj['num_words_new'] = ApiClient.convertToType(data['num_words_new'], 'Number');
            }
            if (data.hasOwnProperty('num_segments_new')) {
                obj['num_segments_new'] = ApiClient.convertToType(data['num_segments_new'], 'Number');
            }
            if (data.hasOwnProperty('num_words_repetition')) {
                obj['num_words_repetition'] = ApiClient.convertToType(data['num_words_repetition'], 'Number');
            }
            if (data.hasOwnProperty('num_segments_repetition')) {
                obj['num_segments_repetition'] = ApiClient.convertToType(data['num_segments_repetition'], 'Number');
            }
            if (data.hasOwnProperty('bands')) {
                obj['bands'] = ApiClient.convertToType(data['bands'], [MatchBand]);
            }
        }
        return obj;
    }


}

/**
 * A unique Document identifier.
 * @member {Number} id
 */
DocumentQuote.prototype['id'] = undefined;

/**
 * The number of source words in the Document.
 * @member {Number} num_source_words
 */
DocumentQuote.prototype['num_source_words'] = undefined;

/**
 * The number of new source words in the Document.
 * @member {Number} num_words_new
 */
DocumentQuote.prototype['num_words_new'] = undefined;

/**
 * The number of new segments in the Document.
 * @member {Number} num_segments_new
 */
DocumentQuote.prototype['num_segments_new'] = undefined;

/**
 * The number of repetition source words in the Document.
 * @member {Number} num_words_repetition
 */
DocumentQuote.prototype['num_words_repetition'] = undefined;

/**
 * The number of repetition segments in the Document.
 * @member {Number} num_segments_repetition
 */
DocumentQuote.prototype['num_segments_repetition'] = undefined;

/**
 * A list of MatchBand objects that represent translation memory leverage statistics.
 * @member {Array.<module:model/MatchBand>} bands
 */
DocumentQuote.prototype['bands'] = undefined;






export default DocumentQuote;

