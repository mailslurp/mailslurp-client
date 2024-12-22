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
  ExportLink,
  ExportOptions,
} from '../models/index';
import {
    ExportLinkFromJSON,
    ExportLinkToJSON,
    ExportOptionsFromJSON,
    ExportOptionsToJSON,
} from '../models/index';

export interface ExportEntitiesRequest {
    exportType: ExportEntitiesExportTypeEnum;
    apiKey: string;
    outputFormat: ExportEntitiesOutputFormatEnum;
    filter?: string;
    listSeparatorToken?: string;
    excludePreviouslyExported?: boolean;
    createdEarliestTime?: Date;
    createdOldestTime?: Date;
}

export interface GetExportLinkRequest {
    exportType: GetExportLinkExportTypeEnum;
    exportOptions: ExportOptions;
    apiKey?: string;
}

/**
 * 
 */
export class ExportControllerApi extends runtime.BaseAPI {

    /**
     * Export inboxes link callable via browser
     */
    async exportEntitiesRaw(requestParameters: ExportEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['exportType'] == null) {
            throw new runtime.RequiredError(
                'exportType',
                'Required parameter "exportType" was null or undefined when calling exportEntities().'
            );
        }

        if (requestParameters['apiKey'] == null) {
            throw new runtime.RequiredError(
                'apiKey',
                'Required parameter "apiKey" was null or undefined when calling exportEntities().'
            );
        }

        if (requestParameters['outputFormat'] == null) {
            throw new runtime.RequiredError(
                'outputFormat',
                'Required parameter "outputFormat" was null or undefined when calling exportEntities().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['exportType'] != null) {
            queryParameters['exportType'] = requestParameters['exportType'];
        }

        if (requestParameters['apiKey'] != null) {
            queryParameters['apiKey'] = requestParameters['apiKey'];
        }

        if (requestParameters['outputFormat'] != null) {
            queryParameters['outputFormat'] = requestParameters['outputFormat'];
        }

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['listSeparatorToken'] != null) {
            queryParameters['listSeparatorToken'] = requestParameters['listSeparatorToken'];
        }

        if (requestParameters['excludePreviouslyExported'] != null) {
            queryParameters['excludePreviouslyExported'] = requestParameters['excludePreviouslyExported'];
        }

        if (requestParameters['createdEarliestTime'] != null) {
            queryParameters['createdEarliestTime'] = (requestParameters['createdEarliestTime'] as any).toISOString();
        }

        if (requestParameters['createdOldestTime'] != null) {
            queryParameters['createdOldestTime'] = (requestParameters['createdOldestTime'] as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Export inboxes link callable via browser
     */
    async exportEntities(requestParameters: ExportEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.exportEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get export link
     */
    async getExportLinkRaw(requestParameters: GetExportLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportLink>> {
        if (requestParameters['exportType'] == null) {
            throw new runtime.RequiredError(
                'exportType',
                'Required parameter "exportType" was null or undefined when calling getExportLink().'
            );
        }

        if (requestParameters['exportOptions'] == null) {
            throw new runtime.RequiredError(
                'exportOptions',
                'Required parameter "exportOptions" was null or undefined when calling getExportLink().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['exportType'] != null) {
            queryParameters['exportType'] = requestParameters['exportType'];
        }

        if (requestParameters['apiKey'] != null) {
            queryParameters['apiKey'] = requestParameters['apiKey'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/export`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExportOptionsToJSON(requestParameters['exportOptions']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportLinkFromJSON(jsonValue));
    }

    /**
     * Get export link
     */
    async getExportLink(requestParameters: GetExportLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportLink> {
        const response = await this.getExportLinkRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ExportEntitiesExportTypeEnum = {
    INBOXES: 'INBOXES',
    CONTACTS: 'CONTACTS',
    ATTACHMENTS: 'ATTACHMENTS',
    EMAILS: 'EMAILS'
} as const;
export type ExportEntitiesExportTypeEnum = typeof ExportEntitiesExportTypeEnum[keyof typeof ExportEntitiesExportTypeEnum];
/**
 * @export
 */
export const ExportEntitiesOutputFormatEnum = {
    DEFAULT: 'CSV_DEFAULT',
    EXCEL: 'CSV_EXCEL'
} as const;
export type ExportEntitiesOutputFormatEnum = typeof ExportEntitiesOutputFormatEnum[keyof typeof ExportEntitiesOutputFormatEnum];
/**
 * @export
 */
export const GetExportLinkExportTypeEnum = {
    INBOXES: 'INBOXES',
    CONTACTS: 'CONTACTS',
    ATTACHMENTS: 'ATTACHMENTS',
    EMAILS: 'EMAILS'
} as const;
export type GetExportLinkExportTypeEnum = typeof GetExportLinkExportTypeEnum[keyof typeof GetExportLinkExportTypeEnum];
