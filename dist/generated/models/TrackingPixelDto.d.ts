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
 * Tracking pixel
 * @export
 * @interface TrackingPixelDto
 */
export interface TrackingPixelDto {
    /**
     *
     * @type {string}
     * @memberof TrackingPixelDto
     */
    id: string;
    /**
     *
     * @type {boolean}
     * @memberof TrackingPixelDto
     */
    seen: boolean;
    /**
     *
     * @type {string}
     * @memberof TrackingPixelDto
     */
    recipient?: string | null;
    /**
     *
     * @type {string}
     * @memberof TrackingPixelDto
     */
    html: string;
    /**
     *
     * @type {string}
     * @memberof TrackingPixelDto
     */
    url: string;
    /**
     *
     * @type {string}
     * @memberof TrackingPixelDto
     */
    inboxId?: string | null;
    /**
     *
     * @type {string}
     * @memberof TrackingPixelDto
     */
    sentEmailId?: string | null;
    /**
     *
     * @type {Date}
     * @memberof TrackingPixelDto
     */
    seenAt?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof TrackingPixelDto
     */
    createdAt: Date;
}
export declare function TrackingPixelDtoFromJSON(json: any): TrackingPixelDto;
export declare function TrackingPixelDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackingPixelDto;
export declare function TrackingPixelDtoToJSON(value?: TrackingPixelDto | null): any;
