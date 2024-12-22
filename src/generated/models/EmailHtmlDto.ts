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
 * 
 * @export
 * @interface EmailHtmlDto
 */
export interface EmailHtmlDto {
    /**
     * 
     * @type {string}
     * @memberof EmailHtmlDto
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailHtmlDto
     */
    body?: string;
}

/**
 * Check if a given object implements the EmailHtmlDto interface.
 */
export function instanceOfEmailHtmlDto(value: object): value is EmailHtmlDto {
    return true;
}

export function EmailHtmlDtoFromJSON(json: any): EmailHtmlDto {
    return EmailHtmlDtoFromJSONTyped(json, false);
}

export function EmailHtmlDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailHtmlDto {
    if (json == null) {
        return json;
    }
    return {
        
        'subject': json['subject'] == null ? undefined : json['subject'],
        'body': json['body'] == null ? undefined : json['body'],
    };
}

export function EmailHtmlDtoToJSON(json: any): EmailHtmlDto {
    return EmailHtmlDtoToJSONTyped(json, false);
}

export function EmailHtmlDtoToJSONTyped(value?: EmailHtmlDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subject': value['subject'],
        'body': value['body'],
    };
}

