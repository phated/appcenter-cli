/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Generic result for any alerting API operation
 *
 */
class AlertOperationResult {
  /**
   * Create a AlertOperationResult.
   * @member {string} requestId Unique request identifier for tracking
   */
  constructor() {
  }

  /**
   * Defines the metadata of AlertOperationResult
   *
   * @returns {object} metadata of AlertOperationResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertOperationResult',
      type: {
        name: 'Composite',
        className: 'AlertOperationResult',
        modelProperties: {
          requestId: {
            required: true,
            serializedName: 'request_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AlertOperationResult;
