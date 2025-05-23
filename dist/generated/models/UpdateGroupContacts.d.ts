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
 * Update group contacts options. Pass a list of contact ids to replace existing group contacts.
 * @export
 * @interface UpdateGroupContacts
 */
export interface UpdateGroupContacts {
    /**
     *
     * @type {Array<string>}
     * @memberof UpdateGroupContacts
     */
    contactIds: Array<string>;
}
export declare function UpdateGroupContactsFromJSON(json: any): UpdateGroupContacts;
export declare function UpdateGroupContactsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGroupContacts;
export declare function UpdateGroupContactsToJSON(value?: UpdateGroupContacts | null): any;
