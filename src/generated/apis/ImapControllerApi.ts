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
import type {
  ImapServerFetchResult,
  ImapServerGetResult,
  ImapServerListOptions,
  ImapServerListResult,
  ImapServerMailboxResult,
  ImapServerSearchOptions,
  ImapServerSearchResult,
  ImapServerStatusOptions,
  ImapServerStatusResult,
  ImapUpdateFlagsOptions,
} from '../models/index';
import {
    ImapServerFetchResultFromJSON,
    ImapServerFetchResultToJSON,
    ImapServerGetResultFromJSON,
    ImapServerGetResultToJSON,
    ImapServerListOptionsFromJSON,
    ImapServerListOptionsToJSON,
    ImapServerListResultFromJSON,
    ImapServerListResultToJSON,
    ImapServerMailboxResultFromJSON,
    ImapServerMailboxResultToJSON,
    ImapServerSearchOptionsFromJSON,
    ImapServerSearchOptionsToJSON,
    ImapServerSearchResultFromJSON,
    ImapServerSearchResultToJSON,
    ImapServerStatusOptionsFromJSON,
    ImapServerStatusOptionsToJSON,
    ImapServerStatusResultFromJSON,
    ImapServerStatusResultToJSON,
    ImapUpdateFlagsOptionsFromJSON,
    ImapUpdateFlagsOptionsToJSON,
} from '../models/index';

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

export interface ImapServerMailboxRequest {
    name: string;
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
    async imapServerFetchRaw(requestParameters: ImapServerFetchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImapServerFetchResult>> {
        if (requestParameters['seqNum'] == null) {
            throw new runtime.RequiredError(
                'seqNum',
                'Required parameter "seqNum" was null or undefined when calling imapServerFetch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['inboxId'] != null) {
            queryParameters['inboxId'] = requestParameters['inboxId'];
        }

        if (requestParameters['seqNum'] != null) {
            queryParameters['seqNum'] = requestParameters['seqNum'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/imap/server/fetch`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImapServerFetchResultFromJSON(jsonValue));
    }

    /**
     * Fetch message in an inbox
     */
    async imapServerFetch(requestParameters: ImapServerFetchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImapServerFetchResult> {
        const response = await this.imapServerFetchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a message by email ID
     */
    async imapServerGetRaw(requestParameters: ImapServerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImapServerGetResult>> {
        if (requestParameters['emailId'] == null) {
            throw new runtime.RequiredError(
                'emailId',
                'Required parameter "emailId" was null or undefined when calling imapServerGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['emailId'] != null) {
            queryParameters['emailId'] = requestParameters['emailId'];
        }

        if (requestParameters['inboxId'] != null) {
            queryParameters['inboxId'] = requestParameters['inboxId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/imap/server/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImapServerGetResultFromJSON(jsonValue));
    }

    /**
     * Get a message by email ID
     */
    async imapServerGet(requestParameters: ImapServerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImapServerGetResult> {
        const response = await this.imapServerGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List messages in an inbox
     */
    async imapServerListRaw(requestParameters: ImapServerListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImapServerListResult>> {
        if (requestParameters['imapServerListOptions'] == null) {
            throw new runtime.RequiredError(
                'imapServerListOptions',
                'Required parameter "imapServerListOptions" was null or undefined when calling imapServerList().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['inboxId'] != null) {
            queryParameters['inboxId'] = requestParameters['inboxId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/imap/server/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImapServerListOptionsToJSON(requestParameters['imapServerListOptions']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImapServerListResultFromJSON(jsonValue));
    }

    /**
     * List messages in an inbox
     */
    async imapServerList(requestParameters: ImapServerListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImapServerListResult> {
        const response = await this.imapServerListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new mailbox if possible
     */
    async imapServerMailboxRaw(requestParameters: ImapServerMailboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImapServerMailboxResult>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling imapServerMailbox().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/imap/server/mailbox`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImapServerMailboxResultFromJSON(jsonValue));
    }

    /**
     * Create a new mailbox if possible
     */
    async imapServerMailbox(requestParameters: ImapServerMailboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImapServerMailboxResult> {
        const response = await this.imapServerMailboxRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search messages in an inbox
     */
    async imapServerSearchRaw(requestParameters: ImapServerSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImapServerSearchResult>> {
        if (requestParameters['imapServerSearchOptions'] == null) {
            throw new runtime.RequiredError(
                'imapServerSearchOptions',
                'Required parameter "imapServerSearchOptions" was null or undefined when calling imapServerSearch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['inboxId'] != null) {
            queryParameters['inboxId'] = requestParameters['inboxId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/imap/server/search`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImapServerSearchOptionsToJSON(requestParameters['imapServerSearchOptions']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImapServerSearchResultFromJSON(jsonValue));
    }

    /**
     * Search messages in an inbox
     */
    async imapServerSearch(requestParameters: ImapServerSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImapServerSearchResult> {
        const response = await this.imapServerSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get status for mailbox
     */
    async imapServerStatusRaw(requestParameters: ImapServerStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImapServerStatusResult>> {
        if (requestParameters['imapServerStatusOptions'] == null) {
            throw new runtime.RequiredError(
                'imapServerStatusOptions',
                'Required parameter "imapServerStatusOptions" was null or undefined when calling imapServerStatus().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['inboxId'] != null) {
            queryParameters['inboxId'] = requestParameters['inboxId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/imap/server/status`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImapServerStatusOptionsToJSON(requestParameters['imapServerStatusOptions']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImapServerStatusResultFromJSON(jsonValue));
    }

    /**
     * Get status for mailbox
     */
    async imapServerStatus(requestParameters: ImapServerStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImapServerStatusResult> {
        const response = await this.imapServerStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update message flags
     */
    async imapServerUpdateFlagsRaw(requestParameters: ImapServerUpdateFlagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['imapUpdateFlagsOptions'] == null) {
            throw new runtime.RequiredError(
                'imapUpdateFlagsOptions',
                'Required parameter "imapUpdateFlagsOptions" was null or undefined when calling imapServerUpdateFlags().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['inboxId'] != null) {
            queryParameters['inboxId'] = requestParameters['inboxId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/imap/server/update-flags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImapUpdateFlagsOptionsToJSON(requestParameters['imapUpdateFlagsOptions']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update message flags
     */
    async imapServerUpdateFlags(requestParameters: ImapServerUpdateFlagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.imapServerUpdateFlagsRaw(requestParameters, initOverrides);
    }

}
