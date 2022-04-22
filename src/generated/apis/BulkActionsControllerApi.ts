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
  BulkSendEmailOptions,
  BulkSendEmailOptionsFromJSON,
  BulkSendEmailOptionsToJSON,
  InboxDto,
  InboxDtoFromJSON,
  InboxDtoToJSON,
} from '../models';

export interface BulkCreateInboxesRequest {
  count: number;
}

export interface BulkDeleteInboxesRequest {
  requestBody: Array<string>;
}

export interface BulkSendEmailsRequest {
  bulkSendEmailOptions: BulkSendEmailOptions;
}

/**
 *
 */
export class BulkActionsControllerApi extends runtime.BaseAPI {
  /**
   * Bulk create Inboxes (email addresses)
   */
  async bulkCreateInboxesRaw(
    requestParameters: BulkCreateInboxesRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<InboxDto>>> {
    if (
      requestParameters.count === null ||
      requestParameters.count === undefined
    ) {
      throw new runtime.RequiredError(
        'count',
        'Required parameter requestParameters.count was null or undefined when calling bulkCreateInboxes.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.count !== undefined) {
      queryParameters['count'] = requestParameters.count;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/bulk/inboxes`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(InboxDtoFromJSON)
    );
  }

  /**
   * Bulk create Inboxes (email addresses)
   */
  async bulkCreateInboxes(
    requestParameters: BulkCreateInboxesRequest,
    initOverrides?: RequestInit
  ): Promise<Array<InboxDto>> {
    const response = await this.bulkCreateInboxesRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Bulk Delete Inboxes
   */
  async bulkDeleteInboxesRaw(
    requestParameters: BulkDeleteInboxesRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.requestBody === null ||
      requestParameters.requestBody === undefined
    ) {
      throw new runtime.RequiredError(
        'requestBody',
        'Required parameter requestParameters.requestBody was null or undefined when calling bulkDeleteInboxes.'
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
        path: `/bulk/inboxes`,
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.requestBody,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Bulk Delete Inboxes
   */
  async bulkDeleteInboxes(
    requestParameters: BulkDeleteInboxesRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.bulkDeleteInboxesRaw(requestParameters, initOverrides);
  }

  /**
   * Bulk Send Emails
   */
  async bulkSendEmailsRaw(
    requestParameters: BulkSendEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.bulkSendEmailOptions === null ||
      requestParameters.bulkSendEmailOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'bulkSendEmailOptions',
        'Required parameter requestParameters.bulkSendEmailOptions was null or undefined when calling bulkSendEmails.'
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
        path: `/bulk/send`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: BulkSendEmailOptionsToJSON(
          requestParameters.bulkSendEmailOptions
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Bulk Send Emails
   */
  async bulkSendEmails(
    requestParameters: BulkSendEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.bulkSendEmailsRaw(requestParameters, initOverrides);
  }
}
