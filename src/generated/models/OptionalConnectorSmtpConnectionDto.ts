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
import type { ConnectorSmtpConnectionDto } from './ConnectorSmtpConnectionDto';
import {
    ConnectorSmtpConnectionDtoFromJSON,
    ConnectorSmtpConnectionDtoFromJSONTyped,
    ConnectorSmtpConnectionDtoToJSON,
    ConnectorSmtpConnectionDtoToJSONTyped,
} from './ConnectorSmtpConnectionDto';

/**
 * 
 * @export
 * @interface OptionalConnectorSmtpConnectionDto
 */
export interface OptionalConnectorSmtpConnectionDto {
    /**
     * 
     * @type {boolean}
     * @memberof OptionalConnectorSmtpConnectionDto
     */
    present: boolean;
    /**
     * 
     * @type {ConnectorSmtpConnectionDto}
     * @memberof OptionalConnectorSmtpConnectionDto
     */
    result?: ConnectorSmtpConnectionDto;
}

/**
 * Check if a given object implements the OptionalConnectorSmtpConnectionDto interface.
 */
export function instanceOfOptionalConnectorSmtpConnectionDto(value: object): value is OptionalConnectorSmtpConnectionDto {
    if (!('present' in value) || value['present'] === undefined) return false;
    return true;
}

export function OptionalConnectorSmtpConnectionDtoFromJSON(json: any): OptionalConnectorSmtpConnectionDto {
    return OptionalConnectorSmtpConnectionDtoFromJSONTyped(json, false);
}

export function OptionalConnectorSmtpConnectionDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionalConnectorSmtpConnectionDto {
    if (json == null) {
        return json;
    }
    return {
        
        'present': json['present'],
        'result': json['result'] == null ? undefined : ConnectorSmtpConnectionDtoFromJSON(json['result']),
    };
}

export function OptionalConnectorSmtpConnectionDtoToJSON(json: any): OptionalConnectorSmtpConnectionDto {
    return OptionalConnectorSmtpConnectionDtoToJSONTyped(json, false);
}

export function OptionalConnectorSmtpConnectionDtoToJSONTyped(value?: OptionalConnectorSmtpConnectionDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'present': value['present'],
        'result': ConnectorSmtpConnectionDtoToJSON(value['result']),
    };
}

