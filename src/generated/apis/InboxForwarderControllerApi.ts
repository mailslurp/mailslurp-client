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
  CreateInboxForwarderOptions,
  CreateInboxForwarderOptionsFromJSON,
  CreateInboxForwarderOptionsToJSON,
  InboxForwarderDto,
  InboxForwarderDtoFromJSON,
  InboxForwarderDtoToJSON,
  InboxForwarderEventDto,
  InboxForwarderEventDtoFromJSON,
  InboxForwarderEventDtoToJSON,
  InboxForwarderTestOptions,
  InboxForwarderTestOptionsFromJSON,
  InboxForwarderTestOptionsToJSON,
  InboxForwarderTestResult,
  InboxForwarderTestResultFromJSON,
  InboxForwarderTestResultToJSON,
  PageInboxForwarderDto,
  PageInboxForwarderDtoFromJSON,
  PageInboxForwarderDtoToJSON,
  PageInboxForwarderEvents,
  PageInboxForwarderEventsFromJSON,
  PageInboxForwarderEventsToJSON,
  TestNewInboxForwarderOptions,
  TestNewInboxForwarderOptionsFromJSON,
  TestNewInboxForwarderOptionsToJSON,
} from '../models';

export interface CreateNewInboxForwarderRequest {
  inboxId: string;
  createInboxForwarderOptions: CreateInboxForwarderOptions;
}

export interface DeleteInboxForwarderRequest {
  id: string;
}

export interface DeleteInboxForwardersRequest {
  inboxId?: string;
}

export interface GetAllInboxForwarderEventsRequest {
  page?: number;
  size?: number;
  inboxId?: string;
  sort?: GetAllInboxForwarderEventsSortEnum;
}

export interface GetForwarderEventRequest {
  eventId: string;
}

export interface GetInboxForwarderRequest {
  id: string;
}

export interface GetInboxForwarderEventRequest {
  id: string;
  eventId: string;
}

export interface GetInboxForwarderEventsRequest {
  id: string;
  page?: number;
  size?: number;
  sort?: GetInboxForwarderEventsSortEnum;
}

export interface GetInboxForwardersRequest {
  inboxId?: string;
  page?: number;
  size?: number;
  sort?: GetInboxForwardersSortEnum;
  searchFilter?: string;
  since?: Date;
  before?: Date;
}

export interface TestInboxForwarderRequest {
  id: string;
  inboxForwarderTestOptions: InboxForwarderTestOptions;
}

export interface TestInboxForwardersForInboxRequest {
  inboxId: string;
  inboxForwarderTestOptions: InboxForwarderTestOptions;
}

export interface TestNewInboxForwarderRequest {
  testNewInboxForwarderOptions: TestNewInboxForwarderOptions;
}

export interface UpdateInboxForwarderRequest {
  id: string;
  createInboxForwarderOptions: CreateInboxForwarderOptions;
}

/**
 *
 */
