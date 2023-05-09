# LiltNode.LanguagePair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**srcLang** | **String** | Source language, an ISO 639-1 language identifier. | [optional] 
**srcLocale** | **String** | A locale identifier, supported for source language. | [optional] 
**trgLang** | **String** | Target language, an ISO 639-1 language identifier. | 
**trgLocale** | **String** | A locale identifier, supported for target language. | [optional] 
**dueDate** | **String** | An ISO date. | [optional] 
**memoryId** | **Number** | A unique number identifying the associated Memory. | 
**pretranslate** | **Boolean** | Attribute translation authorship of exact matches to the creator of the document being pretranslated. | [optional] 
**autoAccept** | **Boolean** | Accept and lock exact matches. | [optional] 
**caseSensitive** | **Boolean** | Use case sensitive translation memory matching. | [optional] 
**takeMatchAttribution** | **Boolean** | Use MT for unmatched segments. | [optional] 
**configId** | **Number** | Configuration id | [optional] 
**workflowTemplateId** | **Number** | Workflow Template id, to assign a specific Workflow to the project created out of this Language Pair. WorkflowTemplateIds can be retrieved via the /workflows/templates endpoint. If not specified then the Job level workflowTemplateId will be used. | [optional] 
**workflowStageAssignments** | [**[WorkflowStageAssignment]**](WorkflowStageAssignment.md) |  | [optional] 


