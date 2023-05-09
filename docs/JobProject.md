# LiltNode.JobProject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | An id for the project. | [optional] 
**srcLang** | **String** | Source language, an ISO 639-1 language identifier. | [optional] 
**srcLocale** | **String** | A locale identifier, supported for source language. | [optional] 
**trgLang** | **String** | Target language, an ISO 639-1 language identifier. | [optional] 
**trgLocale** | **String** | A locale identifier, supported for target language. | [optional] 
**name** | **String** | A name for the project. | [optional] 
**due** | **String** | An ISO date. | [optional] 
**isComplete** | **Boolean** | A state that checks project was completed. | [optional] 
**isArchived** | **Boolean** | The archived state of the project. | [optional] 
**state** | **String** | Current state of the project. Example, backlog, inProgress, inReview, done. | [optional] 
**numSourceTokens** | **Number** | Total number of source tokens. | [optional] 
**createdAt** | **String** | Time at which the object was created. | [optional] 
**updatedAt** | **String** | Time at which the object was updated. | [optional] 
**isDeleted** | **Boolean** | A state that checks project was deleted. | [optional] 
**memoryId** | **Number** | A unique number identifying the associated Memory. | [optional] 
**workflowStatus** | **String** | The status of the Workflow for the current project. | [optional] 
**workflowName** | **String** | Human readable name of the workflow associated with the current project. | [optional] 



## Enum: WorkflowStatusEnum


* `READY_TO_START` (value: `"READY_TO_START"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `DONE` (value: `"DONE"`)




