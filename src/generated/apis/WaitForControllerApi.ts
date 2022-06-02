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
  Email,
  EmailFromJSON,
  EmailToJSON,
  EmailPreview,
  EmailPreviewFromJSON,
  EmailPreviewToJSON,
  MatchOptions,
  MatchOptionsFromJSON,
  MatchOptionsToJSON,
  WaitForConditions,
  WaitForConditionsFromJSON,
  WaitForConditionsToJSON,
} from '../models';

export interface WaitForRequest {
  waitForConditions: WaitForConditions;
}

export interface WaitForEmailCountRequest {
  inboxId: string;
  count: number;
  timeout?: number;
  unreadOnly?: boolean;
  before?: Date;
  since?: Date;
  sort?: WaitForEmailCountSortEnum;
  delay?: number;
}

export interface WaitForLatestEmailRequest {
  inboxId?: string;
  timeout?: number;
  unreadOnly?: boolean;
  before?: Date;
  since?: Date;
  sort?: WaitForLatestEmailSortEnum;
  delay?: number;
}

export interface WaitForMatchingEmailsRequest {
  inboxId: string;
  count: number;
  matchOptions: MatchOptions;
  before?: Date;
  since?: Date;
  sort?: WaitForMatchingEmailsSortEnum;
  delay?: number;
  timeout?: number;
  unreadOnly?: boolean;
}

export interface WaitForMatchingFirstEmailRequest {
  inboxId: string;
  matchOptions: MatchOptions;
  timeout?: number;
  unreadOnly?: boolean;
  since?: Date;
  before?: Date;
  sort?: WaitForMatchingFirstEmailSortEnum;
  delay?: number;
}

export interface WaitForNthEmailRequest {
  inboxId?: string;
  index?: number;
  timeout?: number;
  unreadOnly?: boolean;
  since?: Date;
  before?: Date;
  sort?: WaitForNthEmailSortEnum;
  delay?: number;
}

/**
 *
 */
