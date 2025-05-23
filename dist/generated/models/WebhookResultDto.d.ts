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
/**
 * Result of a webhook notification
 * @export
 * @interface WebhookResultDto
 */
export interface WebhookResultDto {
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    id?: string | null;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    webhookId: string;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    webhookUrl: string;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    messageId: string;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    redriveId?: string | null;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    httpMethod: WebhookResultDtoHttpMethodEnum;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    webhookEvent: WebhookResultDtoWebhookEventEnum;
    /**
     *
     * @type {number}
     * @memberof WebhookResultDto
     */
    responseStatus?: number | null;
    /**
     *
     * @type {number}
     * @memberof WebhookResultDto
     */
    responseTimeMillis: number;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    responseBodyExtract?: string | null;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    resultType?: WebhookResultDtoResultTypeEnum;
    /**
     *
     * @type {Date}
     * @memberof WebhookResultDto
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof WebhookResultDto
     */
    updatedAt: Date;
    /**
     *
     * @type {boolean}
     * @memberof WebhookResultDto
     */
    seen: boolean;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    inboxId?: string | null;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    emailId?: string | null;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    attachmentId?: string | null;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    phoneId?: string | null;
    /**
     *
     * @type {string}
     * @memberof WebhookResultDto
     */
    smsId?: string | null;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WebhookResultDtoHttpMethodEnum {
    POST = "POST",
    DELETE = "DELETE",
    GET = "GET",
    PUT = "PUT",
    PATCH = "PATCH",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE"
}
/**
 * @export
 * @enum {string}
 */
export declare enum WebhookResultDtoWebhookEventEnum {
    EMAIL_RECEIVED = "EMAIL_RECEIVED",
    NEW_EMAIL = "NEW_EMAIL",
    NEW_CONTACT = "NEW_CONTACT",
    NEW_ATTACHMENT = "NEW_ATTACHMENT",
    EMAIL_OPENED = "EMAIL_OPENED",
    EMAIL_READ = "EMAIL_READ",
    DELIVERY_STATUS = "DELIVERY_STATUS",
    BOUNCE = "BOUNCE",
    BOUNCE_RECIPIENT = "BOUNCE_RECIPIENT",
    NEW_SMS = "NEW_SMS",
    NEW_GUEST_USER = "NEW_GUEST_USER"
}
/**
 * @export
 * @enum {string}
 */
export declare enum WebhookResultDtoResultTypeEnum {
    BAD_RESPONSE = "BAD_RESPONSE",
    EXCEPTION = "EXCEPTION",
    SUCCESS = "SUCCESS",
    REDRIVEN = "REDRIVEN"
}
export declare function WebhookResultDtoFromJSON(json: any): WebhookResultDto;
export declare function WebhookResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookResultDto;
export declare function WebhookResultDtoToJSON(value?: WebhookResultDto | null): any;
