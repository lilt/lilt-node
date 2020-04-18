# LiltNode.ProjectStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | A unique Project identifier. | [optional] 
**numSourceWords** | **Number** | The number of source words in the Project. | [optional] 
**numWordsConfirmed** | **Number** | The number of confirmed source words. | [optional] 
**numWordsReviewed** | **Number** | The number of reviewed source words. | [optional] 
**timeElapsed** | **Number** | The total time spent on the project by all resources. Measured in milliseconds. | [optional] 
**timeElapsedTranslation** | **Number** | The total time spent on translation by all resources. Measured in milliseconds. | [optional] 
**timeElapsedResearch** | **Number** | The total time spent on research by all resources. Measured in milliseconds. | [optional] 
**timeElapsedReview** | **Number** | The total time spent on reviewing by all resources. Measured in milliseconds. | [optional] 
**resources** | [**[ResourceStatus]**](ResourceStatus.md) | A list of ResourceStatus objects that represent per-resource statistics. | [optional] 


