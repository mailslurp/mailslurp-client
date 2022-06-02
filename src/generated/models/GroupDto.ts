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
/**
 * Contact group data
 * @export
 * @interface GroupDto
 */
export interface GroupDto {
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
  /**
   *
   * @type {string}
   * @memberof GroupDto
   */
  description?: string;
  /**
   *
   * @type {Date}
   * @memberof GroupDto
   */
  createdAt: Date;
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
    id: json['id'],
    name: json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    createdAt: new Date(json['createdAt']),
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
    id: value.id,
    name: value.name,
    description: value.description,
    createdAt: value.createdAt.toISOString(),
  };
}
