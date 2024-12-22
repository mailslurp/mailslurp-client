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
 * Domain record description
 * @export
 * @interface DescribeDomainOptions
 */
export interface DescribeDomainOptions {
    /**
     *
     * @type {string}
     * @memberof DescribeDomainOptions
     */
    domain: string;
}
/**
 * Check if a given object implements the DescribeDomainOptions interface.
 */
export declare function instanceOfDescribeDomainOptions(value: object): value is DescribeDomainOptions;
export declare function DescribeDomainOptionsFromJSON(json: any): DescribeDomainOptions;
export declare function DescribeDomainOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescribeDomainOptions;
export declare function DescribeDomainOptionsToJSON(json: any): DescribeDomainOptions;
export declare function DescribeDomainOptionsToJSONTyped(value?: DescribeDomainOptions | null, ignoreDiscriminator?: boolean): any;
