# LiltNode.DocumentWithSegments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | A unique number identifying the Document. | [optional] 
**projectId** | **Number** | A unique number identifying the Project. | [optional] 
**srclang** | **String** | An ISO 639-1 language identifier. | [optional] 
**trglang** | **String** | An ISO 639-1 language identifier. | [optional] 
**name** | **String** | The document name. | [optional] 
**importInProgress** | **Boolean** | True if the document is currently being imported | [optional] 
**importSucceeded** | **Boolean** | True if the import process succeeded. | [optional] 
**importErrorMessage** | **String** | Error message if &#x60;import_succeeded&#x3D;false&#x60; | [optional] 
**exportInProgress** | **Boolean** | True if the document is currently being exported for download | [optional] 
**exportSucceeded** | **Boolean** | True if the export process succeeded. | [optional] 
**exportErrorMessage** | **String** | Error message if &#x60;export_succeeded&#x3D;false&#x60; | [optional] 
**isPretranslating** | **Boolean** | True if the document is currently being pretranslated. | [optional] 
**status** | [**DocumentWithoutSegmentsStatus**](DocumentWithoutSegmentsStatus.md) |  | [optional] 
**translatorEmail** | **String** | The email of the assigned translator. | [optional] 
**reviewerEmail** | **String** | The email of the assigned reviewer. | [optional] 
**createdAt** | **Number** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**updatedAt** | **Number** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**segments** | [**[Segment]**](Segment.md) | A list of Segments. | [optional] 


