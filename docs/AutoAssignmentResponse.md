# LiltNode.AutoAssignmentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **Number** | The id of the project. | 
**success** | **Boolean** | True if the operation was successful for this project. | 
**error** | **String** | An optional error message if success &#x3D; false | [optional] 
**errors** | [**[AssignmentError]**](AssignmentError.md) | A list of errors if there were any. | [optional] 
**assignments** | [**[AssignmentDetails]**](AssignmentDetails.md) | Assignment details, like which user was assigned and which role. | [optional] 


