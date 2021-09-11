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
 *
 * @export
 * @interface SentEmailProjection
 */
export interface SentEmailProjection {
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    attachments: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    bcc: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    bodyMD5Hash?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    cc: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof SentEmailProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    from?: string;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    inboxId: string;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    subject?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    to: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SentEmailProjection
     */
    userId: string;
}

export function SentEmailProjectionFromJSON(json: any): SentEmailProjection {
    return SentEmailProjectionFromJSONTyped(json, false);
}

export function SentEmailProjectionFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): SentEmailProjection {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        attachments: json['attachments'],
        bcc: json['bcc'],
        bodyMD5Hash: !exists(json, 'bodyMD5Hash')
            ? undefined
            : json['bodyMD5Hash'],
        cc: json['cc'],
        createdAt: new Date(json['createdAt']),
        from: !exists(json, 'from') ? undefined : json['from'],
        id: json['id'],
        inboxId: json['inboxId'],
        subject: !exists(json, 'subject') ? undefined : json['subject'],
        to: json['to'],
        userId: json['userId'],
    };
}

export function SentEmailProjectionToJSON(
    value?: SentEmailProjection | null
): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        attachments: value.attachments,
        bcc: value.bcc,
        bodyMD5Hash: value.bodyMD5Hash,
        cc: value.cc,
        createdAt: value.createdAt.toISOString(),
        from: value.from,
        id: value.id,
        inboxId: value.inboxId,
        subject: value.subject,
        to: value.to,
        userId: value.userId,
    };
}
