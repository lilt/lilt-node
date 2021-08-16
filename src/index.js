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


import ApiClient from './ApiClient';
import Annotation from './model/Annotation';
import ApiRoot from './model/ApiRoot';
import Comment from './model/Comment';
import CommentBody from './model/CommentBody';
import CommentDeleteResponse from './model/CommentDeleteResponse';
import Connector from './model/Connector';
import ConnectorArguments from './model/ConnectorArguments';
import ConnectorDeleteResponse from './model/ConnectorDeleteResponse';
import ConnectorJob from './model/ConnectorJob';
import DocumentAssignmentParameters from './model/DocumentAssignmentParameters';
import DocumentAssignmentResponse from './model/DocumentAssignmentResponse';
import DocumentComments from './model/DocumentComments';
import DocumentDeleteResponse from './model/DocumentDeleteResponse';
import DocumentDoneUpdateParameters from './model/DocumentDoneUpdateParameters';
import DocumentDoneUpdateParameters1 from './model/DocumentDoneUpdateParameters1';
import DocumentParameters from './model/DocumentParameters';
import DocumentPretranslateParameters from './model/DocumentPretranslateParameters';
import DocumentPretranslateResponse from './model/DocumentPretranslateResponse';
import DocumentPretranslating from './model/DocumentPretranslating';
import DocumentPretranslatingStatus from './model/DocumentPretranslatingStatus';
import DocumentQuote from './model/DocumentQuote';
import DocumentUpdateParameters from './model/DocumentUpdateParameters';
import DocumentWithSegments from './model/DocumentWithSegments';
import DocumentWithoutSegments from './model/DocumentWithoutSegments';
import DocumentWithoutSegmentsStatus from './model/DocumentWithoutSegmentsStatus';
import Error from './model/Error';
import Error2 from './model/Error2';
import FileDeleteResponse from './model/FileDeleteResponse';
import Job from './model/Job';
import JobCreateParameters from './model/JobCreateParameters';
import JobDeleteResponse from './model/JobDeleteResponse';
import JobLeverageStats from './model/JobLeverageStats';
import JobLeverageStatsProjects from './model/JobLeverageStatsProjects';
import JobProject from './model/JobProject';
import JobStats from './model/JobStats';
import JobUpdateParameters from './model/JobUpdateParameters';
import LanguagePair from './model/LanguagePair';
import LanguagesResponse from './model/LanguagesResponse';
import LexiconEntry from './model/LexiconEntry';
import LexiconEntryExamples from './model/LexiconEntryExamples';
import LexiconEntrySourceSpan from './model/LexiconEntrySourceSpan';
import LexiconEntryTargetSpan from './model/LexiconEntryTargetSpan';
import LexiconEntryTranslations from './model/LexiconEntryTranslations';
import LexiconUpdateParameters from './model/LexiconUpdateParameters';
import LexiconUpdateResponse from './model/LexiconUpdateResponse';
import MatchBand from './model/MatchBand';
import Memory from './model/Memory';
import MemoryCreateParameters from './model/MemoryCreateParameters';
import MemoryDeleteResponse from './model/MemoryDeleteResponse';
import MemoryImportResponse from './model/MemoryImportResponse';
import MemoryInsertResponse from './model/MemoryInsertResponse';
import MemoryUpdateParameters from './model/MemoryUpdateParameters';
import MemoryUpdateResponse from './model/MemoryUpdateResponse';
import Project from './model/Project';
import ProjectCreateParameters from './model/ProjectCreateParameters';
import ProjectDeleteResponse from './model/ProjectDeleteResponse';
import ProjectQuote from './model/ProjectQuote';
import ProjectStatus from './model/ProjectStatus';
import ProjectUpdateResponse from './model/ProjectUpdateResponse';
import QARuleMatches from './model/QARuleMatches';
import QARuleMatchesContext from './model/QARuleMatchesContext';
import QARuleMatchesMatches from './model/QARuleMatchesMatches';
import QARuleMatchesReplacements from './model/QARuleMatchesReplacements';
import QARuleMatchesRule from './model/QARuleMatchesRule';
import QARuleMatchesRuleCategory from './model/QARuleMatchesRuleCategory';
import QARuleMatchesRuleUrls from './model/QARuleMatchesRuleUrls';
import ResourceStatus from './model/ResourceStatus';
import Segment from './model/Segment';
import SegmentCreateParameters from './model/SegmentCreateParameters';
import SegmentDeleteResponse from './model/SegmentDeleteResponse';
import SegmentUpdateParameters from './model/SegmentUpdateParameters';
import SegmentWithComments from './model/SegmentWithComments';
import Setting from './model/Setting';
import SettingDictionary from './model/SettingDictionary';
import SettingUpsertBody from './model/SettingUpsertBody';
import SettingUpsertResponse from './model/SettingUpsertResponse';
import SourceFile from './model/SourceFile';
import TaggedSegment from './model/TaggedSegment';
import TranslateRegisterResponse from './model/TranslateRegisterResponse';
import Translation from './model/Translation';
import TranslationInfo from './model/TranslationInfo';
import TranslationList from './model/TranslationList';
import TranslationMemoryEntry from './model/TranslationMemoryEntry';
import CommentsApi from './api/CommentsApi';
import ConnectorsApi from './api/ConnectorsApi';
import DocumentsApi from './api/DocumentsApi';
import FilesApi from './api/FilesApi';
import JobsApi from './api/JobsApi';
import LanguagesApi from './api/LanguagesApi';
import LexiconApi from './api/LexiconApi';
import MemoriesApi from './api/MemoriesApi';
import ProjectsApi from './api/ProjectsApi';
import QAApi from './api/QAApi';
import RootApi from './api/RootApi';
import SegmentsApi from './api/SegmentsApi';
import SettingsApi from './api/SettingsApi';
import TranslateApi from './api/TranslateApi';


