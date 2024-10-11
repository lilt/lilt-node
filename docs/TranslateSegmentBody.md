# LiltNode.TranslateSegmentBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **String** | A unique Segment identifier. | [optional] 
**memoryId** | **Number** | A unique Memory identifier. | 
**sourceHash** | **Number** | A source hash code. | [optional] 
**n** | **Number** | Return top n translations (deprecated). | [optional] 
**prefix** | **String** | A target prefix | [optional] 
**rich** | **Boolean** | Returns rich translation information (e.g., with word alignments). | [optional] [default to false]
**tmMatches** | **Boolean** | Include translation memory fuzzy matches. | [optional] [default to true]
**projectTags** | **Boolean** | Project tags. Projects tags in source to target if set to true. | [optional] [default to false]
**containsICUData** | **Boolean** | Contains ICU data. If true then tags in the source following the ICU standard will be parsed and retained. | [optional] [default to false]


