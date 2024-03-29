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
import LanguagePair from './LanguagePair';

/**
 * The JobCreateParameters model module.
 * @module model/JobCreateParameters
 * @version 0.5.0
 */
class JobCreateParameters {
    /**
     * Constructs a new <code>JobCreateParameters</code>.
     * @alias module:model/JobCreateParameters
     * @param name {String} A name for the Job.
     * @param languagePairs {Array.<module:model/LanguagePair>} Language pairs is a set of one or more pairs that includes source language, source locale(optional), target language, target locale(optional), and memoryId.
     * @param fileIds {Array.<Number>} A list of file ids to upload to job creation.
     */
    constructor(name, languagePairs, fileIds) { 
        
        JobCreateParameters.initialize(this, name, languagePairs, fileIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, languagePairs, fileIds) { 
        obj['name'] = name;
        obj['languagePairs'] = languagePairs;
        obj['fileIds'] = fileIds;
    }

    /**
     * Constructs a <code>JobCreateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobCreateParameters} obj Optional instance to populate.
     * @return {module:model/JobCreateParameters} The populated <code>JobCreateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobCreateParameters();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('languagePairs')) {
                obj['languagePairs'] = ApiClient.convertToType(data['languagePairs'], [LanguagePair]);
            }
            if (data.hasOwnProperty('fileIds')) {
                obj['fileIds'] = ApiClient.convertToType(data['fileIds'], ['Number']);
            }
            if (data.hasOwnProperty('due')) {
                obj['due'] = ApiClient.convertToType(data['due'], 'String');
            }
            if (data.hasOwnProperty('isPlural')) {
                obj['isPlural'] = ApiClient.convertToType(data['isPlural'], 'Boolean');
            }
            if (data.hasOwnProperty('workflowTemplateId')) {
                obj['workflowTemplateId'] = ApiClient.convertToType(data['workflowTemplateId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A name for the Job.
 * @member {String} name
 */
JobCreateParameters.prototype['name'] = undefined;

/**
 * Language pairs is a set of one or more pairs that includes source language, source locale(optional), target language, target locale(optional), and memoryId.
 * @member {Array.<module:model/LanguagePair>} languagePairs
 */
JobCreateParameters.prototype['languagePairs'] = undefined;

/**
 * A list of file ids to upload to job creation.
 * @member {Array.<Number>} fileIds
 */
JobCreateParameters.prototype['fileIds'] = undefined;

/**
 * An ISO string date representing job due date.
 * @member {String} due
 */
JobCreateParameters.prototype['due'] = undefined;

/**
 * A boolean value representing if the files have plurals.
 * @member {Boolean} isPlural
 */
JobCreateParameters.prototype['isPlural'] = undefined;

/**
 * Identifier of the workflow template to be used when creating a job. If not passed the organization default will be used.
 * @member {Number} workflowTemplateId
 */
JobCreateParameters.prototype['workflowTemplateId'] = undefined;






export default JobCreateParameters;

