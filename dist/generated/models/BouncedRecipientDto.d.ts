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
 * Bounced recipient
 * @export
 * @interface BouncedRecipientDto
 */
export interface BouncedRecipientDto {
    /**
     *
     * @type {string}
     * @memberof BouncedRecipientDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof BouncedRecipientDto
     */
    userId?: string | null;
    /**
     *
     * @type {string}
     * @memberof BouncedRecipientDto
     */
    sentEmailId?: string | null;
    /**
     *
     * @type {string}
     * @memberof BouncedRecipientDto
     */
    recipient: string;
    /**
     *
     * @type {string}
     * @memberof BouncedRecipientDto
     */
    diagnosticCode?: string | null;
    /**
     *
     * @type {string}
     * @memberof BouncedRecipientDto
     */
    action?: string | null;
    /**
     *
     * @type {string}
     * @memberof BouncedRecipientDto
     */
    bounceType?: string | null;
    /**
     *
     * @type {string}
     * @memberof BouncedRecipientDto
     */
    status?: string | null;
    /**
     *
     * @type {Date}
     * @memberof BouncedRecipientDto
     */
    createdAt: Date;
}
export declare function BouncedRecipientDtoFromJSON(json: any): BouncedRecipientDto;
export declare function BouncedRecipientDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BouncedRecipientDto;
export declare function BouncedRecipientDtoToJSON(value?: BouncedRecipientDto | null): any;
