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
import { EmailFeatureSupportResult } from './';
/**
 *
 * @export
 * @interface CheckEmailFeaturesClientSupportResults
 */
export interface CheckEmailFeaturesClientSupportResults {
    /**
     *
     * @type {EmailFeatureSupportResult}
     * @memberof CheckEmailFeaturesClientSupportResults
     */
    result: EmailFeatureSupportResult;
}
export declare function CheckEmailFeaturesClientSupportResultsFromJSON(json: any): CheckEmailFeaturesClientSupportResults;
export declare function CheckEmailFeaturesClientSupportResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckEmailFeaturesClientSupportResults;
export declare function CheckEmailFeaturesClientSupportResultsToJSON(value?: CheckEmailFeaturesClientSupportResults | null): any;
