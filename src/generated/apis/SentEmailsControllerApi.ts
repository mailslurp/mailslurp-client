/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
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
  EmailPreviewUrls,
  EmailPreviewUrlsFromJSON,
  EmailPreviewUrlsToJSON,
  PageSentEmailProjection,
  PageSentEmailProjectionFromJSON,
  PageSentEmailProjectionToJSON,
  PageTrackingPixelProjection,
  PageTrackingPixelProjectionFromJSON,
  PageTrackingPixelProjectionToJSON,
  RawEmailJson,
  RawEmailJsonFromJSON,
  RawEmailJsonToJSON,
  SentEmailDto,
  SentEmailDtoFromJSON,
  SentEmailDtoToJSON,
} from '../models';

export interface DeleteSentEmailRequest {
  id: string;
}

export interface GetAllSentTrackingPixelsRequest {
  page?: number;
  size?: number;
  sort?: GetAllSentTrackingPixelsSortEnum;
  searchFilter?: string;
  since?: Date;
  before?: Date;
}

export interface GetRawSentEmailContentsRequest {
  emailId: string;
}

export interface GetRawSentEmailJsonRequest {
  emailId: string;
}

export interface GetSentEmailRequest {
  id: string;
}

export interface GetSentEmailHTMLContentRequest {
  id: string;
}

export interface GetSentEmailPreviewURLsRequest {
  id: string;
}

export interface GetSentEmailTrackingPixelsRequest {
  id: string;
  page?: number;
  size?: number;
  sort?: GetSentEmailTrackingPixelsSortEnum;
  searchFilter?: string;
  since?: Date;
  before?: Date;
}

export interface GetSentEmailsRequest {
  inboxId?: string;
  page?: number;
  size?: number;
  sort?: GetSentEmailsSortEnum;
  searchFilter?: string;
  since?: Date;
  before?: Date;
}

export interface GetSentOrganizationEmailsRequest {
  inboxId?: string;
  page?: number;
  size?: number;
  sort?: GetSentOrganizationEmailsSortEnum;
  searchFilter?: string;
  since?: Date;
  before?: Date;
}

/**
 *
 */
