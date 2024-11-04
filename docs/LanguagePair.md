# LiltNode.LanguagePair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trgLang** | **String** | Target language, an ISO 639-1 language identifier. | 
**trgLocale** | **String** | A locale identifier, supported for target language. | [optional] 
**dueDate** | **String** | An ISO date. | [optional] 
**memoryId** | **Number** | A unique number identifying the associated Memory. | 
**externalModelId** | **Number** | A unique identifier for working with a third party model in the Lilt Platform | [optional] 
**pretranslate** | **Boolean** | Attribute translation authorship of exact matches to the creator of the document being pretranslated. | [optional] 
**autoAccept** | **Boolean** | Accept and lock exact matches. | [optional] 
**caseSensitive** | **Boolean** | Use case sensitive translation memory matching. | [optional] 
**takeMatchAttribution** | **Boolean** | Use MT for unmatched segments. | [optional] 
**configId** | **Number** | Configuration id | [optional] 
**workflowTemplateId** | **Number** | Workflow Template id, to assign a specific Workflow to the project created out of this Language Pair. WorkflowTemplateIds can be retrieved via the /workflows/templates endpoint. If not specified then the Job level workflowTemplateId will be used. | [optional] 
**workflowTemplateName** | **Number** | Workflow Template Name, when passed with TeamId it allows for an on the fly look up of the correct WorkflowTemplate to use. If workflowTemplateId is passed the workflowTemplateId supercedes other lookups. | [optional] 
**workflowStageAssignments** | [**[WorkflowStageAssignment]**](WorkflowStageAssignment.md) |  | [optional] 