export class InboxForwarderControllerApi extends runtime.BaseAPI {
  /**
   * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
   * Create an inbox forwarder
   */
  async createNewInboxForwarderRaw(
    requestParameters: CreateNewInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxForwarderDto>> {
    if (
      requestParameters.inboxId === null ||
      requestParameters.inboxId === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxId',
        'Required parameter requestParameters.inboxId was null or undefined when calling createNewInboxForwarder.'
      );
    }

    if (
      requestParameters.createInboxForwarderOptions === null ||
      requestParameters.createInboxForwarderOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'createInboxForwarderOptions',
        'Required parameter requestParameters.createInboxForwarderOptions was null or undefined when calling createNewInboxForwarder.'
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
        path: `/forwarders`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateInboxForwarderOptionsToJSON(
          requestParameters.createInboxForwarderOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxForwarderDtoFromJSON(jsonValue)
    );
  }

  /**
   * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
   * Create an inbox forwarder
   */
  async createNewInboxForwarder(
    requestParameters: CreateNewInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<InboxForwarderDto> {
    const response = await this.createNewInboxForwarderRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Delete inbox forwarder
   * Delete an inbox forwarder
   */
  async deleteInboxForwarderRaw(
    requestParameters: DeleteInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling deleteInboxForwarder.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/forwarders/{id}`.replace(
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
   * Delete inbox forwarder
   * Delete an inbox forwarder
   */
  async deleteInboxForwarder(
    requestParameters: DeleteInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.deleteInboxForwarderRaw(requestParameters, initOverrides);
  }

  /**
   * Delete inbox forwarders. Accepts optional inboxId filter.
   * Delete inbox forwarders
   */
  async deleteInboxForwardersRaw(
    requestParameters: DeleteInboxForwardersRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/forwarders`,
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete inbox forwarders. Accepts optional inboxId filter.
   * Delete inbox forwarders
   */
  async deleteInboxForwarders(
    requestParameters: DeleteInboxForwardersRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.deleteInboxForwardersRaw(requestParameters, initOverrides);
  }

  /**
   * Get all inbox forwarder events
   * Get all inbox forwarder events
   */
  async getAllInboxForwarderEventsRaw(
    requestParameters: GetAllInboxForwarderEventsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageInboxForwarderEvents>> {
    const queryParameters: any = {};

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.size !== undefined) {
      queryParameters['size'] = requestParameters.size;
    }

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/forwarders/events`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageInboxForwarderEventsFromJSON(jsonValue)
    );
  }

  /**
   * Get all inbox forwarder events
   * Get all inbox forwarder events
   */
  async getAllInboxForwarderEvents(
    requestParameters: GetAllInboxForwarderEventsRequest,
    initOverrides?: RequestInit
  ): Promise<PageInboxForwarderEvents> {
    const response = await this.getAllInboxForwarderEventsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get forwarder event
   * Get a forwarder event
   */
  async getForwarderEventRaw(
    requestParameters: GetForwarderEventRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxForwarderEventDto>> {
    if (
      requestParameters.eventId === null ||
      requestParameters.eventId === undefined
    ) {
      throw new runtime.RequiredError(
        'eventId',
        'Required parameter requestParameters.eventId was null or undefined when calling getForwarderEvent.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/forwarders/events/{eventId}`.replace(
          `{${'eventId'}}`,
          encodeURIComponent(String(requestParameters.eventId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxForwarderEventDtoFromJSON(jsonValue)
    );
  }

  /**
   * Get forwarder event
   * Get a forwarder event
   */
  async getForwarderEvent(
    requestParameters: GetForwarderEventRequest,
    initOverrides?: RequestInit
  ): Promise<InboxForwarderEventDto> {
    const response = await this.getForwarderEventRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get inbox forwarder
   * Get an inbox forwarder
   */
  async getInboxForwarderRaw(
    requestParameters: GetInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxForwarderDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getInboxForwarder.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/forwarders/{id}`.replace(
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
      InboxForwarderDtoFromJSON(jsonValue)
    );
  }

  /**
   * Get inbox forwarder
   * Get an inbox forwarder
   */
  async getInboxForwarder(
    requestParameters: GetInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<InboxForwarderDto> {
    const response = await this.getInboxForwarderRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get inbox forwarder event
   * Get an inbox forwarder event
   */
  async getInboxForwarderEventRaw(
    requestParameters: GetInboxForwarderEventRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxForwarderEventDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getInboxForwarderEvent.'
      );
    }

    if (
      requestParameters.eventId === null ||
      requestParameters.eventId === undefined
    ) {
      throw new runtime.RequiredError(
        'eventId',
        'Required parameter requestParameters.eventId was null or undefined when calling getInboxForwarderEvent.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/forwarders/{id}/events/{eventId}`
          .replace(
            `{${'id'}}`,
            encodeURIComponent(String(requestParameters.id))
          )
          .replace(
            `{${'eventId'}}`,
            encodeURIComponent(String(requestParameters.eventId))
          ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxForwarderEventDtoFromJSON(jsonValue)
    );
  }

  /**
   * Get inbox forwarder event
   * Get an inbox forwarder event
   */
  async getInboxForwarderEvent(
    requestParameters: GetInboxForwarderEventRequest,
    initOverrides?: RequestInit
  ): Promise<InboxForwarderEventDto> {
    const response = await this.getInboxForwarderEventRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get inbox forwarder events
   * Get an inbox forwarder event list
   */
  async getInboxForwarderEventsRaw(
    requestParameters: GetInboxForwarderEventsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageInboxForwarderEvents>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getInboxForwarderEvents.'
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

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/forwarders/{id}/events`.replace(
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
      PageInboxForwarderEventsFromJSON(jsonValue)
    );
  }

  /**
   * Get inbox forwarder events
   * Get an inbox forwarder event list
   */
  async getInboxForwarderEvents(
    requestParameters: GetInboxForwarderEventsRequest,
    initOverrides?: RequestInit
  ): Promise<PageInboxForwarderEvents> {
    const response = await this.getInboxForwarderEventsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * List all forwarders attached to an inbox
   * List inbox forwarders
   */
  async getInboxForwardersRaw(
    requestParameters: GetInboxForwardersRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageInboxForwarderDto>> {
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
        path: `/forwarders`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageInboxForwarderDtoFromJSON(jsonValue)
    );
  }

  /**
   * List all forwarders attached to an inbox
   * List inbox forwarders
   */
  async getInboxForwarders(
    requestParameters: GetInboxForwardersRequest,
    initOverrides?: RequestInit
  ): Promise<PageInboxForwarderDto> {
    const response = await this.getInboxForwardersRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Test an inbox forwarder
   * Test an inbox forwarder
   */
  async testInboxForwarderRaw(
    requestParameters: TestInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxForwarderTestResult>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling testInboxForwarder.'
      );
    }

    if (
      requestParameters.inboxForwarderTestOptions === null ||
      requestParameters.inboxForwarderTestOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxForwarderTestOptions',
        'Required parameter requestParameters.inboxForwarderTestOptions was null or undefined when calling testInboxForwarder.'
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
        path: `/forwarders/{id}/test`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: InboxForwarderTestOptionsToJSON(
          requestParameters.inboxForwarderTestOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxForwarderTestResultFromJSON(jsonValue)
    );
  }

  /**
   * Test an inbox forwarder
   * Test an inbox forwarder
   */
  async testInboxForwarder(
    requestParameters: TestInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<InboxForwarderTestResult> {
    const response = await this.testInboxForwarderRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Test inbox forwarders for inbox
   * Test inbox forwarders for inbox
   */
  async testInboxForwardersForInboxRaw(
    requestParameters: TestInboxForwardersForInboxRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxForwarderTestResult>> {
    if (
      requestParameters.inboxId === null ||
      requestParameters.inboxId === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxId',
        'Required parameter requestParameters.inboxId was null or undefined when calling testInboxForwardersForInbox.'
      );
    }

    if (
      requestParameters.inboxForwarderTestOptions === null ||
      requestParameters.inboxForwarderTestOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxForwarderTestOptions',
        'Required parameter requestParameters.inboxForwarderTestOptions was null or undefined when calling testInboxForwardersForInbox.'
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
        path: `/forwarders`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: InboxForwarderTestOptionsToJSON(
          requestParameters.inboxForwarderTestOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxForwarderTestResultFromJSON(jsonValue)
    );
  }

  /**
   * Test inbox forwarders for inbox
   * Test inbox forwarders for inbox
   */
  async testInboxForwardersForInbox(
    requestParameters: TestInboxForwardersForInboxRequest,
    initOverrides?: RequestInit
  ): Promise<InboxForwarderTestResult> {
    const response = await this.testInboxForwardersForInboxRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Test new inbox forwarder
   * Test new inbox forwarder
   */
  async testNewInboxForwarderRaw(
    requestParameters: TestNewInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxForwarderTestResult>> {
    if (
      requestParameters.testNewInboxForwarderOptions === null ||
      requestParameters.testNewInboxForwarderOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'testNewInboxForwarderOptions',
        'Required parameter requestParameters.testNewInboxForwarderOptions was null or undefined when calling testNewInboxForwarder.'
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
        path: `/forwarders`,
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: TestNewInboxForwarderOptionsToJSON(
          requestParameters.testNewInboxForwarderOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxForwarderTestResultFromJSON(jsonValue)
    );
  }

  /**
   * Test new inbox forwarder
   * Test new inbox forwarder
   */
  async testNewInboxForwarder(
    requestParameters: TestNewInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<InboxForwarderTestResult> {
    const response = await this.testNewInboxForwarderRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Update inbox forwarder
   * Update an inbox forwarder
   */
  async updateInboxForwarderRaw(
    requestParameters: UpdateInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxForwarderDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling updateInboxForwarder.'
      );
    }

    if (
      requestParameters.createInboxForwarderOptions === null ||
      requestParameters.createInboxForwarderOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'createInboxForwarderOptions',
        'Required parameter requestParameters.createInboxForwarderOptions was null or undefined when calling updateInboxForwarder.'
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
        path: `/forwarders/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: CreateInboxForwarderOptionsToJSON(
          requestParameters.createInboxForwarderOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxForwarderDtoFromJSON(jsonValue)
    );
  }

  /**
   * Update inbox forwarder
   * Update an inbox forwarder
   */
  async updateInboxForwarder(
    requestParameters: UpdateInboxForwarderRequest,
    initOverrides?: RequestInit
  ): Promise<InboxForwarderDto> {
    const response = await this.updateInboxForwarderRaw(
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
export enum GetAllInboxForwarderEventsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetInboxForwarderEventsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum GetInboxForwardersSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
