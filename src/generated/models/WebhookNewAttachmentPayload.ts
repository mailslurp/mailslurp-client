/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * NEW_ATTACHMENT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains an attachment. You can use the attachmentId to download the attachment.
 * @export
 * @interface WebhookNewAttachmentPayload
 */
export interface WebhookNewAttachmentPayload {
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    messageId: string;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    webhookId: string;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    webhookName?: string | null;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    eventName: WebhookNewAttachmentPayloadEventNameEnum;
    /**
     * ID of attachment. Use the `AttachmentController` to
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    attachmentId: string;
    /**
     * Filename of the attachment if present
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    name: string;
    /**
     * Content type of attachment such as 'image/png' or 'application/pdf
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    contentType: string;
    /**
     * Size of attachment in bytes
     * @type {number}
     * @memberof WebhookNewAttachmentPayload
     */
    contentLength: number;
}


/**
 * @export
 */
export const WebhookNewAttachmentPayloadEventNameEnum = {
    EMAIL_RECEIVED: 'EMAIL_RECEIVED',
    NEW_EMAIL: 'NEW_EMAIL',
    NEW_CONTACT: 'NEW_CONTACT',
    NEW_ATTACHMENT: 'NEW_ATTACHMENT',
    EMAIL_OPENED: 'EMAIL_OPENED',
    EMAIL_READ: 'EMAIL_READ',
    DELIVERY_STATUS: 'DELIVERY_STATUS',
    BOUNCE: 'BOUNCE',
    BOUNCE_RECIPIENT: 'BOUNCE_RECIPIENT',
    NEW_SMS: 'NEW_SMS',
    NEW_GUEST_USER: 'NEW_GUEST_USER'
} as const;
export type WebhookNewAttachmentPayloadEventNameEnum = typeof WebhookNewAttachmentPayloadEventNameEnum[keyof typeof WebhookNewAttachmentPayloadEventNameEnum];


/**
 * Check if a given object implements the WebhookNewAttachmentPayload interface.
 */
export function instanceOfWebhookNewAttachmentPayload(value: object): value is WebhookNewAttachmentPayload {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('webhookId' in value) || value['webhookId'] === undefined) return false;
    if (!('eventName' in value) || value['eventName'] === undefined) return false;
    if (!('attachmentId' in value) || value['attachmentId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('contentLength' in value) || value['contentLength'] === undefined) return false;
    return true;
}

export function WebhookNewAttachmentPayloadFromJSON(json: any): WebhookNewAttachmentPayload {
    return WebhookNewAttachmentPayloadFromJSONTyped(json, false);
}

export function WebhookNewAttachmentPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookNewAttachmentPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'messageId': json['messageId'],
        'webhookId': json['webhookId'],
        'webhookName': json['webhookName'] == null ? undefined : json['webhookName'],
        'eventName': json['eventName'],
        'attachmentId': json['attachmentId'],
        'name': json['name'],
        'contentType': json['contentType'],
        'contentLength': json['contentLength'],
    };
}

export function WebhookNewAttachmentPayloadToJSON(json: any): WebhookNewAttachmentPayload {
    return WebhookNewAttachmentPayloadToJSONTyped(json, false);
}

export function WebhookNewAttachmentPayloadToJSONTyped(value?: WebhookNewAttachmentPayload | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'messageId': value['messageId'],
        'webhookId': value['webhookId'],
        'webhookName': value['webhookName'],
        'eventName': value['eventName'],
        'attachmentId': value['attachmentId'],
        'name': value['name'],
        'contentType': value['contentType'],
        'contentLength': value['contentLength'],
    };
}

