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
  CreateInboxRulesetOptions,
  CreateInboxRulesetOptionsFromJSON,
  CreateInboxRulesetOptionsToJSON,
  InboxRulesetDto,
  InboxRulesetDtoFromJSON,
  InboxRulesetDtoToJSON,
  InboxRulesetTestOptions,
  InboxRulesetTestOptionsFromJSON,
  InboxRulesetTestOptionsToJSON,
  InboxRulesetTestResult,
  InboxRulesetTestResultFromJSON,
  InboxRulesetTestResultToJSON,
  PageInboxRulesetDto,
  PageInboxRulesetDtoFromJSON,
  PageInboxRulesetDtoToJSON,
  TestNewInboxRulesetOptions,
  TestNewInboxRulesetOptionsFromJSON,
  TestNewInboxRulesetOptionsToJSON,
} from '../models';

export interface CreateNewInboxRulesetRequest {
  createInboxRulesetOptions: CreateInboxRulesetOptions;
  inboxId?: string;
}

export interface DeleteInboxRulesetRequest {
  id: string;
}

export interface DeleteInboxRulesetsRequest {
  inboxId?: string;
}

export interface GetInboxRulesetRequest {
  id: string;
}

export interface GetInboxRulesetsRequest {
  inboxId?: string;
  page?: number;
  size?: number;
  sort?: GetInboxRulesetsSortEnum;
  searchFilter?: string;
  since?: Date;
  before?: Date;
}

export interface TestInboxRulesetRequest {
  id: string;
  inboxRulesetTestOptions: InboxRulesetTestOptions;
}

export interface TestInboxRulesetsForInboxRequest {
  inboxId: string;
  inboxRulesetTestOptions: InboxRulesetTestOptions;
}

export interface TestNewInboxRulesetRequest {
  testNewInboxRulesetOptions: TestNewInboxRulesetOptions;
}

/**
 *
 */
