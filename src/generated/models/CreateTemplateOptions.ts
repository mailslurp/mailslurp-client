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
 * Create template options
 * @export
 * @interface CreateTemplateOptions
 */
export interface CreateTemplateOptions {
    /**
     * Name of template
     * @type {string}
     * @memberof CreateTemplateOptions
     */
    name: string;
    /**
     * Template content. Can include moustache style variables such as {{var_name}}
     * @type {string}
     * @memberof CreateTemplateOptions
     */
    content: string;
}

/**
 * Check if a given object implements the CreateTemplateOptions interface.
 */
export function instanceOfCreateTemplateOptions(value: object): value is CreateTemplateOptions {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function CreateTemplateOptionsFromJSON(json: any): CreateTemplateOptions {
    return CreateTemplateOptionsFromJSONTyped(json, false);
}

export function CreateTemplateOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTemplateOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'content': json['content'],
    };
}

export function CreateTemplateOptionsToJSON(json: any): CreateTemplateOptions {
    return CreateTemplateOptionsToJSONTyped(json, false);
}

export function CreateTemplateOptionsToJSONTyped(value?: CreateTemplateOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'content': value['content'],
    };
}