/**
* The_Lilt_REST_API_enables_programmatic_access_to_the_full_range_of_Lilt_backend_services_including___Training_of_and_translating_with_interactive_adaptive_machine_translation___Large_scale_translation_memory___The_Lexicon__a_large_scale_termbase___Programmatic_control_of_the_Lilt_CAT_environment___Translation_memory_synchronizationRequests_and_responses_are_in_JSON_format__The_REST_API_only_responds_to_HTTPS___SSL_requests__AuthenticationRequests_are_authenticated_via_REST_API_key_which_requires_the_Business_plan_Requests_are_authenticated_using__HTTP_Basic_Auth_https__en_wikipedia_org_wiki_Basic_access_authentication__Add_your_REST_API_key_as_both_the_username_and_password_For_development_you_may_also_pass_the_REST_API_key_via_the_key_query_parameter__This_is_less_secure_than_HTTP_Basic_Auth_and_is_not_recommended_for_production_use_.<br>
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
* @version 0.5.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Annotation model constructor.
     * @property {module:model/Annotation}
     */
    Annotation,

    /**
     * The ApiRoot model constructor.
     * @property {module:model/ApiRoot}
     */
    ApiRoot,

    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment,

    /**
     * The CommentBody model constructor.
     * @property {module:model/CommentBody}
     */
    CommentBody,

    /**
     * The CommentDeleteResponse model constructor.
     * @property {module:model/CommentDeleteResponse}
     */
    CommentDeleteResponse,

    /**
     * The Connector model constructor.
     * @property {module:model/Connector}
     */
    Connector,

    /**
     * The ConnectorArguments model constructor.
     * @property {module:model/ConnectorArguments}
     */
    ConnectorArguments,

    /**
     * The ConnectorDeleteResponse model constructor.
     * @property {module:model/ConnectorDeleteResponse}
     */
    ConnectorDeleteResponse,

    /**
     * The ConnectorJob model constructor.
     * @property {module:model/ConnectorJob}
     */
    ConnectorJob,

    /**
     * The DocumentAssignmentParameters model constructor.
     * @property {module:model/DocumentAssignmentParameters}
     */
    DocumentAssignmentParameters,

    /**
     * The DocumentAssignmentResponse model constructor.
     * @property {module:model/DocumentAssignmentResponse}
     */
    DocumentAssignmentResponse,

    /**
     * The DocumentComments model constructor.
     * @property {module:model/DocumentComments}
     */
    DocumentComments,

    /**
     * The DocumentDeleteResponse model constructor.
     * @property {module:model/DocumentDeleteResponse}
     */
    DocumentDeleteResponse,

    /**
     * The DocumentDoneUpdateParameters model constructor.
     * @property {module:model/DocumentDoneUpdateParameters}
     */
    DocumentDoneUpdateParameters,

    /**
     * The DocumentDoneUpdateParameters1 model constructor.
     * @property {module:model/DocumentDoneUpdateParameters1}
     */
    DocumentDoneUpdateParameters1,

    /**
     * The DocumentParameters model constructor.
     * @property {module:model/DocumentParameters}
     */
    DocumentParameters,

    /**
     * The DocumentPretranslateParameters model constructor.
     * @property {module:model/DocumentPretranslateParameters}
     */
    DocumentPretranslateParameters,

    /**
     * The DocumentPretranslateResponse model constructor.
     * @property {module:model/DocumentPretranslateResponse}
     */
    DocumentPretranslateResponse,

    /**
     * The DocumentPretranslating model constructor.
     * @property {module:model/DocumentPretranslating}
     */
    DocumentPretranslating,

    /**
     * The DocumentPretranslatingStatus model constructor.
     * @property {module:model/DocumentPretranslatingStatus}
     */
    DocumentPretranslatingStatus,

    /**
     * The DocumentQuote model constructor.
     * @property {module:model/DocumentQuote}
     */
    DocumentQuote,

    /**
     * The DocumentUpdateParameters model constructor.
     * @property {module:model/DocumentUpdateParameters}
     */
    DocumentUpdateParameters,

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
     * The Error2 model constructor.
     * @property {module:model/Error2}
     */
    Error2,

    /**
     * The FileDeleteResponse model constructor.
     * @property {module:model/FileDeleteResponse}
     */
    FileDeleteResponse,

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
     * The JobLeverageStatsProjects model constructor.
     * @property {module:model/JobLeverageStatsProjects}
     */
    JobLeverageStatsProjects,

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
     * The LexiconEntry model constructor.
     * @property {module:model/LexiconEntry}
     */
    LexiconEntry,

    /**
     * The LexiconEntryExamples model constructor.
     * @property {module:model/LexiconEntryExamples}
     */
    LexiconEntryExamples,

    /**
     * The LexiconEntrySourceSpan model constructor.
     * @property {module:model/LexiconEntrySourceSpan}
     */
    LexiconEntrySourceSpan,

    /**
     * The LexiconEntryTargetSpan model constructor.
     * @property {module:model/LexiconEntryTargetSpan}
     */
    LexiconEntryTargetSpan,

    /**
     * The LexiconEntryTranslations model constructor.
     * @property {module:model/LexiconEntryTranslations}
     */
    LexiconEntryTranslations,

    /**
     * The LexiconUpdateParameters model constructor.
     * @property {module:model/LexiconUpdateParameters}
     */
    LexiconUpdateParameters,

    /**
     * The LexiconUpdateResponse model constructor.
     * @property {module:model/LexiconUpdateResponse}
     */
    LexiconUpdateResponse,

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
     * The MemoryInsertResponse model constructor.
     * @property {module:model/MemoryInsertResponse}
     */
    MemoryInsertResponse,

    /**
     * The MemoryUpdateParameters model constructor.
     * @property {module:model/MemoryUpdateParameters}
     */
    MemoryUpdateParameters,

    /**
     * The MemoryUpdateResponse model constructor.
     * @property {module:model/MemoryUpdateResponse}
     */
    MemoryUpdateResponse,

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
     * The ProjectUpdateResponse model constructor.
     * @property {module:model/ProjectUpdateResponse}
     */
    ProjectUpdateResponse,

    /**
     * The QARuleMatches model constructor.
     * @property {module:model/QARuleMatches}
     */
    QARuleMatches,

    /**
     * The QARuleMatchesContext model constructor.
     * @property {module:model/QARuleMatchesContext}
     */
    QARuleMatchesContext,

    /**
     * The QARuleMatchesMatches model constructor.
     * @property {module:model/QARuleMatchesMatches}
     */
    QARuleMatchesMatches,

    /**
     * The QARuleMatchesReplacements model constructor.
     * @property {module:model/QARuleMatchesReplacements}
     */
    QARuleMatchesReplacements,

    /**
     * The QARuleMatchesRule model constructor.
     * @property {module:model/QARuleMatchesRule}
     */
    QARuleMatchesRule,

    /**
     * The QARuleMatchesRuleCategory model constructor.
     * @property {module:model/QARuleMatchesRuleCategory}
     */
    QARuleMatchesRuleCategory,

    /**
     * The QARuleMatchesRuleUrls model constructor.
     * @property {module:model/QARuleMatchesRuleUrls}
     */
    QARuleMatchesRuleUrls,

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
     * The SegmentCreateParameters model constructor.
     * @property {module:model/SegmentCreateParameters}
     */
    SegmentCreateParameters,

    /**
     * The SegmentDeleteResponse model constructor.
     * @property {module:model/SegmentDeleteResponse}
     */
    SegmentDeleteResponse,

    /**
     * The SegmentUpdateParameters model constructor.
     * @property {module:model/SegmentUpdateParameters}
     */
    SegmentUpdateParameters,

    /**
     * The SegmentWithComments model constructor.
     * @property {module:model/SegmentWithComments}
     */
    SegmentWithComments,

    /**
     * The Setting model constructor.
     * @property {module:model/Setting}
     */
    Setting,

    /**
     * The SettingDictionary model constructor.
     * @property {module:model/SettingDictionary}
     */
    SettingDictionary,

    /**
     * The SettingUpsertBody model constructor.
     * @property {module:model/SettingUpsertBody}
     */
    SettingUpsertBody,

    /**
     * The SettingUpsertResponse model constructor.
     * @property {module:model/SettingUpsertResponse}
     */
    SettingUpsertResponse,

    /**
     * The SourceFile model constructor.
     * @property {module:model/SourceFile}
     */
    SourceFile,

    /**
     * The TaggedSegment model constructor.
     * @property {module:model/TaggedSegment}
     */
    TaggedSegment,

    /**
     * The TranslateRegisterResponse model constructor.
     * @property {module:model/TranslateRegisterResponse}
     */
    TranslateRegisterResponse,

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
    * The CommentsApi service constructor.
    * @property {module:api/CommentsApi}
    */
    CommentsApi,

    /**
    * The ConnectorsApi service constructor.
    * @property {module:api/ConnectorsApi}
    */
    ConnectorsApi,

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
    * The SettingsApi service constructor.
    * @property {module:api/SettingsApi}
    */
    SettingsApi,

    /**
    * The TranslateApi service constructor.
    * @property {module:api/TranslateApi}
    */
    TranslateApi
};