export class SentEmailsControllerApi extends runtime.BaseAPI {
  /**
   * Delete all sent email receipts
   */
  async deleteAllSentEmailsRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sent`,
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete all sent email receipts
   */
  async deleteAllSentEmails(initOverrides?: RequestInit): Promise<void> {
    await this.deleteAllSentEmailsRaw(initOverrides);
  }

  /**
   * Delete sent email receipt
   */
  async deleteSentEmailRaw(
    requestParameters: DeleteSentEmailRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling deleteSentEmail.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sent/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
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
   * Delete sent email receipt
   */
  async deleteSentEmail(
    requestParameters: DeleteSentEmailRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.deleteSentEmailRaw(requestParameters, initOverrides);
  }

  /**
   * Get all sent email tracking pixels in paginated form
   */
  async getAllSentTrackingPixelsRaw(
    requestParameters: GetAllSentTrackingPixelsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageTrackingPixelProjection>> {
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

    if (requestParameters.searchFilter !== undefined) {
      queryParameters['searchFilter'] = requestParameters.searchFilter;
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
        path: `/sent/tracking-pixels`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageTrackingPixelProjectionFromJSON(jsonValue)
    );
  }

  /**
   * Get all sent email tracking pixels in paginated form
   */
  async getAllSentTrackingPixels(
    requestParameters: GetAllSentTrackingPixelsRequest,
    initOverrides?: RequestInit
  ): Promise<PageTrackingPixelProjection> {
    const response = await this.getAllSentTrackingPixelsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
   * Get raw sent email string. Returns unparsed raw SMTP message with headers and body.
   */
  async getRawSentEmailContentsRaw(
    requestParameters: GetRawSentEmailContentsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.emailId === null ||
      requestParameters.emailId === undefined
    ) {
      throw new runtime.RequiredError(
        'emailId',
        'Required parameter requestParameters.emailId was null or undefined when calling getRawSentEmailContents.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sent/{emailId}/raw`.replace(
          `{${'emailId'}}`,
          encodeURIComponent(String(requestParameters.emailId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.TextApiResponse(response) as any;
  }

  /**
   * Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
   * Get raw sent email string. Returns unparsed raw SMTP message with headers and body.
   */
  async getRawSentEmailContents(
    requestParameters: GetRawSentEmailContentsRequest,
    initOverrides?: RequestInit
  ): Promise<string> {
    const response = await this.getRawSentEmailContentsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
   * Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.
   */
  async getRawSentEmailJsonRaw(
    requestParameters: GetRawSentEmailJsonRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<RawEmailJson>> {
    if (
      requestParameters.emailId === null ||
      requestParameters.emailId === undefined
    ) {
      throw new runtime.RequiredError(
        'emailId',
        'Required parameter requestParameters.emailId was null or undefined when calling getRawSentEmailJson.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sent/{emailId}/raw/json`.replace(
          `{${'emailId'}}`,
          encodeURIComponent(String(requestParameters.emailId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      RawEmailJsonFromJSON(jsonValue)
    );
  }

  /**
   * Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
   * Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.
   */
  async getRawSentEmailJson(
    requestParameters: GetRawSentEmailJsonRequest,
    initOverrides?: RequestInit
  ): Promise<RawEmailJson> {
    const response = await this.getRawSentEmailJsonRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get sent email receipt
   */
  async getSentEmailRaw(
    requestParameters: GetSentEmailRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<SentEmailDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getSentEmail.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sent/{id}`.replace(
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
      SentEmailDtoFromJSON(jsonValue)
    );
  }

  /**
   * Get sent email receipt
   */
  async getSentEmail(
    requestParameters: GetSentEmailRequest,
    initOverrides?: RequestInit
  ): Promise<SentEmailDto> {
    const response = await this.getSentEmailRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get sent email HTML content
   */
  async getSentEmailHTMLContentRaw(
    requestParameters: GetSentEmailHTMLContentRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getSentEmailHTMLContent.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sent/{id}/html`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.TextApiResponse(response) as any;
  }

  /**
   * Get sent email HTML content
   */
  async getSentEmailHTMLContent(
    requestParameters: GetSentEmailHTMLContentRequest,
    initOverrides?: RequestInit
  ): Promise<string> {
    const response = await this.getSentEmailHTMLContentRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
   * Get sent email URL for viewing in browser or downloading
   */
  async getSentEmailPreviewURLsRaw(
    requestParameters: GetSentEmailPreviewURLsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<EmailPreviewUrls>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getSentEmailPreviewURLs.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sent/{id}/urls`.replace(
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
      EmailPreviewUrlsFromJSON(jsonValue)
    );
  }

  /**
   * Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
   * Get sent email URL for viewing in browser or downloading
   */
  async getSentEmailPreviewURLs(
    requestParameters: GetSentEmailPreviewURLsRequest,
    initOverrides?: RequestInit
  ): Promise<EmailPreviewUrls> {
    const response = await this.getSentEmailPreviewURLsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get all tracking pixels for a sent email in paginated form
   */
  async getSentEmailTrackingPixelsRaw(
    requestParameters: GetSentEmailTrackingPixelsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageTrackingPixelProjection>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getSentEmailTrackingPixels.'
      );
    }

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

    if (requestParameters.searchFilter !== undefined) {
      queryParameters['searchFilter'] = requestParameters.searchFilter;
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
        path: `/sent/{id}/tracking-pixels`.replace(
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
      PageTrackingPixelProjectionFromJSON(jsonValue)
    );
  }

  /**
   * Get all tracking pixels for a sent email in paginated form
   */
  async getSentEmailTrackingPixels(
    requestParameters: GetSentEmailTrackingPixelsRequest,
    initOverrides?: RequestInit
  ): Promise<PageTrackingPixelProjection> {
    const response = await this.getSentEmailTrackingPixelsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get all sent emails in paginated form
   */
  async getSentEmailsRaw(
    requestParameters: GetSentEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageSentEmailProjection>> {
    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
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

    if (requestParameters.searchFilter !== undefined) {
      queryParameters['searchFilter'] = requestParameters.searchFilter;
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
        path: `/sent`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageSentEmailProjectionFromJSON(jsonValue)
    );
  }

  /**
   * Get all sent emails in paginated form
   */
  async getSentEmails(
    requestParameters: GetSentEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<PageSentEmailProjection> {
    const response = await this.getSentEmailsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get all sent organization emails in paginated form
   */
  async getSentOrganizationEmailsRaw(
    requestParameters: GetSentOrganizationEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageSentEmailProjection>> {
    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
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

    if (requestParameters.searchFilter !== undefined) {
      queryParameters['searchFilter'] = requestParameters.searchFilter;
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
        path: `/sent/organization`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageSentEmailProjectionFromJSON(jsonValue)
    );
  }

  /**
   * Get all sent organization emails in paginated form
   */
  async getSentOrganizationEmails(
    requestParameters: GetSentOrganizationEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<PageSentEmailProjection> {
    const response = await this.getSentOrganizationEmailsRaw(
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
export enum GetAllSentTrackingPixelsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetSentEmailTrackingPixelsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetSentEmailsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetSentOrganizationEmailsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
