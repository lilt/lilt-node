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


import ApiClient from './ApiClient';
import AddFileLabelRequest from './model/AddFileLabelRequest';
import CreateConverterConfigParameters from './model/CreateConverterConfigParameters';
import DeleteSegmentFromMemoryResponse from './model/DeleteSegmentFromMemoryResponse';
import DocumentWithSegments from './model/DocumentWithSegments';
import DocumentWithoutSegments from './model/DocumentWithoutSegments';
import DocumentWithoutSegmentsStatus from './model/DocumentWithoutSegmentsStatus';
import Error from './model/Error';
import FileDeleteResponse from './model/FileDeleteResponse';
import GetLiltCreateContentResponse from './model/GetLiltCreateContentResponse';
import InlineResponse200 from './model/InlineResponse200';
import Job from './model/Job';
import JobCreateParameters from './model/JobCreateParameters';
import JobDeleteResponse from './model/JobDeleteResponse';
import JobLeverageStats from './model/JobLeverageStats';
import JobProject from './model/JobProject';
import JobStats from './model/JobStats';
import JobUpdateParameters from './model/JobUpdateParameters';
import LanguagePair from './model/LanguagePair';
import LanguagesResponse from './model/LanguagesResponse';
import LiltCreateContent from './model/LiltCreateContent';
import LiltCreateContentPreferences from './model/LiltCreateContentPreferences';
import LiltCreateContentTemplateParams from './model/LiltCreateContentTemplateParams';
import Memory from './model/Memory';
import MemoryCreateParameters from './model/MemoryCreateParameters';
import MemoryDeleteResponse from './model/MemoryDeleteResponse';
import MemoryImportResponse from './model/MemoryImportResponse';
import MemoryUpdateParameters from './model/MemoryUpdateParameters';
import Project from './model/Project';
import ProjectCreateParameters from './model/ProjectCreateParameters';
import ProjectDeleteResponse from './model/ProjectDeleteResponse';
import ProjectStats from './model/ProjectStats';
import SDLXLIFFFilter from './model/SDLXLIFFFilter';
import Segment from './model/Segment';
import SignLiltCreateTermsResponse from './model/SignLiltCreateTermsResponse';
import SourceFile from './model/SourceFile';
import TermbaseExportResponse from './model/TermbaseExportResponse';
import TranslateSegmentBody from './model/TranslateSegmentBody';
import Translation from './model/Translation';
import TranslationInfo from './model/TranslationInfo';
import TranslationList from './model/TranslationList';
import TranslationMemoryEntry from './model/TranslationMemoryEntry';
import WorkflowStageAssignment from './model/WorkflowStageAssignment';
import CreateApi from './api/CreateApi';
import DocumentsApi from './api/DocumentsApi';
import FilesApi from './api/FilesApi';
import JobsApi from './api/JobsApi';
import LanguagesApi from './api/LanguagesApi';
import MemoriesApi from './api/MemoriesApi';
import ProjectsApi from './api/ProjectsApi';
import TranslateApi from './api/TranslateApi';


