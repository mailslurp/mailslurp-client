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
  ImapServerFetchResult,
  ImapServerFetchResultFromJSON,
  ImapServerFetchResultToJSON,
  ImapServerGetResult,
  ImapServerGetResultFromJSON,
  ImapServerGetResultToJSON,
  ImapServerListOptions,
  ImapServerListOptionsFromJSON,
  ImapServerListOptionsToJSON,
  ImapServerListResult,
  ImapServerListResultFromJSON,
  ImapServerListResultToJSON,
  ImapServerSearchOptions,
  ImapServerSearchOptionsFromJSON,
  ImapServerSearchOptionsToJSON,
  ImapServerSearchResult,
  ImapServerSearchResultFromJSON,
  ImapServerSearchResultToJSON,
  ImapServerStatusOptions,
  ImapServerStatusOptionsFromJSON,
  ImapServerStatusOptionsToJSON,
  ImapServerStatusResult,
  ImapServerStatusResultFromJSON,
  ImapServerStatusResultToJSON,
  ImapUpdateFlagsOptions,
  ImapUpdateFlagsOptionsFromJSON,
  ImapUpdateFlagsOptionsToJSON,
} from '../models';

export interface ImapServerFetchRequest {
  seqNum: number;
  inboxId?: string;
}

export interface ImapServerGetRequest {
  emailId: string;
  inboxId?: string;
}

export interface ImapServerListRequest {
  imapServerListOptions: ImapServerListOptions;
  inboxId?: string;
}

export interface ImapServerSearchRequest {
  imapServerSearchOptions: ImapServerSearchOptions;
  inboxId?: string;
}

export interface ImapServerStatusRequest {
  imapServerStatusOptions: ImapServerStatusOptions;
  inboxId?: string;
}

export interface ImapServerUpdateFlagsRequest {
  imapUpdateFlagsOptions: ImapUpdateFlagsOptions;
  inboxId?: string;
}

/**
 *
 */
export class ImapControllerApi extends runtime.BaseAPI {
  /**
   * Fetch message in an inbox
   */
  async imapServerFetchRaw(
    requestParameters: ImapServerFetchRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ImapServerFetchResult>> {
    if (
      requestParameters.seqNum === null ||
      requestParameters.seqNum === undefined
    ) {
      throw new runtime.RequiredError(
        'seqNum',
        'Required parameter requestParameters.seqNum was null or undefined when calling imapServerFetch.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    if (requestParameters.seqNum !== undefined) {
      queryParameters['seqNum'] = requestParameters.seqNum;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/imap/server/fetch`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ImapServerFetchResultFromJSON(jsonValue)
    );
  }

  /**
   * Fetch message in an inbox
   */
  async imapServerFetch(
    requestParameters: ImapServerFetchRequest,
    initOverrides?: RequestInit
  ): Promise<ImapServerFetchResult> {
    const response = await this.imapServerFetchRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get a message by email ID
   */
  async imapServerGetRaw(
    requestParameters: ImapServerGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ImapServerGetResult>> {
    if (
      requestParameters.emailId === null ||
      requestParameters.emailId === undefined
    ) {
      throw new runtime.RequiredError(
        'emailId',
        'Required parameter requestParameters.emailId was null or undefined when calling imapServerGet.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.emailId !== undefined) {
      queryParameters['emailId'] = requestParameters.emailId;
    }

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/imap/server/get`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ImapServerGetResultFromJSON(jsonValue)
    );
  }

  /**
   * Get a message by email ID
   */
  async imapServerGet(
    requestParameters: ImapServerGetRequest,
    initOverrides?: RequestInit
  ): Promise<ImapServerGetResult> {
    const response = await this.imapServerGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * List messages in an inbox
   */
  async imapServerListRaw(
    requestParameters: ImapServerListRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ImapServerListResult>> {
    if (
      requestParameters.imapServerListOptions === null ||
      requestParameters.imapServerListOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'imapServerListOptions',
        'Required parameter requestParameters.imapServerListOptions was null or undefined when calling imapServerList.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/imap/server/list`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ImapServerListOptionsToJSON(
          requestParameters.imapServerListOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ImapServerListResultFromJSON(jsonValue)
    );
  }

  /**
   * List messages in an inbox
   */
  async imapServerList(
    requestParameters: ImapServerListRequest,
    initOverrides?: RequestInit
  ): Promise<ImapServerListResult> {
    const response = await this.imapServerListRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Search messages in an inbox
   */
  async imapServerSearchRaw(
    requestParameters: ImapServerSearchRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ImapServerSearchResult>> {
    if (
      requestParameters.imapServerSearchOptions === null ||
      requestParameters.imapServerSearchOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'imapServerSearchOptions',
        'Required parameter requestParameters.imapServerSearchOptions was null or undefined when calling imapServerSearch.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/imap/server/search`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ImapServerSearchOptionsToJSON(
          requestParameters.imapServerSearchOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ImapServerSearchResultFromJSON(jsonValue)
    );
  }

  /**
   * Search messages in an inbox
   */
  async imapServerSearch(
    requestParameters: ImapServerSearchRequest,
    initOverrides?: RequestInit
  ): Promise<ImapServerSearchResult> {
    const response = await this.imapServerSearchRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get status for mailbox
   */
  async imapServerStatusRaw(
    requestParameters: ImapServerStatusRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ImapServerStatusResult>> {
    if (
      requestParameters.imapServerStatusOptions === null ||
      requestParameters.imapServerStatusOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'imapServerStatusOptions',
        'Required parameter requestParameters.imapServerStatusOptions was null or undefined when calling imapServerStatus.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/imap/server/status`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ImapServerStatusOptionsToJSON(
          requestParameters.imapServerStatusOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ImapServerStatusResultFromJSON(jsonValue)
    );
  }

  /**
   * Get status for mailbox
   */
  async imapServerStatus(
    requestParameters: ImapServerStatusRequest,
    initOverrides?: RequestInit
  ): Promise<ImapServerStatusResult> {
    const response = await this.imapServerStatusRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Update message flags
   */
  async imapServerUpdateFlagsRaw(
    requestParameters: ImapServerUpdateFlagsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.imapUpdateFlagsOptions === null ||
      requestParameters.imapUpdateFlagsOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'imapUpdateFlagsOptions',
        'Required parameter requestParameters.imapUpdateFlagsOptions was null or undefined when calling imapServerUpdateFlags.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/imap/server/update-flags`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ImapUpdateFlagsOptionsToJSON(
          requestParameters.imapUpdateFlagsOptions
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Update message flags
   */
  async imapServerUpdateFlags(
    requestParameters: ImapServerUpdateFlagsRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.imapServerUpdateFlagsRaw(requestParameters, initOverrides);
  }
}