/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BasicAuthOptions } from './';
/**
 * Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the inbox receives an email. Webhooks are great for processing many inbound emails.
 * @export
 * @interface CreateWebhookOptions
 */
export interface CreateWebhookOptions {
    /**
     *
     * @type {BasicAuthOptions}
     * @memberof CreateWebhookOptions
     */
    basicAuth?: BasicAuthOptions;
    /**
     * Optional webhook event name. Default is `EMAIL_RECEIVED` and is triggered when an email is received by the inbox associated with the webhook. Payload differ according to the webhook event name. The other events are `NEW_EMAIL`, `NEW_CONTACT`, and `NEW_ATTACHMENT` and `EMAIL_OPENED`. `EMAIL_OPENED` requires the use of tracking pixels when sending. See the email tracking guide for more information.
     * @type {string}
     * @memberof CreateWebhookOptions
     */
    eventName?: CreateWebhookOptionsEventNameEnum;
    /**
     * Optional name for the webhook
     * @type {string}
     * @memberof CreateWebhookOptions
     */
    name?: string;
    /**
     * Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received or an event is trigger. The payload of the submitted JSON is dependent on the webhook event type. The default `EMAIL_RECEIVED` payload is described by `https://api.mailslurp.com/schemas/webhook-payload`. The other events, `NEW_EMAIL`, `NEW_CONTACT`, and `NEW_ATTACHMENT` are described by `https://api.mailslurp.com/schemas/webhook-new-email-payload`, `https://api.mailslurp.com/schemas/webhook-new-contact-payload`,`https://api.mailslurp.com/schemas/webhook-new-attachment-payload` respectively.
     * @type {string}
     * @memberof CreateWebhookOptions
     */
    url?: string;
}
/**
* @export
* @enum {string}
*/
export declare enum CreateWebhookOptionsEventNameEnum {
    EMAIL_RECEIVED = "EMAIL_RECEIVED",
    NEW_EMAIL = "NEW_EMAIL",
    NEW_CONTACT = "NEW_CONTACT",
    NEW_ATTACHMENT = "NEW_ATTACHMENT",
    EMAIL_OPENED = "EMAIL_OPENED",
    EMAIL_READ = "EMAIL_READ"
}
export declare function CreateWebhookOptionsFromJSON(json: any): CreateWebhookOptions;
export declare function CreateWebhookOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWebhookOptions;
export declare function CreateWebhookOptionsToJSON(value?: CreateWebhookOptions | null): any;
