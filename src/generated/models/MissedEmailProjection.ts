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
 * @interface MissedEmailProjection
 */
export interface MissedEmailProjection {
    /**
     *
     * @type {Date}
     * @memberof MissedEmailProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof MissedEmailProjection
     */
    from?: string;
    /**
     *
     * @type {string}
     * @memberof MissedEmailProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof MissedEmailProjection
     */
    subject?: string;
    /**
     *
     * @type {string}
     * @memberof MissedEmailProjection
     */
    userId?: string;
}

export function MissedEmailProjectionFromJSON(
    json: any
): MissedEmailProjection {
    return MissedEmailProjectionFromJSONTyped(json, false);
}

export function MissedEmailProjectionFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): MissedEmailProjection {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        from: !exists(json, 'from') ? undefined : json['from'],
        id: json['id'],
        subject: !exists(json, 'subject') ? undefined : json['subject'],
        userId: !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function MissedEmailProjectionToJSON(
    value?: MissedEmailProjection | null
): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        from: value.from,
        id: value.id,
        subject: value.subject,
        userId: value.userId,
    };
}
