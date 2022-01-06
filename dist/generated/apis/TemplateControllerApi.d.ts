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
import { CreateTemplateOptions, PageTemplateProjection, TemplateDto, TemplateProjection } from '../models';
export interface CreateTemplateRequest {
    createTemplateOptions: CreateTemplateOptions;
}
export interface DeleteTemplateRequest {
    templateId: string;
}
export interface GetAllTemplatesRequest {
    page?: number;
    size?: number;
    sort?: GetAllTemplatesSortEnum;
    since?: Date;
    before?: Date;
}
export interface GetTemplateRequest {
    templateId: string;
}
export interface UpdateTemplateRequest {
    templateId: string;
    createTemplateOptions: CreateTemplateOptions;
}
/**
 *
 */
export declare class TemplateControllerApi extends runtime.BaseAPI {
    /**
     * Create a Template
     */
    createTemplateRaw(requestParameters: CreateTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateDto>>;
    /**
     * Create a Template
     */
    createTemplate(requestParameters: CreateTemplateRequest, initOverrides?: RequestInit): Promise<TemplateDto>;
    /**
     * Delete Template
     */
    deleteTemplateRaw(requestParameters: DeleteTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete Template
     */
    deleteTemplate(requestParameters: DeleteTemplateRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get all Templates in paginated format
     */
    getAllTemplatesRaw(requestParameters: GetAllTemplatesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageTemplateProjection>>;
    /**
     * Get all Templates in paginated format
     */
    getAllTemplates(requestParameters: GetAllTemplatesRequest, initOverrides?: RequestInit): Promise<PageTemplateProjection>;
    /**
     * Get Template
     */
    getTemplateRaw(requestParameters: GetTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateDto>>;
    /**
     * Get Template
     */
    getTemplate(requestParameters: GetTemplateRequest, initOverrides?: RequestInit): Promise<TemplateDto>;
    /**
     * Get all Templates
     */
    getTemplatesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<TemplateProjection>>>;
    /**
     * Get all Templates
     */
    getTemplates(initOverrides?: RequestInit): Promise<Array<TemplateProjection>>;
    /**
     * Update a Template
     */
    updateTemplateRaw(requestParameters: UpdateTemplateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TemplateDto>>;
    /**
     * Update a Template
     */
    updateTemplate(requestParameters: UpdateTemplateRequest, initOverrides?: RequestInit): Promise<TemplateDto>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAllTemplatesSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
