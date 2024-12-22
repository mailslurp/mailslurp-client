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
import type { DomainGroup } from './DomainGroup';
import {
    DomainGroupFromJSON,
    DomainGroupFromJSONTyped,
    DomainGroupToJSON,
    DomainGroupToJSONTyped,
} from './DomainGroup';

/**
 * 
 * @export
 * @interface DomainGroupsDto
 */
export interface DomainGroupsDto {
    /**
     * 
     * @type {Array<DomainGroup>}
     * @memberof DomainGroupsDto
     */
    domainGroups: Array<DomainGroup>;
}

/**
 * Check if a given object implements the DomainGroupsDto interface.
 */
export function instanceOfDomainGroupsDto(value: object): value is DomainGroupsDto {
    if (!('domainGroups' in value) || value['domainGroups'] === undefined) return false;
    return true;
}

export function DomainGroupsDtoFromJSON(json: any): DomainGroupsDto {
    return DomainGroupsDtoFromJSONTyped(json, false);
}

export function DomainGroupsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainGroupsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'domainGroups': ((json['domainGroups'] as Array<any>).map(DomainGroupFromJSON)),
    };
}

export function DomainGroupsDtoToJSON(json: any): DomainGroupsDto {
    return DomainGroupsDtoToJSONTyped(json, false);
}

export function DomainGroupsDtoToJSONTyped(value?: DomainGroupsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'domainGroups': ((value['domainGroups'] as Array<any>).map(DomainGroupToJSON)),
    };
}

