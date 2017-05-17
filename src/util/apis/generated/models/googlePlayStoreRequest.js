/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the GooglePlayStoreRequest class.
 * @constructor
 * @member {object} [secretJson] Provide service account details JSON (this is
 * provided by google).
 * 
 */
function GooglePlayStoreRequest() {
}

/**
 * Defines the metadata of GooglePlayStoreRequest
 *
 * @returns {object} metadata of GooglePlayStoreRequest
 *
 */
GooglePlayStoreRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GooglePlayStoreRequest',
    type: {
      name: 'Composite',
      className: 'GooglePlayStoreRequest',
      modelProperties: {
        secretJson: {
          required: false,
          serializedName: 'secret_json',
          type: {
            name: 'Object'
          }
        }
      }
    }
  };
};

module.exports = GooglePlayStoreRequest;