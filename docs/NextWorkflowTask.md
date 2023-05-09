# LiltNode.NextWorkflowTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Identifier of the current workflow task. | 
**newTaskId** | **Number** | The identifier of the workflow task that is now currently active. | [optional] 
**newStageName** | **String** | The name of the workflow task that is now currently active. | [optional] 



## Enum: StatusEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `WORKFLOW_FINISHED` (value: `"WORKFLOW_FINISHED"`)

* `ALREADY_AT_START` (value: `"ALREADY_AT_START"`)

* `INVALID_ARGUMENT` (value: `"INVALID_ARGUMENT"`)

* `POSTCONDITIONS_FAILED` (value: `"POSTCONDITIONS_FAILED"`)

* `UNKNOWN_ERROR` (value: `"UNKNOWN_ERROR"`)




