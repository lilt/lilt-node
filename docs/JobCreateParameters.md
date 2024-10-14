# LiltNode.JobCreateParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Job. | 
**languagePairs** | [**[LanguagePair]**](LanguagePair.md) | Language pairs is a set of one or more pairs that includes source language, source locale(optional), target language, target locale(optional), and memoryId. | 
**fileIds** | **[Number]** | A list of file ids to upload to job creation. | 
**due** | **String** | An ISO string date representing job due date. | [optional] 
**srcLang** | **String** | 2-letter ISO source language code | 
**srcLocale** | **String** | 2-letter source language code | 
**isPlural** | **Boolean** | A boolean value representing if the files have plurals. | [optional] 
**workflowTemplateId** | **Number** | ID of the workflow template to be used. Use the [workflows templates endpoint](#tag/Workflows/operation/getWorkflowTemplates) to get the list of available workflows. | [optional] 


