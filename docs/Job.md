# LiltNode.Job

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the job. | [optional] 
**creationStatus** | **String** | Status of job creation process that includes PENDING, COMPLETE, and FAILED. | [optional] 
**deliveredAt** | **Number** |  | [optional] 
**status** | **String** | Current status of job that includes archived, delivered, and active. | [optional] 
**due** | **String** | An ISO string date. | [optional] 
**id** | **Number** | An id for the job. | [optional] 
**isProcessing** | **Number** | Values include &#x60;1&#x60; while in progress, &#x60;0&#x60; when idle and &#x60;-2&#x60; when processing failed. | [optional] 
**stats** | [**JobStats**](JobStats.md) |  | [optional] 


