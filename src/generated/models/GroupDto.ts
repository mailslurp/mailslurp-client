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
 * @interface GroupDto
 */
export interface GroupDto {
    /**
     *
     * @type {Date}
     * @memberof GroupDto
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof GroupDto
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof GroupDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GroupDto
     */
    name: string;
}

export function GroupDtoFromJSON(json: any): GroupDto {
    return GroupDtoFromJSONTyped(json, false);
}

export function GroupDtoFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): GroupDto {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        description: !exists(json, 'description')
            ? undefined
            : json['description'],
        id: json['id'],
        name: json['name'],
    };
}

export function GroupDtoToJSON(value?: GroupDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        description: value.description,
        id: value.id,
        name: value.name,
    };
}