/**
* Lilt_REST_API_Support_https__lilt_atlassian_net_servicedesk_customer_portals___The_Lilt_REST_API_enables_programmatic_access_to_the_full_range_of_Lilt_backend_services_including___Training_of_and_translating_with_interactive_adaptive_machine_translation___Large_scale_translation_memory___The_Lexicon__a_large_scale_termbase___Programmatic_control_of_the_Lilt_CAT_environment___Translation_memory_synchronizationRequests_and_responses_are_in_JSON_format__The_REST_API_only_responds_to_HTTPS___SSL_requests__The_base_url_for_this_REST_API_is_https__api_lilt_com___AuthenticationRequests_are_authenticated_via_REST_API_key_which_requires_the_Business_plan_Requests_are_authenticated_using__HTTP_Basic_Auth_https__en_wikipedia_org_wiki_Basic_access_authentication__Add_your_REST_API_key_as_both_the_username_and_password_For_development_you_may_also_pass_the_REST_API_key_via_the_key_query_parameter__This_is_less_secure_than_HTTP_Basic_Auth_and_is_not_recommended_for_production_use__QuotasOur_services_have_a_general_quota_of_4000_requests_per_minute__Should_you_hit_the_maximum_requests_per_minute_you_will_need_to_wait_60_seconds_before_you_can_send_another_request_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var LiltNode = require('index'); // See note below*.
* var xxxSvc = new LiltNode.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new LiltNode.Yyy(); // Construct a model instance.
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
* var xxxSvc = new LiltNode.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new LiltNode.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.6.3
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AddFileLabelRequest model constructor.
     * @property {module:model/AddFileLabelRequest}
     */
    AddFileLabelRequest,

    /**
     * The CreateConverterConfigParameters model constructor.
     * @property {module:model/CreateConverterConfigParameters}
     */
    CreateConverterConfigParameters,

    /**
     * The DeleteSegmentFromMemoryResponse model constructor.
     * @property {module:model/DeleteSegmentFromMemoryResponse}
     */
    DeleteSegmentFromMemoryResponse,

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
     * The DocumentWithoutSegmentsStatus model constructor.
     * @property {module:model/DocumentWithoutSegmentsStatus}
     */
    DocumentWithoutSegmentsStatus,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The FileDeleteResponse model constructor.
     * @property {module:model/FileDeleteResponse}
     */
    FileDeleteResponse,

    /**
     * The GetLiltCreateContentResponse model constructor.
     * @property {module:model/GetLiltCreateContentResponse}
     */
    GetLiltCreateContentResponse,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The Job model constructor.
     * @property {module:model/Job}
     */
    Job,

    /**
     * The JobCreateParameters model constructor.
     * @property {module:model/JobCreateParameters}
     */
    JobCreateParameters,

    /**
     * The JobDeleteResponse model constructor.
     * @property {module:model/JobDeleteResponse}
     */
    JobDeleteResponse,

    /**
     * The JobLeverageStats model constructor.
     * @property {module:model/JobLeverageStats}
     */
    JobLeverageStats,

    /**
     * The JobProject model constructor.
     * @property {module:model/JobProject}
     */
    JobProject,

    /**
     * The JobStats model constructor.
     * @property {module:model/JobStats}
     */
    JobStats,

    /**
     * The JobUpdateParameters model constructor.
     * @property {module:model/JobUpdateParameters}
     */
    JobUpdateParameters,

    /**
     * The LanguagePair model constructor.
     * @property {module:model/LanguagePair}
     */
    LanguagePair,

    /**
     * The LanguagesResponse model constructor.
     * @property {module:model/LanguagesResponse}
     */
    LanguagesResponse,

    /**
     * The LiltCreateContent model constructor.
     * @property {module:model/LiltCreateContent}
     */
    LiltCreateContent,

    /**
     * The LiltCreateContentPreferences model constructor.
     * @property {module:model/LiltCreateContentPreferences}
     */
    LiltCreateContentPreferences,

    /**
     * The LiltCreateContentTemplateParams model constructor.
     * @property {module:model/LiltCreateContentTemplateParams}
     */
    LiltCreateContentTemplateParams,

    /**
     * The Memory model constructor.
     * @property {module:model/Memory}
     */
    Memory,

    /**
     * The MemoryCreateParameters model constructor.
     * @property {module:model/MemoryCreateParameters}
     */
    MemoryCreateParameters,

    /**
     * The MemoryDeleteResponse model constructor.
     * @property {module:model/MemoryDeleteResponse}
     */
    MemoryDeleteResponse,

    /**
     * The MemoryImportResponse model constructor.
     * @property {module:model/MemoryImportResponse}
     */
    MemoryImportResponse,

    /**
     * The MemoryUpdateParameters model constructor.
     * @property {module:model/MemoryUpdateParameters}
     */
    MemoryUpdateParameters,

    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project,

    /**
     * The ProjectCreateParameters model constructor.
     * @property {module:model/ProjectCreateParameters}
     */
    ProjectCreateParameters,

    /**
     * The ProjectDeleteResponse model constructor.
     * @property {module:model/ProjectDeleteResponse}
     */
    ProjectDeleteResponse,

    /**
     * The ProjectStats model constructor.
     * @property {module:model/ProjectStats}
     */
    ProjectStats,

    /**
     * The SDLXLIFFFilter model constructor.
     * @property {module:model/SDLXLIFFFilter}
     */
    SDLXLIFFFilter,

    /**
     * The Segment model constructor.
     * @property {module:model/Segment}
     */
    Segment,

    /**
     * The SignLiltCreateTermsResponse model constructor.
     * @property {module:model/SignLiltCreateTermsResponse}
     */
    SignLiltCreateTermsResponse,

    /**
     * The SourceFile model constructor.
     * @property {module:model/SourceFile}
     */
    SourceFile,

    /**
     * The TermbaseExportResponse model constructor.
     * @property {module:model/TermbaseExportResponse}
     */
    TermbaseExportResponse,

    /**
     * The TranslateSegmentBody model constructor.
     * @property {module:model/TranslateSegmentBody}
     */
    TranslateSegmentBody,

    /**
     * The Translation model constructor.
     * @property {module:model/Translation}
     */
    Translation,

    /**
     * The TranslationInfo model constructor.
     * @property {module:model/TranslationInfo}
     */
    TranslationInfo,

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
     * The WorkflowStageAssignment model constructor.
     * @property {module:model/WorkflowStageAssignment}
     */
    WorkflowStageAssignment,

    /**
    * The CreateApi service constructor.
    * @property {module:api/CreateApi}
    */
    CreateApi,

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
    * The JobsApi service constructor.
    * @property {module:api/JobsApi}
    */
    JobsApi,

    /**
    * The LanguagesApi service constructor.
    * @property {module:api/LanguagesApi}
    */
    LanguagesApi,

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
    * The TranslateApi service constructor.
    * @property {module:api/TranslateApi}
    */
    TranslateApi
};