export class WaitForControllerApi extends runtime.BaseAPI {
  /**
   * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
   * Wait for an email to match the provided filter conditions such as subject contains keyword.
   */
  async waitForRaw(
    requestParameters: WaitForRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<EmailPreview>>> {
    if (
      requestParameters.waitForConditions === null ||
      requestParameters.waitForConditions === undefined
    ) {
      throw new runtime.RequiredError(
        'waitForConditions',
        'Required parameter requestParameters.waitForConditions was null or undefined when calling waitFor.'
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
        path: `/waitFor`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: WaitForConditionsToJSON(requestParameters.waitForConditions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(EmailPreviewFromJSON)
    );
  }

  /**
   * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
   * Wait for an email to match the provided filter conditions such as subject contains keyword.
   */
  async waitFor(
    requestParameters: WaitForRequest,
    initOverrides?: RequestInit
  ): Promise<Array<EmailPreview>> {
    const response = await this.waitForRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
   * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
   */
  async waitForEmailCountRaw(
    requestParameters: WaitForEmailCountRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<EmailPreview>>> {
    if (
      requestParameters.inboxId === null ||
      requestParameters.inboxId === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxId',
        'Required parameter requestParameters.inboxId was null or undefined when calling waitForEmailCount.'
      );
    }

    if (
      requestParameters.count === null ||
      requestParameters.count === undefined
    ) {
      throw new runtime.RequiredError(
        'count',
        'Required parameter requestParameters.count was null or undefined when calling waitForEmailCount.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    if (requestParameters.count !== undefined) {
      queryParameters['count'] = requestParameters.count;
    }

    if (requestParameters.timeout !== undefined) {
      queryParameters['timeout'] = requestParameters.timeout;
    }

    if (requestParameters.unreadOnly !== undefined) {
      queryParameters['unreadOnly'] = requestParameters.unreadOnly;
    }

    if (requestParameters.before !== undefined) {
      queryParameters['before'] = (
        requestParameters.before as any
      ).toISOString();
    }

    if (requestParameters.since !== undefined) {
      queryParameters['since'] = (requestParameters.since as any).toISOString();
    }

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.delay !== undefined) {
      queryParameters['delay'] = requestParameters.delay;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/waitForEmailCount`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(EmailPreviewFromJSON)
    );
  }

  /**
   * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
   * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
   */
  async waitForEmailCount(
    requestParameters: WaitForEmailCountRequest,
    initOverrides?: RequestInit
  ): Promise<Array<EmailPreview>> {
    const response = await this.waitForEmailCountRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
   * Fetch inbox\'s latest email or if empty wait for an email to arrive
   */
  async waitForLatestEmailRaw(
    requestParameters: WaitForLatestEmailRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Email>> {
    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    if (requestParameters.timeout !== undefined) {
      queryParameters['timeout'] = requestParameters.timeout;
    }

    if (requestParameters.unreadOnly !== undefined) {
      queryParameters['unreadOnly'] = requestParameters.unreadOnly;
    }

    if (requestParameters.before !== undefined) {
      queryParameters['before'] = (
        requestParameters.before as any
      ).toISOString();
    }

    if (requestParameters.since !== undefined) {
      queryParameters['since'] = (requestParameters.since as any).toISOString();
    }

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.delay !== undefined) {
      queryParameters['delay'] = requestParameters.delay;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/waitForLatestEmail`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EmailFromJSON(jsonValue)
    );
  }

  /**
   * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
   * Fetch inbox\'s latest email or if empty wait for an email to arrive
   */
  async waitForLatestEmail(
    requestParameters: WaitForLatestEmailRequest,
    initOverrides?: RequestInit
  ): Promise<Email> {
    const response = await this.waitForLatestEmailRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
   * Wait or return list of emails that match simple matching patterns
   */
  async waitForMatchingEmailsRaw(
    requestParameters: WaitForMatchingEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<EmailPreview>>> {
    if (
      requestParameters.inboxId === null ||
      requestParameters.inboxId === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxId',
        'Required parameter requestParameters.inboxId was null or undefined when calling waitForMatchingEmails.'
      );
    }

    if (
      requestParameters.count === null ||
      requestParameters.count === undefined
    ) {
      throw new runtime.RequiredError(
        'count',
        'Required parameter requestParameters.count was null or undefined when calling waitForMatchingEmails.'
      );
    }

    if (
      requestParameters.matchOptions === null ||
      requestParameters.matchOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'matchOptions',
        'Required parameter requestParameters.matchOptions was null or undefined when calling waitForMatchingEmails.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    if (requestParameters.count !== undefined) {
      queryParameters['count'] = requestParameters.count;
    }

    if (requestParameters.before !== undefined) {
      queryParameters['before'] = (
        requestParameters.before as any
      ).toISOString();
    }

    if (requestParameters.since !== undefined) {
      queryParameters['since'] = (requestParameters.since as any).toISOString();
    }

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.delay !== undefined) {
      queryParameters['delay'] = requestParameters.delay;
    }

    if (requestParameters.timeout !== undefined) {
      queryParameters['timeout'] = requestParameters.timeout;
    }

    if (requestParameters.unreadOnly !== undefined) {
      queryParameters['unreadOnly'] = requestParameters.unreadOnly;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/waitForMatchingEmails`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: MatchOptionsToJSON(requestParameters.matchOptions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(EmailPreviewFromJSON)
    );
  }

  /**
   * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
   * Wait or return list of emails that match simple matching patterns
   */
  async waitForMatchingEmails(
    requestParameters: WaitForMatchingEmailsRequest,
    initOverrides?: RequestInit
  ): Promise<Array<EmailPreview>> {
    const response = await this.waitForMatchingEmailsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
   * Wait for or return the first email that matches provided MatchOptions array
   */
  async waitForMatchingFirstEmailRaw(
    requestParameters: WaitForMatchingFirstEmailRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Email>> {
    if (
      requestParameters.inboxId === null ||
      requestParameters.inboxId === undefined
    ) {
      throw new runtime.RequiredError(
        'inboxId',
        'Required parameter requestParameters.inboxId was null or undefined when calling waitForMatchingFirstEmail.'
      );
    }

    if (
      requestParameters.matchOptions === null ||
      requestParameters.matchOptions === undefined
    ) {
      throw new runtime.RequiredError(
        'matchOptions',
        'Required parameter requestParameters.matchOptions was null or undefined when calling waitForMatchingFirstEmail.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    if (requestParameters.timeout !== undefined) {
      queryParameters['timeout'] = requestParameters.timeout;
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

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.delay !== undefined) {
      queryParameters['delay'] = requestParameters.delay;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/waitForMatchingFirstEmail`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: MatchOptionsToJSON(requestParameters.matchOptions),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EmailFromJSON(jsonValue)
    );
  }

  /**
   * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
   * Wait for or return the first email that matches provided MatchOptions array
   */
  async waitForMatchingFirstEmail(
    requestParameters: WaitForMatchingFirstEmailRequest,
    initOverrides?: RequestInit
  ): Promise<Email> {
    const response = await this.waitForMatchingFirstEmailRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
   * Wait for or fetch the email with a given index in the inbox specified. If index doesn\'t exist waits for it to exist or timeout to occur.
   */
  async waitForNthEmailRaw(
    requestParameters: WaitForNthEmailRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Email>> {
    const queryParameters: any = {};

    if (requestParameters.inboxId !== undefined) {
      queryParameters['inboxId'] = requestParameters.inboxId;
    }

    if (requestParameters.index !== undefined) {
      queryParameters['index'] = requestParameters.index;
    }

    if (requestParameters.timeout !== undefined) {
      queryParameters['timeout'] = requestParameters.timeout;
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

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.delay !== undefined) {
      queryParameters['delay'] = requestParameters.delay;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/waitForNthEmail`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      EmailFromJSON(jsonValue)
    );
  }

  /**
   * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
   * Wait for or fetch the email with a given index in the inbox specified. If index doesn\'t exist waits for it to exist or timeout to occur.
   */
  async waitForNthEmail(
    requestParameters: WaitForNthEmailRequest,
    initOverrides?: RequestInit
  ): Promise<Email> {
    const response = await this.waitForNthEmailRaw(
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
export enum WaitForEmailCountSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum WaitForLatestEmailSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum WaitForMatchingEmailsSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum WaitForMatchingFirstEmailSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
/**
 * @export
 * @enum {string}
 */
export enum WaitForNthEmailSortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
