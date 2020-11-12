# LiltNode.Project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | A unique number identifying the Project. | [optional] 
**memoryId** | **Number** | A unique number identifying the associated Memory. | [optional] 
**srclang** | **String** | An ISO 639-1 language identifier. | [optional] 
**trglang** | **String** | An ISO 639-1 language identifier. | [optional] 
**srclocale** | **String** | A locale identifier, supported for srclang. | [optional] 
**trglocale** | **String** | A locale identifier, supported for trglang. | [optional] 
**name** | **String** | A name for the project. | [optional] 
**state** | **String** | The project&#39;s state. The possible states are &#x60;backlog&#x60;, &#x60;inProgress&#x60;, &#x60;inReview&#x60;, &#x60;inQA&#x60;, and &#x60;done&#x60;. | [optional] 
**dueDate** | **Number** | The due date. Measured in seconds since the Unix epoch. | [optional] 
**archived** | **Boolean** | The archived state of the Project. | [optional] 
**metadata** | [**Object**](.md) | A JSON object of key/value string pairs. Stores custom project information. | [optional] 
**sampleReviewPercentage** | **Number** | The project&#39;s sample review percentage. | [optional] 
**createdAt** | **Number** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**updatedAt** | **Number** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**document** | [**[DocumentWithoutSegments]**](DocumentWithoutSegments.md) | A list of Documents. | [optional] 


