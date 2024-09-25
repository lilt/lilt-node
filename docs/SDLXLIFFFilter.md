# LiltNode.SDLXLIFFFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confName** | **String** | the current state of the SDLXLIFF Trans Unit. | 
**allowablePercentage** | **Number** | This represents for the current conf_name what percentage the filter applies to.  If you pass -1 it will take any value for this field and won&#39;t ignore blank values. If you pass 50, Lilt will only import Segments that have a 50 percent match or better. | [optional] 
**allowUnlockedSegments** | **Boolean** | Boolean that tells Lilt whether we should allow unlocked Segments for this conf_name. | [optional] 



## Enum: ConfNameEnum


* `Translated` (value: `"Translated"`)

* `Draft` (value: `"Draft"`)

* `ApprovedTranslation` (value: `"ApprovedTranslation"`)

* `Locked` (value: `"Locked"`)

* `SignedOff` (value: `"SignedOff"`)




