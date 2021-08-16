# LiltNode.SettingUpsertBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settingName** | **String** | The name of the setting. | [optional] 
**scope** | **String** | The entity scope the setting should be applied to. | [optional] 
**isEnforced** | **Boolean** | Whether this value should override others set for the same setting key.  | [optional] 
**projectId** | **Number** | Id of the the project the setting will be applied to. Required when scope is &#x60;Project&#x60;. | [optional] 
**organizationId** | **Number** | Id of the the project the setting will be applied to. Required when scope is &#x60;Organization&#x60;. | [optional] 


