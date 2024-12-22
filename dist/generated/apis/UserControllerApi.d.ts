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
import type { UserInfoDto } from '../models/index';
export interface GetJsonPropertyAsStringRequest {
    property: string;
    body: object | null;
}
/**
 *
 */
export declare class UserControllerApi extends runtime.BaseAPI {
    /**
     * Utility function to extract properties from JSON objects in language where this is cumbersome.
     */
    getJsonPropertyAsStringRaw(requestParameters: GetJsonPropertyAsStringRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     * Utility function to extract properties from JSON objects in language where this is cumbersome.
     */
    getJsonPropertyAsString(requestParameters: GetJsonPropertyAsStringRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
    /**
     * Get account information for your user
     */
    getUserInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserInfoDto>>;
    /**
     * Get account information for your user
     */
    getUserInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserInfoDto>;
}