export class InboxRulesetControllerApi extends runtime.BaseAPI {
  /**
   * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
   * Create an inbox ruleset
   */
  async createNewInboxRulesetRaw(
    requestParameters: CreateNewInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxRulesetDto>> {
    if (
      requestParameters.createInboxRulesetOptions === null ||
      requestParameters.createInboxRulesetOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'createInboxRulesetOptions',
        'Required parameter requestParameters.createInboxRulesetOptions was null or undefined when calling createNewInboxRuleset.'
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
        path: `/rulesets`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateInboxRulesetOptionsToJSON(
          requestParameters.createInboxRulesetOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxRulesetDtoFromJSON(jsonValue)
    );
  }

  /**
   * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
   * Create an inbox ruleset
   */
  async createNewInboxRuleset(
    requestParameters: CreateNewInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<InboxRulesetDto> {
    const response = await this.createNewInboxRulesetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Delete inbox ruleset
   * Delete an inbox ruleset
   */
  async deleteInboxRulesetRaw(
    requestParameters: DeleteInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling deleteInboxRuleset.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/rulesets/{id}`.replace(
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
   * Delete inbox ruleset
   * Delete an inbox ruleset
   */
  async deleteInboxRuleset(
    requestParameters: DeleteInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.deleteInboxRulesetRaw(requestParameters, initOverrides);
  }

  /**
   * Delete inbox rulesets. Accepts optional inboxId filter.
   * Delete inbox rulesets
   */
  async deleteInboxRulesetsRaw(
    requestParameters: DeleteInboxRulesetsRequest,
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
        path: `/rulesets`,
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete inbox rulesets. Accepts optional inboxId filter.
   * Delete inbox rulesets
   */
  async deleteInboxRulesets(
    requestParameters: DeleteInboxRulesetsRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.deleteInboxRulesetsRaw(requestParameters, initOverrides);
  }

  /**
   * Get inbox ruleset
   * Get an inbox ruleset
   */
  async getInboxRulesetRaw(
    requestParameters: GetInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxRulesetDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getInboxRuleset.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/rulesets/{id}`.replace(
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
      InboxRulesetDtoFromJSON(jsonValue)
    );
  }

  /**
   * Get inbox ruleset
   * Get an inbox ruleset
   */
  async getInboxRuleset(
    requestParameters: GetInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<InboxRulesetDto> {
    const response = await this.getInboxRulesetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * List all rulesets attached to an inbox
   * List inbox rulesets
   */
  async getInboxRulesetsRaw(
    requestParameters: GetInboxRulesetsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PageInboxRulesetDto>> {
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
        path: `/rulesets`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PageInboxRulesetDtoFromJSON(jsonValue)
    );
  }

  /**
   * List all rulesets attached to an inbox
   * List inbox rulesets
   */
  async getInboxRulesets(
    requestParameters: GetInboxRulesetsRequest,
    initOverrides?: RequestInit
  ): Promise<PageInboxRulesetDto> {
    const response = await this.getInboxRulesetsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Test an inbox ruleset
   * Test an inbox ruleset
   */
  async testInboxRulesetRaw(
    requestParameters: TestInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxRulesetTestResult>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling testInboxRuleset.'
      );
    }

    if (
      requestParameters.inboxRulesetTestOptions === null ||
      requestParameters.inboxRulesetTestOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxRulesetTestOptions',
        'Required parameter requestParameters.inboxRulesetTestOptions was null or undefined when calling testInboxRuleset.'
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
        path: `/rulesets/{id}/test`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: InboxRulesetTestOptionsToJSON(
          requestParameters.inboxRulesetTestOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxRulesetTestResultFromJSON(jsonValue)
    );
  }

  /**
   * Test an inbox ruleset
   * Test an inbox ruleset
   */
  async testInboxRuleset(
    requestParameters: TestInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<InboxRulesetTestResult> {
    const response = await this.testInboxRulesetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Test inbox rulesets for inbox
   * Test inbox rulesets for inbox
   */
  async testInboxRulesetsForInboxRaw(
    requestParameters: TestInboxRulesetsForInboxRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxRulesetTestResult>> {
    if (
      requestParameters.inboxId === null ||
      requestParameters.inboxId === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxId',
        'Required parameter requestParameters.inboxId was null or undefined when calling testInboxRulesetsForInbox.'
      );
    }

    if (
      requestParameters.inboxRulesetTestOptions === null ||
      requestParameters.inboxRulesetTestOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxRulesetTestOptions',
        'Required parameter requestParameters.inboxRulesetTestOptions was null or undefined when calling testInboxRulesetsForInbox.'
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
        path: `/rulesets`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: InboxRulesetTestOptionsToJSON(
          requestParameters.inboxRulesetTestOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxRulesetTestResultFromJSON(jsonValue)
    );
  }

  /**
   * Test inbox rulesets for inbox
   * Test inbox rulesets for inbox
   */
  async testInboxRulesetsForInbox(
    requestParameters: TestInboxRulesetsForInboxRequest,
    initOverrides?: RequestInit
  ): Promise<InboxRulesetTestResult> {
    const response = await this.testInboxRulesetsForInboxRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Test new inbox ruleset
   * Test new inbox ruleset
   */
  async testNewInboxRulesetRaw(
    requestParameters: TestNewInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InboxRulesetTestResult>> {
    if (
      requestParameters.testNewInboxRulesetOptions === null ||
      requestParameters.testNewInboxRulesetOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'testNewInboxRulesetOptions',
        'Required parameter requestParameters.testNewInboxRulesetOptions was null or undefined when calling testNewInboxRuleset.'
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
        path: `/rulesets`,
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: TestNewInboxRulesetOptionsToJSON(
          requestParameters.testNewInboxRulesetOptions
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InboxRulesetTestResultFromJSON(jsonValue)
    );
  }

  /**
   * Test new inbox ruleset
   * Test new inbox ruleset
   */
  async testNewInboxRuleset(
    requestParameters: TestNewInboxRulesetRequest,
    initOverrides?: RequestInit
  ): Promise<InboxRulesetTestResult> {
    const response = await this.testNewInboxRulesetRaw(
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
export enum GetInboxRulesetsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
