# LiltNode.SegmentWithComments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | A unique number identifying the Segment. | [optional] 
**createdAt** | **Number** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**updatedAt** | **Number** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**documentId** | **Number** | A unique Document identifier. | [optional] 
**memoryId** | **Number** | The Memory with which this Segment is associated. | [optional] 
**source** | **String** | The source string. | [optional] 
**srclang** | **String** | An ISO 639-1 language code. | [optional] 
**target** | **String** | The target string. | [optional] 
**trglang** | **String** | An ISO 639-1 language code. | [optional] 
**isConfirmed** | **Boolean** | The confirmation status. | [optional] 
**isReviewed** | **Boolean** | The review status. | [optional] 
**comments** | [**[Comment]**](Comment.md) | A list of Comments. | [optional] 


