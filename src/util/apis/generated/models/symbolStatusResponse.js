/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the SymbolStatusResponse class.
 * @constructor
 * A response containing information pertaining to a symbol status
 *
 * @member {string} symbolId The unique id for this symbol (uuid)
 * 
 * @member {string} appId The application that this symbol belongs to
 * 
 * @member {string} status Whether the symbol is ignored. Possible values
 * include: 'available', 'ignored', 'missing'
 * 
 */
function SymbolStatusResponse() {
}

/**
 * Defines the metadata of SymbolStatusResponse
 *
 * @returns {object} metadata of SymbolStatusResponse
 *
 */
SymbolStatusResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SymbolStatusResponse',
    type: {
      name: 'Composite',
      className: 'SymbolStatusResponse',
      modelProperties: {
        symbolId: {
          required: true,
          serializedName: 'symbol_id',
          type: {
            name: 'String'
          }
        },
        appId: {
          required: true,
          serializedName: 'app_id',
          type: {
            name: 'String'
          }
        },
        status: {
          required: true,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = SymbolStatusResponse;