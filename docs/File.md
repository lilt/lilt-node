# lilt.File

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | A unique number identifying the File. | [optional] 
**name** | **String** | The file name. | [optional] 
**fileHash** | **String** | A unique hash value associated with the file. An MD5 hash of the file content will be used by default. | [optional] 
**exportUri** | **String** | A webhook endpoint that will export the translated document back to the source repository. | [optional] 
**createdAt** | **Number** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**updatedAt** | **Number** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
