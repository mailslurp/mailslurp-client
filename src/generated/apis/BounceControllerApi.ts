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
  AccountBounceBlockDto,
  AccountBounceBlockDtoFromJSON,
  AccountBounceBlockDtoToJSON,
  BouncedEmailDto,
  BouncedEmailDtoFromJSON,
  BouncedEmailDtoToJSON,
  BouncedRecipientDto,
  BouncedRecipientDtoFromJSON,
  BouncedRecipientDtoToJSON,
  Complaint,
  ComplaintFromJSON,
  ComplaintToJSON,
  FilterBouncedRecipientsOptions,
  FilterBouncedRecipientsOptionsFromJSON,
  FilterBouncedRecipientsOptionsToJSON,
  FilterBouncedRecipientsResult,
  FilterBouncedRecipientsResultFromJSON,
  FilterBouncedRecipientsResultToJSON,
  PageBouncedEmail,
  PageBouncedEmailFromJSON,
  PageBouncedEmailToJSON,
  PageBouncedRecipients,
  PageBouncedRecipientsFromJSON,
  PageBouncedRecipientsToJSON,
  PageComplaint,
  PageComplaintFromJSON,
  PageComplaintToJSON,
  PageListUnsubscribeRecipients,
  PageListUnsubscribeRecipientsFromJSON,
  PageListUnsubscribeRecipientsToJSON,
} from '../models';

export interface FilterBouncedRecipientRequest {
  filterBouncedRecipientsOptions: FilterBouncedRecipientsOptions;
}

export interface GetBouncedEmailRequest {
  id: string;
}

export interface GetBouncedEmailsRequest {
  page?: number;
  size?: number;
  sort?: GetBouncedEmailsSortEnum;
  since?: Date;
  before?: Date;
}

export interface GetBouncedRecipientRequest {
  id: string;
}

export interface GetBouncedRecipientsRequest {
  page?: number;
  size?: number;
  sort?: GetBouncedRecipientsSortEnum;
  since?: Date;
  before?: Date;
}

export interface GetComplaintRequest {
  id: string;
}

export interface GetComplaintsRequest {
  page?: number;
  size?: number;
  sort?: GetComplaintsSortEnum;
  since?: Date;
  before?: Date;
}

export interface GetListUnsubscribeRecipientsRequest {
  page?: number;
  size?: number;
  sort?: GetListUnsubscribeRecipientsSortEnum;
  domainId?: string;
}

/**
 *
 */
