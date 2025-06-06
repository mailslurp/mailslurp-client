/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { OptInConsentOptions, OptInConsentSendResult, OptInSendingConsentDto, PageOptInIdentityProjection } from '../models';
export interface CheckSendingConsentForEmailAddressRequest {
    emailAddress: string;
}
export interface GetOptInIdentitiesRequest {
    page?: number;
    size?: number;
    sort?: GetOptInIdentitiesSortEnum;
}
export interface RevokeOptInConsentForEmailAddressRequest {
    emailAddress: string;
}
export interface SendOptInConsentForEmailAddressRequest {
    optInConsentOptions: OptInConsentOptions;
}
/**
 *
 */
export declare class ConsentControllerApi extends runtime.BaseAPI {
    /**
     */
    checkSendingConsentForEmailAddressRaw(requestParameters: CheckSendingConsentForEmailAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptInSendingConsentDto>>;
    /**
     */
    checkSendingConsentForEmailAddress(requestParameters: CheckSendingConsentForEmailAddressRequest, initOverrides?: RequestInit): Promise<OptInSendingConsentDto>;
    /**
     */
    getOptInIdentitiesRaw(requestParameters: GetOptInIdentitiesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageOptInIdentityProjection>>;
    /**
     */
    getOptInIdentities(requestParameters: GetOptInIdentitiesRequest, initOverrides?: RequestInit): Promise<PageOptInIdentityProjection>;
    /**
     */
    revokeOptInConsentForEmailAddressRaw(requestParameters: RevokeOptInConsentForEmailAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptInSendingConsentDto>>;
    /**
     */
    revokeOptInConsentForEmailAddress(requestParameters: RevokeOptInConsentForEmailAddressRequest, initOverrides?: RequestInit): Promise<OptInSendingConsentDto>;
    /**
     * Send double-opt in consent for an email address
     * Send a verification code to a user once they have explicitly submitted their email address
     */
    sendOptInConsentForEmailAddressRaw(requestParameters: SendOptInConsentForEmailAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OptInConsentSendResult>>;
    /**
     * Send double-opt in consent for an email address
     * Send a verification code to a user once they have explicitly submitted their email address
     */
    sendOptInConsentForEmailAddress(requestParameters: SendOptInConsentForEmailAddressRequest, initOverrides?: RequestInit): Promise<OptInConsentSendResult>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetOptInIdentitiesSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
