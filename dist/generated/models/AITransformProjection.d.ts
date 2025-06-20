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
import { StructuredOutputSchema } from './';
/**
 *
 * @export
 * @interface AITransformProjection
 */
export interface AITransformProjection {
    /**
     *
     * @type {Array<string>}
     * @memberof AITransformProjection
     */
    conditions?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AITransformProjection
     */
    instructions?: Array<string>;
    /**
     *
     * @type {StructuredOutputSchema}
     * @memberof AITransformProjection
     */
    outputSchema?: StructuredOutputSchema;
    /**
     *
     * @type {string}
     * @memberof AITransformProjection
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof AITransformProjection
     */
    id: string;
}
export declare function AITransformProjectionFromJSON(json: any): AITransformProjection;
export declare function AITransformProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AITransformProjection;
export declare function AITransformProjectionToJSON(value?: AITransformProjection | null): any;
