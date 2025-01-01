/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
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
 *
 * @export
 * @interface ScheduledJobDto
 */
export interface ScheduledJobDto {
  /**
   *
   * @type {string}
   * @memberof ScheduledJobDto
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof ScheduledJobDto
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof ScheduledJobDto
   */
  inboxId: string;
  /**
   *
   * @type {string}
   * @memberof ScheduledJobDto
   */
  jobId: string;
  /**
   *
   * @type {string}
   * @memberof ScheduledJobDto
   */
  groupId: string;
  /**
   *
   * @type {string}
   * @memberof ScheduledJobDto
   */
  triggerId: string;
  /**
   *
   * @type {string}
   * @memberof ScheduledJobDto
   */
  status: ScheduledJobDtoStatusEnum;
  /**
   *
   * @type {Date}
   * @memberof ScheduledJobDto
   */
  sendAtTimestamp: Date;
  /**
   *
   * @type {Date}
   * @memberof ScheduledJobDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof ScheduledJobDto
   */
  updatedAt: Date;
}

/**
 * @export
 * @enum {string}
 */
export enum ScheduledJobDtoStatusEnum {
  SUBMITTED = 'SUBMITTED',
  COMPLETED = 'COMPLETED',
  ABORTED = 'ABORTED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

export function ScheduledJobDtoFromJSON(json: any): ScheduledJobDto {
  return ScheduledJobDtoFromJSONTyped(json, false);
}

export function ScheduledJobDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ScheduledJobDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json['id'],
    userId: json['userId'],
    inboxId: json['inboxId'],
    jobId: json['jobId'],
    groupId: json['groupId'],
    triggerId: json['triggerId'],
    status: json['status'],
    sendAtTimestamp: new Date(json['sendAtTimestamp']),
    createdAt: new Date(json['createdAt']),
    updatedAt: new Date(json['updatedAt']),
  };
}

export function ScheduledJobDtoToJSON(value?: ScheduledJobDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userId: value.userId,
    inboxId: value.inboxId,
    jobId: value.jobId,
    groupId: value.groupId,
    triggerId: value.triggerId,
    status: value.status,
    sendAtTimestamp: value.sendAtTimestamp.toISOString(),
    createdAt: value.createdAt.toISOString(),
    updatedAt: value.updatedAt.toISOString(),
  };
}
