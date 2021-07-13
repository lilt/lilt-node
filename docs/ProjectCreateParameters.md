# LiltNode.ProjectCreateParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Project. | 
**memoryId** | **Number** | The Memory to associate with this new Project. | 
**jobId** | **Number** | The Job to associate with this new Project. If a Job ID is not provided then a new Job will be created to contain the Project.  | [optional] 
**dueDate** | **Number** | The due date. Measured in seconds since the Unix epoch. | [optional] 
**metadata** | [**Object**](.md) | A JSON object of key/value string pairs. Stores custom project information. | [optional] 


