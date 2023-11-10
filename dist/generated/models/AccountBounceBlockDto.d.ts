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
 *
 * @export
 * @interface AccountBounceBlockDto
 */
export interface AccountBounceBlockDto {
    /**
     *
     * @type {boolean}
     * @memberof AccountBounceBlockDto
     */
    isSendingBlocked: boolean;
    /**
     *
     * @type {number}
     * @memberof AccountBounceBlockDto
     */
    bounceCount: number;
    /**
     *
     * @type {number}
     * @memberof AccountBounceBlockDto
     */
    bounceCountToday: number;
    /**
     *
     * @type {number}
     * @memberof AccountBounceBlockDto
     */
    maximumDailyBounces: number;
    /**
     *
     * @type {number}
     * @memberof AccountBounceBlockDto
     */
    maximumAccountBounces: number;
}
export declare function AccountBounceBlockDtoFromJSON(json: any): AccountBounceBlockDto;
export declare function AccountBounceBlockDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBounceBlockDto;
export declare function AccountBounceBlockDtoToJSON(value?: AccountBounceBlockDto | null): any;