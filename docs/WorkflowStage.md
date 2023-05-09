# LiltNode.WorkflowStage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Identifier of the stage. | [optional] 
**name** | **String** | Name of the stage. | 
**active** | **Boolean** | Flag which is set to true when the stage is active for a document. | [optional] 
**assignmentType** | **String** | An enum to represent all possible types of Workflow stage. | 



## Enum: AssignmentTypeEnum


* `READY_TO_START` (value: `"READY_TO_START"`)

* `TRANSLATE` (value: `"TRANSLATE"`)

* `REVIEW` (value: `"REVIEW"`)

* `SECONDARY_REVIEW` (value: `"SECONDARY_REVIEW"`)

* `DONE` (value: `"DONE"`)