export class BounceControllerApi extends runtime.BaseAPI {
  /**
   * Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
   * Filter a list of email recipients and remove those who have bounced
   */
  async filterBouncedRecipientRaw(
    requestParameters: FilterBouncedRecipientRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<FilterBouncedRecipientsResult>> {
    if (
      requestParameters.filterBouncedRecipientsOptions === null ||
      requestParameters.filterBouncedRecipientsOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'filterBouncedRecipientsOptions',
        'Required parameter requestParameters.filterBouncedRecipientsOptions was null or undefined when calling filterBouncedRecipient.'
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
        path: `/bounce/filter-recipients`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: FilterBouncedRecipientsOptionsToJSON(
          requestParameters.filterBouncedRecipientsOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      FilterBouncedRecipientsResultFromJSON(jsonValue)
    );
  }

  /**
   * Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
   * Filter a list of email recipients and remove those who have bounced
   */
  async filterBouncedRecipient(
    requestParameters: FilterBouncedRecipientRequest,
    initOverrides?: RequestInit
  ): Promise<FilterBouncedRecipientsResult> {
    const response = await this.filterBouncedRecipientRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Check if account block status prevents sending
   * Can account send email
   */
  async getAccountBounceBlockStatusRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<AccountBounceBlockDto>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/bounce/account-block`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AccountBounceBlockDtoFromJSON(jsonValue)
    );
  }

  /**
   * Check if account block status prevents sending
   * Can account send email
   */
  async getAccountBounceBlockStatus(
    initOverrides?: RequestInit
  ): Promise<AccountBounceBlockDto> {
    const response = await this.getAccountBounceBlockStatusRaw(initOverrides);
    return await response.value();
  }

  /**
   * Bounced emails are email you have sent that were rejected by a recipient
   * Get a bounced email.
   */
  async getBouncedEmailRaw(
    requestParameters: GetBouncedEmailRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<BouncedEmailDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getBouncedEmail.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/bounce/emails/{id}`.replace(
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
      BouncedEmailDtoFromJSON(jsonValue)
    );
  }

  /**
   * Bounced emails are email you have sent that were rejected by a recipient
   * Get a bounced email.
   */
  async getBouncedEmail(
    requestParameters: GetBouncedEmailRequest,
    initOverrides?: RequestInit
  ): Promise<BouncedEmailDto> {
    const response = await this.getBouncedEmailRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Bounced emails are email you have sent that were rejected by a recipient
   * Get paginated list of bounced emails.
   */
  async getBouncedEmailsRaw(
    requestParameters: GetBouncedEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageBouncedEmail>> {
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

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/bounce/emails`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageBouncedEmailFromJSON(jsonValue)
    );
  }

  /**
   * Bounced emails are email you have sent that were rejected by a recipient
   * Get paginated list of bounced emails.
   */
  async getBouncedEmails(
    requestParameters: GetBouncedEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<PageBouncedEmail> {
    const response = await this.getBouncedEmailsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Bounced emails are email you have sent that were rejected by a recipient
   * Get a bounced email.
   */
  async getBouncedRecipientRaw(
    requestParameters: GetBouncedRecipientRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<BouncedRecipientDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getBouncedRecipient.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/bounce/recipients/{id}`.replace(
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
      BouncedRecipientDtoFromJSON(jsonValue)
    );
  }

  /**
   * Bounced emails are email you have sent that were rejected by a recipient
   * Get a bounced email.
   */
  async getBouncedRecipient(
    requestParameters: GetBouncedRecipientRequest,
    initOverrides?: RequestInit
  ): Promise<BouncedRecipientDto> {
    const response = await this.getBouncedRecipientRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
   * Get paginated list of bounced recipients.
   */
  async getBouncedRecipientsRaw(
    requestParameters: GetBouncedRecipientsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageBouncedRecipients>> {
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

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/bounce/recipients`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageBouncedRecipientsFromJSON(jsonValue)
    );
  }

  /**
   * Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
   * Get paginated list of bounced recipients.
   */
  async getBouncedRecipients(
    requestParameters: GetBouncedRecipientsRequest,
    initOverrides?: RequestInit
  ): Promise<PageBouncedRecipients> {
    const response = await this.getBouncedRecipientsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get complaint
   * Get complaint
   */
  async getComplaintRaw(
    requestParameters: GetComplaintRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Complaint>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getComplaint.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/bounce/complaints/{id}`.replace(
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
      ComplaintFromJSON(jsonValue)
    );
  }

  /**
   * Get complaint
   * Get complaint
   */
  async getComplaint(
    requestParameters: GetComplaintRequest,
    initOverrides?: RequestInit
  ): Promise<Complaint> {
    const response = await this.getComplaintRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * SMTP complaints made against your account
   * Get paginated list of complaints.
   */
  async getComplaintsRaw(
    requestParameters: GetComplaintsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageComplaint>> {
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

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/bounce/complaints`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageComplaintFromJSON(jsonValue)
    );
  }

  /**
   * SMTP complaints made against your account
   * Get paginated list of complaints.
   */
  async getComplaints(
    requestParameters: GetComplaintsRequest,
    initOverrides?: RequestInit
  ): Promise<PageComplaint> {
    const response = await this.getComplaintsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Unsubscribed recipient have unsubscribed from a mailing list for a user or domain and cannot be contacted again.
   * Get paginated list of unsubscribed recipients.
   */
  async getListUnsubscribeRecipientsRaw(
    requestParameters: GetListUnsubscribeRecipientsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageListUnsubscribeRecipients>> {
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

    if (requestParameters.domainId !== undefined) {
      queryParameters['domainId'] = requestParameters.domainId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/bounce/list-unsubscribe-recipients`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageListUnsubscribeRecipientsFromJSON(jsonValue)
    );
  }

  /**
   * Unsubscribed recipient have unsubscribed from a mailing list for a user or domain and cannot be contacted again.
   * Get paginated list of unsubscribed recipients.
   */
  async getListUnsubscribeRecipients(
    requestParameters: GetListUnsubscribeRecipientsRequest,
    initOverrides?: RequestInit
  ): Promise<PageListUnsubscribeRecipients> {
    const response = await this.getListUnsubscribeRecipientsRaw(
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
export enum GetBouncedEmailsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetBouncedRecipientsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetComplaintsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetListUnsubscribeRecipientsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
