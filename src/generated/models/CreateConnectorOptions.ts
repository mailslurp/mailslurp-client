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
 * Options for creating an inbox connection with an external mail provider
 * @export
 * @interface CreateConnectorOptions
 */
export interface CreateConnectorOptions {
    /**
     * Name of connector
     * @type {string}
     * @memberof CreateConnectorOptions
     */
    name?: string | null;
    /**
     * Email address of external inbox
     * @type {string}
     * @memberof CreateConnectorOptions
     */
    emailAddress?: string | null;
    /**
     * Is connector enabled
     * @type {boolean}
     * @memberof CreateConnectorOptions
     */
    enabled?: boolean | null;
}

/**
 * Check if a given object implements the CreateConnectorOptions interface.
 */
export function instanceOfCreateConnectorOptions(value: object): value is CreateConnectorOptions {
    return true;
}

export function CreateConnectorOptionsFromJSON(json: any): CreateConnectorOptions {
    return CreateConnectorOptionsFromJSONTyped(json, false);
}

export function CreateConnectorOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateConnectorOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
    };
}

export function CreateConnectorOptionsToJSON(json: any): CreateConnectorOptions {
    return CreateConnectorOptionsToJSONTyped(json, false);
}

export function CreateConnectorOptionsToJSONTyped(value?: CreateConnectorOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'emailAddress': value['emailAddress'],
        'enabled': value['enabled'],
    };
}

