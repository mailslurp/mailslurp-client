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
 * Options for creating a domain to use with MailSlurp. You must have ownership access to this domain in order to verify it. Domains will not functionally currently until the domain has been verified. See https://www.mailslurp.com/guides/custom-domains for help.
 * @export
 * @interface UpdateDomainOptions
 */
export interface UpdateDomainOptions {
    /**
     *
     * @type {string}
     * @memberof UpdateDomainOptions
     */
    catchAllInboxId?: string;
}

export function UpdateDomainOptionsFromJSON(json: any): UpdateDomainOptions {
    return UpdateDomainOptionsFromJSONTyped(json, false);
}

export function UpdateDomainOptionsFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): UpdateDomainOptions {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        catchAllInboxId: !exists(json, 'catchAllInboxId')
            ? undefined
            : json['catchAllInboxId'],
    };
}

export function UpdateDomainOptionsToJSON(
    value?: UpdateDomainOptions | null
): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        catchAllInboxId: value.catchAllInboxId,
    };
}
