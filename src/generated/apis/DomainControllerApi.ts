/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  CreateDomainOptions,
  CreateDomainOptionsFromJSON,
  CreateDomainOptionsToJSON,
  DomainDto,
  DomainDtoFromJSON,
  DomainDtoToJSON,
  DomainIssuesDto,
  DomainIssuesDtoFromJSON,
  DomainIssuesDtoToJSON,
  DomainPreview,
  DomainPreviewFromJSON,
  DomainPreviewToJSON,
  InboxDto,
  InboxDtoFromJSON,
  InboxDtoToJSON,
  UpdateDomainOptions,
  UpdateDomainOptionsFromJSON,
  UpdateDomainOptionsToJSON,
} from '../models';

export interface AddDomainWildcardCatchAllRequest {
  id: string;
}

export interface CreateDomainRequest {
  createDomainOptions: CreateDomainOptions;
}

export interface DeleteDomainRequest {
  id: string;
}

export interface GetDomainRequest {
  id: string;
  checkForErrors?: boolean;
}

export interface GetDomainWildcardCatchAllInboxRequest {
  id: string;
}

export interface UpdateDomainRequest {
  id: string;
  updateDomainOptions: UpdateDomainOptions;
}

/**
 *
 */
export class DomainControllerApi extends runtime.BaseAPI {
  /**
   * Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
   * Add catch all wild card inbox to domain
   */
  async addDomainWildcardCatchAllRaw(
    requestParameters: AddDomainWildcardCatchAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DomainDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling addDomainWildcardCatchAll.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/domains/{id}/wildcard`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DomainDtoFromJSON(jsonValue)
    );
  }

  /**
   * Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
   * Add catch all wild card inbox to domain
   */
  async addDomainWildcardCatchAll(
    requestParameters: AddDomainWildcardCatchAllRequest,
    initOverrides?: RequestInit
  ): Promise<DomainDto> {
    const response = await this.addDomainWildcardCatchAllRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
   * Create Domain
   */
  async createDomainRaw(
    requestParameters: CreateDomainRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DomainDto>> {
    if (
      requestParameters.createDomainOptions === null ||
      requestParameters.createDomainOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'createDomainOptions',
        'Required parameter requestParameters.createDomainOptions was null or undefined when calling createDomain.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/domains`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateDomainOptionsToJSON(requestParameters.createDomainOptions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DomainDtoFromJSON(jsonValue)
    );
  }

  /**
   * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
   * Create Domain
   */
  async createDomain(
    requestParameters: CreateDomainRequest,
    initOverrides?: RequestInit
  ): Promise<DomainDto> {
    const response = await this.createDomainRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Delete a domain. This will disable any existing inboxes that use this domain.
   * Delete a domain
   */
  async deleteDomainRaw(
    requestParameters: DeleteDomainRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<string>>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling deleteDomain.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/domains/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Delete a domain. This will disable any existing inboxes that use this domain.
   * Delete a domain
   */
  async deleteDomain(
    requestParameters: DeleteDomainRequest,
    initOverrides?: RequestInit
  ): Promise<Array<string>> {
    const response = await this.deleteDomainRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns domain verification status and tokens for a given domain
   * Get a domain
   */
  async getDomainRaw(
    requestParameters: GetDomainRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DomainDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getDomain.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.checkForErrors !== undefined) {
      queryParameters['checkForErrors'] = requestParameters.checkForErrors;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/domains/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DomainDtoFromJSON(jsonValue)
    );
  }

  /**
   * Returns domain verification status and tokens for a given domain
   * Get a domain
   */
  async getDomain(
    requestParameters: GetDomainRequest,
    initOverrides?: RequestInit
  ): Promise<DomainDto> {
    const response = await this.getDomainRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * List domain issues for domains you have created
   * Get domain issues
   */
  async getDomainIssuesRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DomainIssuesDto>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/domains/issues`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DomainIssuesDtoFromJSON(jsonValue)
    );
  }

  /**
   * List domain issues for domains you have created
   * Get domain issues
   */
  async getDomainIssues(initOverrides?: RequestInit): Promise<DomainIssuesDto> {
    const response = await this.getDomainIssuesRaw(initOverrides);
    return await response.value();
  }

  /**
   * Get the catch all inbox for a domain for missed emails
   * Get catch all wild card inbox for domain
   */
  async getDomainWildcardCatchAllInboxRaw(
    requestParameters: GetDomainWildcardCatchAllInboxRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getDomainWildcardCatchAllInbox.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/domains/{id}/wildcard`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxDtoFromJSON(jsonValue)
    );
  }

  /**
   * Get the catch all inbox for a domain for missed emails
   * Get catch all wild card inbox for domain
   */
  async getDomainWildcardCatchAllInbox(
    requestParameters: GetDomainWildcardCatchAllInboxRequest,
    initOverrides?: RequestInit
  ): Promise<InboxDto> {
    const response = await this.getDomainWildcardCatchAllInboxRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * List all custom domains you have created
   * Get domains
   */
  async getDomainsRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<DomainPreview>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/domains`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(DomainPreviewFromJSON)
    );
  }

  /**
   * List all custom domains you have created
   * Get domains
   */
  async getDomains(initOverrides?: RequestInit): Promise<Array<DomainPreview>> {
    const response = await this.getDomainsRaw(initOverrides);
    return await response.value();
  }

  /**
   * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
   * Update a domain
   */
  async updateDomainRaw(
    requestParameters: UpdateDomainRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DomainDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling updateDomain.'
      );
    }

    if (
      requestParameters.updateDomainOptions === null ||
      requestParameters.updateDomainOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'updateDomainOptions',
        'Required parameter requestParameters.updateDomainOptions was null or undefined when calling updateDomain.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/domains/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateDomainOptionsToJSON(requestParameters.updateDomainOptions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DomainDtoFromJSON(jsonValue)
    );
  }

  /**
   * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
   * Update a domain
   */
  async updateDomain(
    requestParameters: UpdateDomainRequest,
    initOverrides?: RequestInit
  ): Promise<DomainDto> {
    const response = await this.updateDomainRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
