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
 * The DocumentDoneUpdateParameters1 model module.
 * @module model/DocumentDoneUpdateParameters1
 * @version 0.5.0
 */
class DocumentDoneUpdateParameters1 {
    /**
     * Constructs a new <code>DocumentDoneUpdateParameters1</code>.
     * @alias module:model/DocumentDoneUpdateParameters1
     * @param isDone {Boolean} 
     */
    constructor(isDone) { 
        
        DocumentDoneUpdateParameters1.initialize(this, isDone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isDone) { 
        obj['isDone'] = isDone;
    }

    /**
     * Constructs a <code>DocumentDoneUpdateParameters1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentDoneUpdateParameters1} obj Optional instance to populate.
     * @return {module:model/DocumentDoneUpdateParameters1} The populated <code>DocumentDoneUpdateParameters1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentDoneUpdateParameters1();

            if (data.hasOwnProperty('isDone')) {
                obj['isDone'] = ApiClient.convertToType(data['isDone'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isDone
 */
DocumentDoneUpdateParameters1.prototype['isDone'] = undefined;






export default DocumentDoneUpdateParameters1;
