/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
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
  ExpirationDefaults,
  ExpirationDefaultsFromJSON,
  ExpirationDefaultsToJSON,
  ExpiredInboxDto,
  ExpiredInboxDtoFromJSON,
  ExpiredInboxDtoToJSON,
  PageExpiredInboxRecordProjection,
  PageExpiredInboxRecordProjectionFromJSON,
  PageExpiredInboxRecordProjectionToJSON,
} from '../models';

export interface GetExpiredInboxByInboxIdRequest {
  inboxId: string;
}

export interface GetExpiredInboxRecordRequest {
  expiredId: string;
}

export interface GetExpiredInboxesRequest {
  page?: number;
  size?: number;
  sort?: GetExpiredInboxesSortEnum;
  since?: Date;
  before?: Date;
  inboxId?: string;
}

/**
 *
 */
export class ExpiredControllerApi extends runtime.BaseAPI {
  /**
   * Return default times used for inbox expiration
   * Get default expiration settings
   */
  async getExpirationDefaultsRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ExpirationDefaults>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/expired/defaults`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ExpirationDefaultsFromJSON(jsonValue)
    );
  }

  /**
   * Return default times used for inbox expiration
   * Get default expiration settings
   */
  async getExpirationDefaults(
    initOverrides?: RequestInit
  ): Promise<ExpirationDefaults> {
    const response = await this.getExpirationDefaultsRaw(initOverrides);
    return await response.value();
  }

  /**
   * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
   * Get expired inbox record for a previously existing inbox
   */
  async getExpiredInboxByInboxIdRaw(
    requestParameters: GetExpiredInboxByInboxIdRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ExpiredInboxDto>> {
    if (
      requestParameters.inboxId === null ||
      requestParameters.inboxId === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxId',
        'Required parameter requestParameters.inboxId was null or undefined when calling getExpiredInboxByInboxId.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/expired/inbox/{inboxId}`.replace(
          `{${'inboxId'}}`,
          encodeURIComponent(String(requestParameters.inboxId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ExpiredInboxDtoFromJSON(jsonValue)
    );
  }

  /**
   * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
   * Get expired inbox record for a previously existing inbox
   */
  async getExpiredInboxByInboxId(
    requestParameters: GetExpiredInboxByInboxIdRequest,
    initOverrides?: RequestInit
  ): Promise<ExpiredInboxDto> {
    const response = await this.getExpiredInboxByInboxIdRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
   * Get an expired inbox record
   */
  async getExpiredInboxRecordRaw(
    requestParameters: GetExpiredInboxRecordRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ExpiredInboxDto>> {
    if (
      requestParameters.expiredId === null ||
      requestParameters.expiredId === undefined
    ) {
      throw new runtime.RequiredError(
        'expiredId',
        'Required parameter requestParameters.expiredId was null or undefined when calling getExpiredInboxRecord.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/expired/{expiredId}`.replace(
          `{${'expiredId'}}`,
          encodeURIComponent(String(requestParameters.expiredId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ExpiredInboxDtoFromJSON(jsonValue)
    );
  }

  /**
   * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
   * Get an expired inbox record
   */
  async getExpiredInboxRecord(
    requestParameters: GetExpiredInboxRecordRequest,
    initOverrides?: RequestInit
  ): Promise<ExpiredInboxDto> {
    const response = await this.getExpiredInboxRecordRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
   * List records of expired inboxes
   */
  async getExpiredInboxesRaw(
    requestParameters: GetExpiredInboxesRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageExpiredInboxRecordProjection>> {
    const queryParameters: any = {};

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.size !== undefined) {
      queryParameters['size'] = requestParameters.size;
    }

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.since !== undefined) {
      queryParameters['since'] = (requestParameters.since as any).toISOString();
    }

    if (requestParameters.before !== undefined) {
      queryParameters['before'] = (
        requestParameters.before as any
      ).toISOString();
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
        path: `/expired`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageExpiredInboxRecordProjectionFromJSON(jsonValue)
    );
  }

  /**
   * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
   * List records of expired inboxes
   */
  async getExpiredInboxes(
    requestParameters: GetExpiredInboxesRequest,
    initOverrides?: RequestInit
  ): Promise<PageExpiredInboxRecordProjection> {
    const response = await this.getExpiredInboxesRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}

/**
 * @export
 * @enum {string}
 */
export enum GetExpiredInboxesSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
