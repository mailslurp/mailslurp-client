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
/**
 * Email attachment entity
 * @export
 * @interface AttachmentEntity
 */
export interface AttachmentEntity {
    /**
     *
     * @type {string}
     * @memberof AttachmentEntity
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof AttachmentEntity
     */
    attachmentId: string;
    /**
     *
     * @type {string}
     * @memberof AttachmentEntity
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof AttachmentEntity
     */
    contentType?: string;
    /**
     *
     * @type {number}
     * @memberof AttachmentEntity
     */
    contentLength?: number;
    /**
     *
     * @type {string}
     * @memberof AttachmentEntity
     */
    name?: string;
    /**
     *
     * @type {Date}
     * @memberof AttachmentEntity
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof AttachmentEntity
     */
    updatedAt: Date;
}
export declare function AttachmentEntityFromJSON(json: any): AttachmentEntity;
export declare function AttachmentEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentEntity;
export declare function AttachmentEntityToJSON(value?: AttachmentEntity | null): any;
