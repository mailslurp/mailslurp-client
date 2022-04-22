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
 * Meta data associated with an attachment. Attachments are stored as byte blobs so the meta data is stored separately.
 * @export
 * @interface AttachmentMetaData
 */
export interface AttachmentMetaData {
    /**
     * Name of attachment if given
     * @type {string}
     * @memberof AttachmentMetaData
     */
    name: string;
    /**
     * Content type of attachment such as `image/png`
     * @type {string}
     * @memberof AttachmentMetaData
     */
    contentType: string;
    /**
     * Size of attachment in bytes
     * @type {number}
     * @memberof AttachmentMetaData
     */
    contentLength: number;
    /**
     * ID of attachment
     * @type {string}
     * @memberof AttachmentMetaData
     */
    id: string;
}
export declare function AttachmentMetaDataFromJSON(json: any): AttachmentMetaData;
export declare function AttachmentMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentMetaData;
export declare function AttachmentMetaDataToJSON(value?: AttachmentMetaData | null): any;
