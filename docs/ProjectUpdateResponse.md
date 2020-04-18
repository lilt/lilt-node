# LiltNode.ProjectUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | A unique Project identifier. | 
**name** | **String** | The Project name. | [optional] 
**state** | **String** | The project&#39;s state. The possible states are &#39;backlog&#39;, &#39;inProgress&#39;, &#39;inReview&#39;, &#39;inQA&#39;, and &#39;done&#39; | [optional] 
**dueDate** | **Number** | The due date. Measured in seconds since the Unix epoch. | [optional] 
**archived** | **Boolean** | True if the project is archived. Otherwise, false. | [optional] 
**metadata** | [**Object**](.md) | Metadata associated with a project. This field must be valid JSON. | [optional] 


