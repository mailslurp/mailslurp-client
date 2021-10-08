/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Name Server Record
 * @export
 * @interface NameServerRecord
 */
export interface NameServerRecord {
    /**
     *
     * @type {string}
     * @memberof NameServerRecord
     */
    priority: string;
    /**
     *
     * @type {string}
     * @memberof NameServerRecord
     */
    raw: string;
    /**
     *
     * @type {string}
     * @memberof NameServerRecord
     */
    recordType: string;
    /**
     *
     * @type {string}
     * @memberof NameServerRecord
     */
    value: string;
}
export declare function NameServerRecordFromJSON(json: any): NameServerRecord;
export declare function NameServerRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameServerRecord;
export declare function NameServerRecordToJSON(value?: NameServerRecord | null): any;
