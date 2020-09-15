# LiltNode.Translation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **String** | The target string. | [optional] 
**targetWithTags** | **String** | The target string with source tags projected into the target. | [optional] 
**align** | **String** | \&quot;MT only: A whitespace delimited list of source-target alignment indices.\&quot;  | [optional] 
**provenance** | **String** | Positive values indicate that the word is from the Memory, with contiguous identical entries (e.g., 2 2) indicating phrase matches. Negative contiguous values indicate entries from the Lexicon. 0 indicates a word from the background data.  | [optional] 
**score** | **Number** | The score of the translation. | [optional] 
**isTMMatch** | **Boolean** | TM only: If true, indicates an exact translation memory match. | [optional] 
**targetDelimiters** | **[String]** | A format string that indicates, for each word, if the word should be preceded by a space. | [optional] 
**targetWords** | **[String]** | The target string can be constructed by suffixing each &#x60;targetDelimiters&#x60; entry with its corresponding word in &#x60;targetWords&#x60; and concatenating the constructed array. Please note that the &#x60;targetDelimiters&#x60; array has one more entry than &#x60;targetWords&#x60; array which is why the last entry in the array will be the last value of &#x60;targetDelimiters&#x60;.  | [optional] 


