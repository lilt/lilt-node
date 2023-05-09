# LiltNode.ProjectUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The Project name. | [optional] 
**state** | **String** | The project&#39;s state. The possible states are &#39;backlog&#39;, &#39;inProgress&#39;, &#39;inReview&#39;, &#39;inQA&#39;, and &#39;done&#39; | [optional] 
**dueDate** | **Number** | The due date. Measured in seconds since the Unix epoch. | [optional] 
**archived** | **Boolean** | True if the project is archived. Otherwise, false. | [optional] 
**metadata** | [**Object**](.md) | Metadata associated with a project. This field must be valid JSON. | [optional] 
**sampleReviewPercentage** | **Number** | The Project&#39;s sample review percentage. Must be an integer between 10 and 100, a multiple of 10 and greater than minimum value (displayed in error message). | [optional] 


