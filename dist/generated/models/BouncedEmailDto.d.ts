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
 * Bounced email
 * @export
 * @interface BouncedEmailDto
 */
export interface BouncedEmailDto {
    /**
     *
     * @type {string}
     * @memberof BouncedEmailDto
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof BouncedEmailDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof BouncedEmailDto
     */
    notificationType: string;
    /**
     *
     * @type {Array<string>}
     * @memberof BouncedEmailDto
     */
    sentToRecipients?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof BouncedEmailDto
     */
    sender: string;
    /**
     *
     * @type {string}
     * @memberof BouncedEmailDto
     */
    bounceMta?: string;
    /**
     *
     * @type {string}
     * @memberof BouncedEmailDto
     */
    bounceType?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof BouncedEmailDto
     */
    bounceRecipients?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof BouncedEmailDto
     */
    bounceSubType?: string;
    /**
     *
     * @type {Date}
     * @memberof BouncedEmailDto
     */
    createdAt: Date;
}
export declare function BouncedEmailDtoFromJSON(json: any): BouncedEmailDto;
export declare function BouncedEmailDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BouncedEmailDto;
export declare function BouncedEmailDtoToJSON(value?: BouncedEmailDto | null): any;
