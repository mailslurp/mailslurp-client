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
 * @interface CreateContactOptions
 */
export interface CreateContactOptions {
    /**
     * Set of email addresses belonging to the contact
     * @type {Array<string>}
     * @memberof CreateContactOptions
     */
    emailAddresses?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CreateContactOptions
     */
    firstName?: string;
    /**
     * Group IDs that contact belongs to
     * @type {string}
     * @memberof CreateContactOptions
     */
    groupId?: string;
    /**
     *
     * @type {object}
     * @memberof CreateContactOptions
     */
    metaData?: object;
    /**
     * Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.
     * @type {boolean}
     * @memberof CreateContactOptions
     */
    optOut?: boolean;
    /**
     * Tags that can be used to search and group contacts
     * @type {Array<string>}
     * @memberof CreateContactOptions
     */
    tags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CreateContactOptions
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof CreateContactOptions
     */
    company?: string;
}

export function CreateContactOptionsFromJSON(json: any): CreateContactOptions {
    return CreateContactOptionsFromJSONTyped(json, false);
}

export function CreateContactOptionsFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): CreateContactOptions {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        emailAddresses: !exists(json, 'emailAddresses')
            ? undefined
            : json['emailAddresses'],
        firstName: !exists(json, 'firstName') ? undefined : json['firstName'],
        groupId: !exists(json, 'groupId') ? undefined : json['groupId'],
        metaData: !exists(json, 'metaData') ? undefined : json['metaData'],
        optOut: !exists(json, 'optOut') ? undefined : json['optOut'],
        tags: !exists(json, 'tags') ? undefined : json['tags'],
        lastName: !exists(json, 'lastName') ? undefined : json['lastName'],
        company: !exists(json, 'company') ? undefined : json['company'],
    };
}

export function CreateContactOptionsToJSON(
    value?: CreateContactOptions | null
): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        emailAddresses: value.emailAddresses,
        firstName: value.firstName,
        groupId: value.groupId,
        metaData: value.metaData,
        optOut: value.optOut,
        tags: value.tags,
        lastName: value.lastName,
        company: value.company,
    };
}
