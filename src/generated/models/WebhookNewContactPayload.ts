/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * NEW_CONTACT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains a recipient that has not been saved as a contact.
 * @export
 * @interface WebhookNewContactPayload
 */
export interface WebhookNewContactPayload {
    /**
     *
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    company?: string;
    /**
     *
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    contactId: string;
    /**
     *
     * @type {Date}
     * @memberof WebhookNewContactPayload
     */
    createdAt: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof WebhookNewContactPayload
     */
    emailAddresses: Array<string>;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    eventName?: WebhookNewContactPayloadEventNameEnum;
    /**
     *
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    groupId?: string;
    /**
     *
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    lastName?: string;
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    messageId?: string;
    /**
     *
     * @type {object}
     * @memberof WebhookNewContactPayload
     */
    metaData?: object;
    /**
     *
     * @type {boolean}
     * @memberof WebhookNewContactPayload
     */
    optOut?: boolean;
    /**
     *
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    primaryEmailAddress?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof WebhookNewContactPayload
     */
    tags: Array<string>;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    webhookId?: string;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    webhookName?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum WebhookNewContactPayloadEventNameEnum {
    EmailReceived = 'EMAIL_RECEIVED',
    NewEmail = 'NEW_EMAIL',
    NewContact = 'NEW_CONTACT',
    NewAttachment = 'NEW_ATTACHMENT',
    EmailOpened = 'EMAIL_OPENED',
    EmailRead = 'EMAIL_READ',
}

export function WebhookNewContactPayloadFromJSON(
    json: any
): WebhookNewContactPayload {
    return WebhookNewContactPayloadFromJSONTyped(json, false);
}

export function WebhookNewContactPayloadFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): WebhookNewContactPayload {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        company: !exists(json, 'company') ? undefined : json['company'],
        contactId: json['contactId'],
        createdAt: new Date(json['createdAt']),
        emailAddresses: json['emailAddresses'],
        eventName: !exists(json, 'eventName') ? undefined : json['eventName'],
        firstName: !exists(json, 'firstName') ? undefined : json['firstName'],
        groupId: !exists(json, 'groupId') ? undefined : json['groupId'],
        lastName: !exists(json, 'lastName') ? undefined : json['lastName'],
        messageId: !exists(json, 'messageId') ? undefined : json['messageId'],
        metaData: !exists(json, 'metaData') ? undefined : json['metaData'],
        optOut: !exists(json, 'optOut') ? undefined : json['optOut'],
        primaryEmailAddress: !exists(json, 'primaryEmailAddress')
            ? undefined
            : json['primaryEmailAddress'],
        tags: json['tags'],
        webhookId: !exists(json, 'webhookId') ? undefined : json['webhookId'],
        webhookName: !exists(json, 'webhookName')
            ? undefined
            : json['webhookName'],
    };
}

export function WebhookNewContactPayloadToJSON(
    value?: WebhookNewContactPayload | null
): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        company: value.company,
        contactId: value.contactId,
        createdAt: value.createdAt.toISOString(),
        emailAddresses: value.emailAddresses,
        eventName: value.eventName,
        firstName: value.firstName,
        groupId: value.groupId,
        lastName: value.lastName,
        messageId: value.messageId,
        metaData: value.metaData,
        optOut: value.optOut,
        primaryEmailAddress: value.primaryEmailAddress,
        tags: value.tags,
        webhookId: value.webhookId,
        webhookName: value.webhookName,
    };
}
