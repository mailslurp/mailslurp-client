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
 * Inbox ID and email address pair
 * @export
 * @interface InboxIdItem
 */
export interface InboxIdItem {
    /**
     *
     * @type {string}
     * @memberof InboxIdItem
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof InboxIdItem
     */
    emailAddress: string;
}
/**
 * Check if a given object implements the InboxIdItem interface.
 */
export declare function instanceOfInboxIdItem(value: object): value is InboxIdItem;
export declare function InboxIdItemFromJSON(json: any): InboxIdItem;
export declare function InboxIdItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxIdItem;
export declare function InboxIdItemToJSON(json: any): InboxIdItem;
export declare function InboxIdItemToJSONTyped(value?: InboxIdItem | null, ignoreDiscriminator?: boolean): any;
