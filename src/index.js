/**
 * Lilt REST API
 * The Lilt REST API enables programmatic access to the full-range of Lilt backend services including:   * Training of and translating with interactive, adaptive machine translation   * Large-scale translation memory   * The Lexicon (a large-scale termbase)   * Programmatic control of the Lilt CAT environment   * Translation memory synchronization  Requests and responses are in JSON format. The REST API only responds to HTTPS / SSL requests. ## Authentication Requests are authenticated via REST API key, which requires the Business plan.  Requests are authenticated using [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Add your REST API key as both the `username` and `password`.  For development, you may also pass the REST API key via the `key` query parameter. This is less secure than HTTP Basic Auth, and is not recommended for production use. 
 *
 * OpenAPI spec version: v2.0
 * Contact: support@lilt.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import DocumentPretranslating from './model/DocumentPretranslating';
import DocumentWithSegments from './model/DocumentWithSegments';
import DocumentWithoutSegments from './model/DocumentWithoutSegments';
import Error from './model/Error';
import File from './model/File';
import LexiconEntry from './model/LexiconEntry';
import MatchBand from './model/MatchBand';
import Memory from './model/Memory';
import Project from './model/Project';
import ProjectQuote from './model/ProjectQuote';
import ProjectStatus from './model/ProjectStatus';
import QARuleMatches from './model/QARuleMatches';
import ResourceStatus from './model/ResourceStatus';
import Segment from './model/Segment';
import TaggedSegment from './model/TaggedSegment';
import Translation from './model/Translation';
import TranslationList from './model/TranslationList';
import TranslationMemoryEntry from './model/TranslationMemoryEntry';
import DocumentsApi from './api/DocumentsApi';
import FilesApi from './api/FilesApi';
import LanguagesApi from './api/LanguagesApi';
import LexiconApi from './api/LexiconApi';
import MemoriesApi from './api/MemoriesApi';
import ProjectsApi from './api/ProjectsApi';
import QAApi from './api/QAApi';
import RootApi from './api/RootApi';
import SegmentsApi from './api/SegmentsApi';
import TranslateApi from './api/TranslateApi';

/**
* The_Lilt_REST_API_enables_programmatic_access_to_the_full_range_of_Lilt_backend_services_including___Training_of_and_translating_with_interactive_adaptive_machine_translation___Large_scale_translation_memory___The_Lexicon__a_large_scale_termbase___Programmatic_control_of_the_Lilt_CAT_environment___Translation_memory_synchronizationRequests_and_responses_are_in_JSON_format__The_REST_API_only_responds_to_HTTPS__SSL_requests__AuthenticationRequests_are_authenticated_via_REST_API_key_which_requires_the_Business_plan_Requests_are_authenticated_using__HTTP_Basic_Auth_httpsen_wikipedia_orgwikiBasic_access_authentication__Add_your_REST_API_key_as_both_the_username_and_password_For_development_you_may_also_pass_the_REST_API_key_via_the_key_query_parameter__This_is_less_secure_than_HTTP_Basic_Auth_and_is_not_recommended_for_production_use_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var lilt = require('index'); // See note below*.
* var xxxSvc = new lilt.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new lilt.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new lilt.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new lilt.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v2.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The DocumentPretranslating model constructor.
     * @property {module:model/DocumentPretranslating}
     */
    DocumentPretranslating,

    /**
     * The DocumentWithSegments model constructor.
     * @property {module:model/DocumentWithSegments}
     */
    DocumentWithSegments,

    /**
     * The DocumentWithoutSegments model constructor.
     * @property {module:model/DocumentWithoutSegments}
     */
    DocumentWithoutSegments,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File,

    /**
     * The LexiconEntry model constructor.
     * @property {module:model/LexiconEntry}
     */
    LexiconEntry,

    /**
     * The MatchBand model constructor.
     * @property {module:model/MatchBand}
     */
    MatchBand,

    /**
     * The Memory model constructor.
     * @property {module:model/Memory}
     */
    Memory,

    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project,

    /**
     * The ProjectQuote model constructor.
     * @property {module:model/ProjectQuote}
     */
    ProjectQuote,

    /**
     * The ProjectStatus model constructor.
     * @property {module:model/ProjectStatus}
     */
    ProjectStatus,

    /**
     * The QARuleMatches model constructor.
     * @property {module:model/QARuleMatches}
     */
    QARuleMatches,

    /**
     * The ResourceStatus model constructor.
     * @property {module:model/ResourceStatus}
     */
    ResourceStatus,

    /**
     * The Segment model constructor.
     * @property {module:model/Segment}
     */
    Segment,

    /**
     * The TaggedSegment model constructor.
     * @property {module:model/TaggedSegment}
     */
    TaggedSegment,

    /**
     * The Translation model constructor.
     * @property {module:model/Translation}
     */
    Translation,

    /**
     * The TranslationList model constructor.
     * @property {module:model/TranslationList}
     */
    TranslationList,

    /**
     * The TranslationMemoryEntry model constructor.
     * @property {module:model/TranslationMemoryEntry}
     */
    TranslationMemoryEntry,

    /**
    * The DocumentsApi service constructor.
    * @property {module:api/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The FilesApi service constructor.
    * @property {module:api/FilesApi}
    */
    FilesApi,

    /**
    * The LanguagesApi service constructor.
    * @property {module:api/LanguagesApi}
    */
    LanguagesApi,

    /**
    * The LexiconApi service constructor.
    * @property {module:api/LexiconApi}
    */
    LexiconApi,

    /**
    * The MemoriesApi service constructor.
    * @property {module:api/MemoriesApi}
    */
    MemoriesApi,

    /**
    * The ProjectsApi service constructor.
    * @property {module:api/ProjectsApi}
    */
    ProjectsApi,

    /**
    * The QAApi service constructor.
    * @property {module:api/QAApi}
    */
    QAApi,

    /**
    * The RootApi service constructor.
    * @property {module:api/RootApi}
    */
    RootApi,

    /**
    * The SegmentsApi service constructor.
    * @property {module:api/SegmentsApi}
    */
    SegmentsApi,

    /**
    * The TranslateApi service constructor.
    * @property {module:api/TranslateApi}
    */
    TranslateApi
};
