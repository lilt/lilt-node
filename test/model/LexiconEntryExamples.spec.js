/**
 * Lilt REST API
 * The Lilt REST API enables programmatic access to the full-range of Lilt backend services including:   * Training of and translating with interactive, adaptive machine translation   * Large-scale translation memory   * The Lexicon (a large-scale termbase)   * Programmatic control of the Lilt CAT environment   * Translation memory synchronization  Requests and responses are in JSON format. The REST API only responds to HTTPS / SSL requests. ## Authentication Requests are authenticated via REST API key, which requires the Business plan.  Requests are authenticated using [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Add your REST API key as both the `username` and `password`.  For development, you may also pass the REST API key via the `key` query parameter. This is less secure than HTTP Basic Auth, and is not recommended for production use. 
 *
 * The version of the OpenAPI document: v2.0
 * Contact: support@lilt.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LiltNode);
  }
}(this, function(expect, LiltNode) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LiltNode.LexiconEntryExamples();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LexiconEntryExamples', function() {
    it('should create an instance of LexiconEntryExamples', function() {
      // uncomment below and update the code to test LexiconEntryExamples
      //var instane = new LiltNode.LexiconEntryExamples();
      //expect(instance).to.be.a(LiltNode.LexiconEntryExamples);
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new LiltNode.LexiconEntryExamples();
      //expect(instance).to.be();
    });

    it('should have the property sourceDelimiters (base name: "sourceDelimiters")', function() {
      // uncomment below and update the code to test the property sourceDelimiters
      //var instane = new LiltNode.LexiconEntryExamples();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instane = new LiltNode.LexiconEntryExamples();
      //expect(instance).to.be();
    });

    it('should have the property targetDelimiters (base name: "targetDelimiters")', function() {
      // uncomment below and update the code to test the property targetDelimiters
      //var instane = new LiltNode.LexiconEntryExamples();
      //expect(instance).to.be();
    });

    it('should have the property sourceSpan (base name: "sourceSpan")', function() {
      // uncomment below and update the code to test the property sourceSpan
      //var instane = new LiltNode.LexiconEntryExamples();
      //expect(instance).to.be();
    });

    it('should have the property targetSpan (base name: "targetSpan")', function() {
      // uncomment below and update the code to test the property targetSpan
      //var instane = new LiltNode.LexiconEntryExamples();
      //expect(instance).to.be();
    });

    it('should have the property similarity (base name: "similarity")', function() {
      // uncomment below and update the code to test the property similarity
      //var instane = new LiltNode.LexiconEntryExamples();
      //expect(instance).to.be();
    });

    it('should have the property memoryId (base name: "memory_id")', function() {
      // uncomment below and update the code to test the property memoryId
      //var instane = new LiltNode.LexiconEntryExamples();
      //expect(instance).to.be();
    });

  });

}));
