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
  AliasDto,
  AliasDtoFromJSON,
  AliasDtoToJSON,
  CreateAliasOptions,
  CreateAliasOptionsFromJSON,
  CreateAliasOptionsToJSON,
  PageAlias,
  PageAliasFromJSON,
  PageAliasToJSON,
  PageEmailProjection,
  PageEmailProjectionFromJSON,
  PageEmailProjectionToJSON,
  PageThreadProjection,
  PageThreadProjectionFromJSON,
  PageThreadProjectionToJSON,
  ReplyToAliasEmailOptions,
  ReplyToAliasEmailOptionsFromJSON,
  ReplyToAliasEmailOptionsToJSON,
  SendEmailOptions,
  SendEmailOptionsFromJSON,
  SendEmailOptionsToJSON,
  SentEmailDto,
  SentEmailDtoFromJSON,
  SentEmailDtoToJSON,
  ThreadProjection,
  ThreadProjectionFromJSON,
  ThreadProjectionToJSON,
  UpdateAliasOptions,
  UpdateAliasOptionsFromJSON,
  UpdateAliasOptionsToJSON,
} from '../models';

export interface CreateAliasRequest {
  createAliasOptions: CreateAliasOptions;
}

export interface DeleteAliasRequest {
  aliasId: string;
}

export interface GetAliasRequest {
  aliasId: string;
}

export interface GetAliasEmailsRequest {
  aliasId: string;
  page?: number;
  size?: number;
  sort?: GetAliasEmailsSortEnum;
  since?: Date;
  before?: Date;
}

export interface GetAliasThreadsRequest {
  aliasId: string;
  page?: number;
  size?: number;
  sort?: GetAliasThreadsSortEnum;
  since?: Date;
  before?: Date;
}

export interface GetAliasesRequest {
  search?: string;
  page?: number;
  size?: number;
  sort?: GetAliasesSortEnum;
  since?: Date;
  before?: Date;
}

export interface GetThreadRequest {
  threadId: string;
}

export interface GetThreadsPaginatedRequest {
  page?: number;
  size?: number;
  sort?: GetThreadsPaginatedSortEnum;
  since?: Date;
  before?: Date;
}

export interface ReplyToAliasEmailRequest {
  aliasId: string;
  emailId: string;
  replyToAliasEmailOptions: ReplyToAliasEmailOptions;
}

export interface SendAliasEmailRequest {
  aliasId: string;
  sendEmailOptions: SendEmailOptions;
}

export interface UpdateAliasRequest {
  aliasId: string;
  updateAliasOptions: UpdateAliasOptions;
}

/**
 *
 */
