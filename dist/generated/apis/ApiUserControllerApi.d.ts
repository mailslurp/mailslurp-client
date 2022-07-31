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
import { UserInfoDto } from '../models';
/**
 *
 */
export declare class ApiUserControllerApi extends runtime.BaseAPI {
    /**
     */
    getSmtpPasswordRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     */
    getSmtpPassword(initOverrides?: RequestInit): Promise<string>;
    /**
     */
    getSmtpUsernameRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     */
    getSmtpUsername(initOverrides?: RequestInit): Promise<string>;
    /**
     */
    getUserInfoRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<UserInfoDto>>;
    /**
     */
    getUserInfo(initOverrides?: RequestInit): Promise<UserInfoDto>;
}