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
 * @interface EmptyResponseDto
 */
export interface EmptyResponseDto {
    /**
     * 
     * @type {string}
     * @memberof EmptyResponseDto
     */
    message?: string;
}

/**
 * Check if a given object implements the EmptyResponseDto interface.
 */
export function instanceOfEmptyResponseDto(value: object): value is EmptyResponseDto {
    return true;
}

export function EmptyResponseDtoFromJSON(json: any): EmptyResponseDto {
    return EmptyResponseDtoFromJSONTyped(json, false);
}

export function EmptyResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmptyResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function EmptyResponseDtoToJSON(json: any): EmptyResponseDto {
    return EmptyResponseDtoToJSONTyped(json, false);
}

export function EmptyResponseDtoToJSONTyped(value?: EmptyResponseDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

