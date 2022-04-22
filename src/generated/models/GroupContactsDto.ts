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

import { exists, mapValues } from '../runtime';
import {
  ContactDto,
  ContactDtoFromJSON,
  ContactDtoFromJSONTyped,
  ContactDtoToJSON,
  GroupDto,
  GroupDtoFromJSON,
  GroupDtoFromJSONTyped,
  GroupDtoToJSON,
} from './';

/**
 *
 * @export
 * @interface GroupContactsDto
 */
export interface GroupContactsDto {
  /**
   *
   * @type {GroupDto}
   * @memberof GroupContactsDto
   */
  group: GroupDto;
  /**
   *
   * @type {Array<ContactDto>}
   * @memberof GroupContactsDto
   */
  contacts: Array<ContactDto>;
}

export function GroupContactsDtoFromJSON(json: any): GroupContactsDto {
  return GroupContactsDtoFromJSONTyped(json, false);
}

export function GroupContactsDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GroupContactsDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    group: GroupDtoFromJSON(json['group']),
    contacts: (json['contacts'] as Array<any>).map(ContactDtoFromJSON),
  };
}

export function GroupContactsDtoToJSON(value?: GroupContactsDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    group: GroupDtoToJSON(value.group),
    contacts: (value.contacts as Array<any>).map(ContactDtoToJSON),
  };
}