export class AliasControllerApi extends runtime.BaseAPI {
  /**
   * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
   * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
   */
  async createAliasRaw(
    requestParameters: CreateAliasRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<AliasDto>> {
    if (
      requestParameters.createAliasOptions === null ||
      requestParameters.createAliasOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'createAliasOptions',
        'Required parameter requestParameters.createAliasOptions was null or undefined when calling createAlias.'
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
        path: `/aliases`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateAliasOptionsToJSON(requestParameters.createAliasOptions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AliasDtoFromJSON(jsonValue)
    );
  }

  /**
   * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
   * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
   */
  async createAlias(
    requestParameters: CreateAliasRequest,
    initOverrides?: RequestInit
  ): Promise<AliasDto> {
    const response = await this.createAliasRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Delete an email alias
   */
  async deleteAliasRaw(
    requestParameters: DeleteAliasRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.aliasId === null ||
      requestParameters.aliasId === undefined
    ) {
      throw new runtime.RequiredError(
        'aliasId',
        'Required parameter requestParameters.aliasId was null or undefined when calling deleteAlias.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/aliases/{aliasId}`.replace(
          `{${'aliasId'}}`,
          encodeURIComponent(String(requestParameters.aliasId))
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
   * Delete an email alias
   */
  async deleteAlias(
    requestParameters: DeleteAliasRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.deleteAliasRaw(requestParameters, initOverrides);
  }

  /**
   * Get an email alias by ID
   * Get an email alias
   */
  async getAliasRaw(
    requestParameters: GetAliasRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<AliasDto>> {
    if (
      requestParameters.aliasId === null ||
      requestParameters.aliasId === undefined
    ) {
      throw new runtime.RequiredError(
        'aliasId',
        'Required parameter requestParameters.aliasId was null or undefined when calling getAlias.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/aliases/{aliasId}`.replace(
          `{${'aliasId'}}`,
          encodeURIComponent(String(requestParameters.aliasId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AliasDtoFromJSON(jsonValue)
    );
  }

  /**
   * Get an email alias by ID
   * Get an email alias
   */
  async getAlias(
    requestParameters: GetAliasRequest,
    initOverrides?: RequestInit
  ): Promise<AliasDto> {
    const response = await this.getAliasRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get paginated emails for an alias by ID
   * Get emails for an alias
   */
  async getAliasEmailsRaw(
    requestParameters: GetAliasEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageEmailProjection>> {
    if (
      requestParameters.aliasId === null ||
      requestParameters.aliasId === undefined
    ) {
      throw new runtime.RequiredError(
        'aliasId',
        'Required parameter requestParameters.aliasId was null or undefined when calling getAliasEmails.'
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
        path: `/aliases/{aliasId}/emails`.replace(
          `{${'aliasId'}}`,
          encodeURIComponent(String(requestParameters.aliasId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageEmailProjectionFromJSON(jsonValue)
    );
  }

  /**
   * Get paginated emails for an alias by ID
   * Get emails for an alias
   */
  async getAliasEmails(
    requestParameters: GetAliasEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<PageEmailProjection> {
    const response = await this.getAliasEmailsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns threads created for an email alias in paginated form
   * Get threads created for an alias
   */
  async getAliasThreadsRaw(
    requestParameters: GetAliasThreadsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageThreadProjection>> {
    if (
      requestParameters.aliasId === null ||
      requestParameters.aliasId === undefined
    ) {
      throw new runtime.RequiredError(
        'aliasId',
        'Required parameter requestParameters.aliasId was null or undefined when calling getAliasThreads.'
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
        path: `/aliases/{aliasId}/threads`.replace(
          `{${'aliasId'}}`,
          encodeURIComponent(String(requestParameters.aliasId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageThreadProjectionFromJSON(jsonValue)
    );
  }

  /**
   * Returns threads created for an email alias in paginated form
   * Get threads created for an alias
   */
  async getAliasThreads(
    requestParameters: GetAliasThreadsRequest,
    initOverrides?: RequestInit
  ): Promise<PageThreadProjection> {
    const response = await this.getAliasThreadsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get all email aliases in paginated form
   * Get all email aliases you have created
   */
  async getAliasesRaw(
    requestParameters: GetAliasesRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageAlias>> {
    const queryParameters: any = {};

    if (requestParameters.search !== undefined) {
      queryParameters['search'] = requestParameters.search;
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
        path: `/aliases`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageAliasFromJSON(jsonValue)
    );
  }

  /**
   * Get all email aliases in paginated form
   * Get all email aliases you have created
   */
  async getAliases(
    requestParameters: GetAliasesRequest,
    initOverrides?: RequestInit
  ): Promise<PageAlias> {
    const response = await this.getAliasesRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Return a thread associated with an alias
   * Get a thread
   */
  async getThreadRaw(
    requestParameters: GetThreadRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ThreadProjection>> {
    if (
      requestParameters.threadId === null ||
      requestParameters.threadId === undefined
    ) {
      throw new runtime.RequiredError(
        'threadId',
        'Required parameter requestParameters.threadId was null or undefined when calling getThread.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/aliases/threads/{threadId}`.replace(
          `{${'threadId'}}`,
          encodeURIComponent(String(requestParameters.threadId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ThreadProjectionFromJSON(jsonValue)
    );
  }

  /**
   * Return a thread associated with an alias
   * Get a thread
   */
  async getThread(
    requestParameters: GetThreadRequest,
    initOverrides?: RequestInit
  ): Promise<ThreadProjection> {
    const response = await this.getThreadRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Returns threads created for all aliases in paginated form
   * Get all threads
   */
  async getThreadsPaginatedRaw(
    requestParameters: GetThreadsPaginatedRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageThreadProjection>> {
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
        path: `/aliases/threads`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageThreadProjectionFromJSON(jsonValue)
    );
  }

  /**
   * Returns threads created for all aliases in paginated form
   * Get all threads
   */
  async getThreadsPaginated(
    requestParameters: GetThreadsPaginatedRequest,
    initOverrides?: RequestInit
  ): Promise<PageThreadProjection> {
    const response = await this.getThreadsPaginatedRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
   * Reply to an email
   */
  async replyToAliasEmailRaw(
    requestParameters: ReplyToAliasEmailRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<SentEmailDto>> {
    if (
      requestParameters.aliasId === null ||
      requestParameters.aliasId === undefined
    ) {
      throw new runtime.RequiredError(
        'aliasId',
        'Required parameter requestParameters.aliasId was null or undefined when calling replyToAliasEmail.'
      );
    }

    if (
      requestParameters.emailId === null ||
      requestParameters.emailId === undefined
    ) {
      throw new runtime.RequiredError(
        'emailId',
        'Required parameter requestParameters.emailId was null or undefined when calling replyToAliasEmail.'
      );
    }

    if (
      requestParameters.replyToAliasEmailOptions === null ||
      requestParameters.replyToAliasEmailOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'replyToAliasEmailOptions',
        'Required parameter requestParameters.replyToAliasEmailOptions was null or undefined when calling replyToAliasEmail.'
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
        path: `/aliases/{aliasId}/emails/{emailId}`
          .replace(
            `{${'aliasId'}}`,
            encodeURIComponent(String(requestParameters.aliasId))
          )
          .replace(
            `{${'emailId'}}`,
            encodeURIComponent(String(requestParameters.emailId))
          ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: ReplyToAliasEmailOptionsToJSON(
          requestParameters.replyToAliasEmailOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SentEmailDtoFromJSON(jsonValue)
    );
  }

  /**
   * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
   * Reply to an email
   */
  async replyToAliasEmail(
    requestParameters: ReplyToAliasEmailRequest,
    initOverrides?: RequestInit
  ): Promise<SentEmailDto> {
    const response = await this.replyToAliasEmailRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
   * Send an email from an alias inbox
   */
  async sendAliasEmailRaw(
    requestParameters: SendAliasEmailRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<SentEmailDto>> {
    if (
      requestParameters.aliasId === null ||
      requestParameters.aliasId === undefined
    ) {
      throw new runtime.RequiredError(
        'aliasId',
        'Required parameter requestParameters.aliasId was null or undefined when calling sendAliasEmail.'
      );
    }

    if (
      requestParameters.sendEmailOptions === null ||
      requestParameters.sendEmailOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'sendEmailOptions',
        'Required parameter requestParameters.sendEmailOptions was null or undefined when calling sendAliasEmail.'
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
        path: `/aliases/{aliasId}/emails`.replace(
          `{${'aliasId'}}`,
          encodeURIComponent(String(requestParameters.aliasId))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: SendEmailOptionsToJSON(requestParameters.sendEmailOptions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SentEmailDtoFromJSON(jsonValue)
    );
  }

  /**
   * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
   * Send an email from an alias inbox
   */
  async sendAliasEmail(
    requestParameters: SendAliasEmailRequest,
    initOverrides?: RequestInit
  ): Promise<SentEmailDto> {
    const response = await this.sendAliasEmailRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Update an email alias
   */
  async updateAliasRaw(
    requestParameters: UpdateAliasRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<AliasDto>> {
    if (
      requestParameters.aliasId === null ||
      requestParameters.aliasId === undefined
    ) {
      throw new runtime.RequiredError(
        'aliasId',
        'Required parameter requestParameters.aliasId was null or undefined when calling updateAlias.'
      );
    }

    if (
      requestParameters.updateAliasOptions === null ||
      requestParameters.updateAliasOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'updateAliasOptions',
        'Required parameter requestParameters.updateAliasOptions was null or undefined when calling updateAlias.'
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
        path: `/aliases/{aliasId}`.replace(
          `{${'aliasId'}}`,
          encodeURIComponent(String(requestParameters.aliasId))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateAliasOptionsToJSON(requestParameters.updateAliasOptions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AliasDtoFromJSON(jsonValue)
    );
  }

  /**
   * Update an email alias
   */
  async updateAlias(
    requestParameters: UpdateAliasRequest,
    initOverrides?: RequestInit
  ): Promise<AliasDto> {
    const response = await this.updateAliasRaw(
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
export enum GetAliasEmailsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetAliasThreadsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetAliasesSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetThreadsPaginatedSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
