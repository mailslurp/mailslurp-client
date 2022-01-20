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
/**
 *
 * @export
 * @interface AttachmentProjection
 */
export interface AttachmentProjection {
    /**
     *
     * @type {string}
     * @memberof AttachmentProjection
     */
    name?: string;
    /**
     * Content length of attachment in bytes
     * @type {number}
     * @memberof AttachmentProjection
     */
    contentLength?: number;
    /**
     *
     * @type {string}
     * @memberof AttachmentProjection
     */
    userId: string;
    /**
     *
     * @type {Date}
     * @memberof AttachmentProjection
     */
    createdAt: Date;
    /**
     * Attachment ID
     * @type {string}
     * @memberof AttachmentProjection
     */
    attachmentId: string;
    /**
     *
     * @type {Date}
     * @memberof AttachmentProjection
     */
    updatedAt: Date;
    /**
     * Content type of attachment.
     * @type {string}
     * @memberof AttachmentProjection
     */
    contentType?: string;
}
export declare function AttachmentProjectionFromJSON(json: any): AttachmentProjection;
export declare function AttachmentProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentProjection;
export declare function AttachmentProjectionToJSON(value?: AttachmentProjection | null): any;
