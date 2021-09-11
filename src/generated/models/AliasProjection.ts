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
 * Representation of a alias
 * @export
 * @interface AliasProjection
 */
export interface AliasProjection {
    /**
     *
     * @type {Date}
     * @memberof AliasProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    emailAddress: string;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    inboxId: string;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    name?: string;
    /**
     *
     * @type {Date}
     * @memberof AliasProjection
     */
    updatedAt: Date;
    /**
     *
     * @type {boolean}
     * @memberof AliasProjection
     */
    useThreads?: boolean;
    /**
     *
     * @type {string}
     * @memberof AliasProjection
     */
    userId: string;
}

export function AliasProjectionFromJSON(json: any): AliasProjection {
    return AliasProjectionFromJSONTyped(json, false);
}

export function AliasProjectionFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): AliasProjection {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        emailAddress: json['emailAddress'],
        id: json['id'],
        inboxId: json['inboxId'],
        name: !exists(json, 'name') ? undefined : json['name'],
        updatedAt: new Date(json['updatedAt']),
        useThreads: !exists(json, 'useThreads')
            ? undefined
            : json['useThreads'],
        userId: json['userId'],
    };
}

export function AliasProjectionToJSON(value?: AliasProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        emailAddress: value.emailAddress,
        id: value.id,
        inboxId: value.inboxId,
        name: value.name,
        updatedAt: value.updatedAt.toISOString(),
        useThreads: value.useThreads,
        userId: value.userId,
    };
}
