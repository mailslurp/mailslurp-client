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
 * Contact object. For saving a user in contact book.
 * @export
 * @interface ContactDto
 */
export interface ContactDto {
    /**
     *
     * @type {string}
     * @memberof ContactDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ContactDto
     */
    groupId?: string | null;
    /**
     *
     * @type {string}
     * @memberof ContactDto
     */
    firstName?: string | null;
    /**
     *
     * @type {string}
     * @memberof ContactDto
     */
    lastName?: string | null;
    /**
     *
     * @type {string}
     * @memberof ContactDto
     */
    company?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof ContactDto
     */
    emailAddresses: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ContactDto
     */
    primaryEmailAddress?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof ContactDto
     */
    tags: Array<string>;
    /**
     *
     * @type {object}
     * @memberof ContactDto
     */
    metaData?: object | null;
    /**
     *
     * @type {boolean}
     * @memberof ContactDto
     */
    optOut?: boolean | null;
    /**
     *
     * @type {Date}
     * @memberof ContactDto
     */
    createdAt: Date;
}
/**
 * Check if a given object implements the ContactDto interface.
 */
export declare function instanceOfContactDto(value: object): value is ContactDto;
export declare function ContactDtoFromJSON(json: any): ContactDto;
export declare function ContactDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactDto;
export declare function ContactDtoToJSON(json: any): ContactDto;
export declare function ContactDtoToJSONTyped(value?: ContactDto | null, ignoreDiscriminator?: boolean): any;
