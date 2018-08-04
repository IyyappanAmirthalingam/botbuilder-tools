/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/examplesMappers";
import * as Parameters from "../models/parameters";
import { LuisAuthoringContext } from "../luisAuthoringContext";

/** Class representing a Examples. */
export class Examples {
  private readonly client: LuisAuthoringContext;

  /**
   * Create a Examples.
   * @param {LuisAuthoringContext} client Reference to the service client.
   */
  constructor(client: LuisAuthoringContext) {
    this.client = client;
  }

  /**
   * Adds a labeled example to the application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExampleLabelObject} exampleLabelObject An example label with the expected intent and
   * entities.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  addWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LabelExampleResponse>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        exampleLabelObject,
        options
      },
      addOperationSpec);
  }

  /**
   * Adds a batch of labeled examples to the application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExampleLabelObject[]} exampleLabelObjectArray Array of examples.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  batchWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.BatchLabelExample[]>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        exampleLabelObjectArray,
        options
      },
      batchOperationSpec);
  }

  /**
   * Returns examples to be reviewed.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExamplesListOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: Models.ExamplesListOptionalParams): Promise<msRest.HttpOperationResponse<Models.LabeledUtterance[]>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        options
      },
      listOperationSpec);
  }

  /**
   * Deletes the labeled example with the specified ID.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {number} exampleId The example ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethodWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatus>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        exampleId,
        options
      },
      deleteMethodOperationSpec);
  }

  /**
   * Adds a labeled example to the application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExampleLabelObject} exampleLabelObject An example label with the expected intent and
   * entities.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.LabelExampleResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.LabelExampleResponse} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject): Promise<Models.LabelExampleResponse>;
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options: msRest.RequestOptionsBase): Promise<Models.LabelExampleResponse>;
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, callback: msRest.ServiceCallback<Models.LabelExampleResponse>): void;
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LabelExampleResponse>): void;
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LabelExampleResponse>): any {
    return msRest.responseToBody(this.addWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, exampleLabelObject, options, callback);
  }

  /**
   * Adds a batch of labeled examples to the application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExampleLabelObject[]} exampleLabelObjectArray Array of examples.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.BatchLabelExample[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[]): Promise<Models.BatchLabelExample[]>;
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options: msRest.RequestOptionsBase): Promise<Models.BatchLabelExample[]>;
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], callback: msRest.ServiceCallback<Models.BatchLabelExample[]>): void;
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchLabelExample[]>): void;
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.BatchLabelExample[]>): any {
    return msRest.responseToBody(this.batchWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, exampleLabelObjectArray, options, callback);
  }

  /**
   * Returns examples to be reviewed.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExamplesListOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.LabeledUtterance[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string): Promise<Models.LabeledUtterance[]>;
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: Models.ExamplesListOptionalParams): Promise<Models.LabeledUtterance[]>;
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.LabeledUtterance[]>): void;
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: Models.ExamplesListOptionalParams, callback: msRest.ServiceCallback<Models.LabeledUtterance[]>): void;
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: Models.ExamplesListOptionalParams, callback?: msRest.ServiceCallback<Models.LabeledUtterance[]>): any {
    return msRest.responseToBody(this.listWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, options, callback);
  }

  /**
   * Deletes the labeled example with the specified ID.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {number} exampleId The example ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.OperationStatus} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.OperationStatus} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number): Promise<Models.OperationStatus>;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, options: msRest.RequestOptionsBase): Promise<Models.OperationStatus>;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationStatus>): any {
    return msRest.responseToBody(this.deleteMethodWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, exampleId, options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/example",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "exampleLabelObject",
    mapper: {
      ...Mappers.ExampleLabelObject,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.LabelExampleResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const batchOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/examples",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "exampleLabelObjectArray",
    mapper: {
      required: true,
      serializedName: "exampleLabelObjectArray",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "ExampleLabelObject"
          }
        }
      }
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchLabelExample"
            }
          }
        }
      }
    },
    207: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchLabelExample"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/examples",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0
  ],
  queryParameters: [
    Parameters.skip,
    Parameters.take
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LabeledUtterance"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/examples/{exampleId}",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0,
    Parameters.exampleId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};