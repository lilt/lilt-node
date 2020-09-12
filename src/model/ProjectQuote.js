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
import DocumentQuote from './DocumentQuote';
import MatchBand from './MatchBand';

/**
 * The ProjectQuote model module.
 * @module model/ProjectQuote
 * @version 0.5.0
 */
class ProjectQuote {
    /**
     * Constructs a new <code>ProjectQuote</code>.
     * Quoting information for a Project. 
     * @alias module:model/ProjectQuote
     */
    constructor() { 
        
        ProjectQuote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectQuote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectQuote} obj Optional instance to populate.
     * @return {module:model/ProjectQuote} The populated <code>ProjectQuote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectQuote();

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
            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], [DocumentQuote]);
            }
        }
        return obj;
    }


}

/**
 * A unique Project identifier.
 * @member {Number} id
 */
ProjectQuote.prototype['id'] = undefined;

/**
 * The number of source words in the Project.
 * @member {Number} num_source_words
 */
ProjectQuote.prototype['num_source_words'] = undefined;

/**
 * The number of new source words in the Project.
 * @member {Number} num_words_new
 */
ProjectQuote.prototype['num_words_new'] = undefined;

/**
 * The number of new segments in the Project.
 * @member {Number} num_segments_new
 */
ProjectQuote.prototype['num_segments_new'] = undefined;

/**
 * The number of repetition source words in the Project.
 * @member {Number} num_words_repetition
 */
ProjectQuote.prototype['num_words_repetition'] = undefined;

/**
 * The number of repetition segments in the Project.
 * @member {Number} num_segments_repetition
 */
ProjectQuote.prototype['num_segments_repetition'] = undefined;

/**
 * A list of MatchBand objects that represent translation memory leverage statistics.
 * @member {Array.<module:model/MatchBand>} bands
 */
ProjectQuote.prototype['bands'] = undefined;

/**
 * A list of DocumentQuote objects that quotes information for a Document.
 * @member {Array.<module:model/DocumentQuote>} documents
 */
ProjectQuote.prototype['documents'] = undefined;






export default ProjectQuote;

