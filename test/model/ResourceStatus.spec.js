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
    instance = new LiltNode.ResourceStatus();
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

  describe('ResourceStatus', function() {
    it('should create an instance of ResourceStatus', function() {
      // uncomment below and update the code to test ResourceStatus
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be.a(LiltNode.ResourceStatus);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property numWordsConfirmed (base name: "num_words_confirmed")', function() {
      // uncomment below and update the code to test the property numWordsConfirmed
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property numWordsNew (base name: "num_words_new")', function() {
      // uncomment below and update the code to test the property numWordsNew
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property numWordsFuzzy (base name: "num_words_fuzzy")', function() {
      // uncomment below and update the code to test the property numWordsFuzzy
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property numWordsExact (base name: "num_words_exact")', function() {
      // uncomment below and update the code to test the property numWordsExact
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property numWordsReviewed (base name: "num_words_reviewed")', function() {
      // uncomment below and update the code to test the property numWordsReviewed
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property timeElapsed (base name: "time_elapsed")', function() {
      // uncomment below and update the code to test the property timeElapsed
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property timeElapsedTranslation (base name: "time_elapsed_translation")', function() {
      // uncomment below and update the code to test the property timeElapsedTranslation
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property timeElapsedResearch (base name: "time_elapsed_research")', function() {
      // uncomment below and update the code to test the property timeElapsedResearch
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property timeElapsedReview (base name: "time_elapsed_review")', function() {
      // uncomment below and update the code to test the property timeElapsedReview
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property numSegmentsConfirmed (base name: "num_segments_confirmed")', function() {
      // uncomment below and update the code to test the property numSegmentsConfirmed
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

    it('should have the property numSegmentsReviewed (base name: "num_segments_reviewed")', function() {
      // uncomment below and update the code to test the property numSegmentsReviewed
      //var instane = new LiltNode.ResourceStatus();
      //expect(instance).to.be();
    });

  });

}));
