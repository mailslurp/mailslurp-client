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
  PageSmsProjection,
  PageSmsProjectionFromJSON,
  PageSmsProjectionToJSON,
  SmsMessage,
  SmsMessageFromJSON,
  SmsMessageToJSON,
} from '../models';

export interface DeleteSmsMessageRequest {
  smsId: string;
}

export interface DeleteSmsMessagesRequest {
  phoneNumberId?: string;
}

export interface GetSmsMessageRequest {
  smsId: string;
}

export interface GetSmsMessagesPaginatedRequest {
  phoneNumber?: string;
  page?: number;
  size?: number;
  sort?: GetSmsMessagesPaginatedSortEnum;
  unreadOnly?: boolean;
  since?: Date;
  before?: Date;
}

/**
 *
 */
export class SmsControllerApi extends runtime.BaseAPI {
  /**
   * Delete an SMS message
   * Delete SMS message.
   */
  async deleteSmsMessageRaw(
    requestParameters: DeleteSmsMessageRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.smsId === null ||
      requestParameters.smsId === undefined
    ) {
      throw new runtime.RequiredError(
        'smsId',
        'Required parameter requestParameters.smsId was null or undefined when calling deleteSmsMessage.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sms/{smsId}`.replace(
          `{${'smsId'}}`,
          encodeURIComponent(String(requestParameters.smsId))
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete an SMS message
   * Delete SMS message.
   */
  async deleteSmsMessage(
    requestParameters: DeleteSmsMessageRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.deleteSmsMessageRaw(requestParameters, initOverrides);
  }

  /**
   * Delete all SMS messages or all messages for a given phone number
   * Delete all SMS messages
   */
  async deleteSmsMessagesRaw(
    requestParameters: DeleteSmsMessagesRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    if (requestParameters.phoneNumberId !== undefined) {
      queryParameters['phoneNumberId'] = requestParameters.phoneNumberId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sms`,
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete all SMS messages or all messages for a given phone number
   * Delete all SMS messages
   */
  async deleteSmsMessages(
    requestParameters: DeleteSmsMessagesRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.deleteSmsMessagesRaw(requestParameters, initOverrides);
  }

  /**
   * Returns a SMS summary object with content.
   * Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.
   */
  async getSmsMessageRaw(
    requestParameters: GetSmsMessageRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<SmsMessage>> {
    if (
      requestParameters.smsId === null ||
      requestParameters.smsId === undefined
    ) {
      throw new runtime.RequiredError(
        'smsId',
        'Required parameter requestParameters.smsId was null or undefined when calling getSmsMessage.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sms/{smsId}`.replace(
          `{${'smsId'}}`,
          encodeURIComponent(String(requestParameters.smsId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SmsMessageFromJSON(jsonValue)
    );
  }

  /**
   * Returns a SMS summary object with content.
   * Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.
   */
  async getSmsMessage(
    requestParameters: GetSmsMessageRequest,
    initOverrides?: RequestInit
  ): Promise<SmsMessage> {
    const response = await this.getSmsMessageRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
   * Get all SMS messages in all phone numbers in paginated form. .
   */
  async getSmsMessagesPaginatedRaw(
    requestParameters: GetSmsMessagesPaginatedRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageSmsProjection>> {
    const queryParameters: any = {};

    if (requestParameters.phoneNumber !== undefined) {
      queryParameters['phoneNumber'] = requestParameters.phoneNumber;
    }

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.size !== undefined) {
      queryParameters['size'] = requestParameters.size;
    }

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.unreadOnly !== undefined) {
      queryParameters['unreadOnly'] = requestParameters.unreadOnly;
    }

    if (requestParameters.since !== undefined) {
      queryParameters['since'] = (requestParameters.since as any).toISOString();
    }

    if (requestParameters.before !== undefined) {
      queryParameters['before'] = (
        requestParameters.before as any
      ).toISOString();
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sms`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageSmsProjectionFromJSON(jsonValue)
    );
  }

  /**
   * By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
   * Get all SMS messages in all phone numbers in paginated form. .
   */
  async getSmsMessagesPaginated(
    requestParameters: GetSmsMessagesPaginatedRequest,
    initOverrides?: RequestInit
  ): Promise<PageSmsProjection> {
    const response = await this.getSmsMessagesPaginatedRaw(
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
export enum GetSmsMessagesPaginatedSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
