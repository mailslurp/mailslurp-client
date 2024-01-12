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
 * Meta data associated with an attachment. Attachments are stored as byte blobs so the meta data is stored separately.
 * @export
 * @interface AttachmentMetaData
 */
export interface AttachmentMetaData {
  /**
   * Name of attachment if given
   * @type {string}
   * @memberof AttachmentMetaData
   */
  name: string;
  /**
   * Content type of attachment such as `image/png`
   * @type {string}
   * @memberof AttachmentMetaData
   */
  contentType: string;
  /**
   * Size of attachment in bytes
   * @type {number}
   * @memberof AttachmentMetaData
   */
  contentLength: number;
  /**
   * ID of attachment. Can be used to with attachment controller endpoints to download attachment or with sending methods to attach to an email.
   * @type {string}
   * @memberof AttachmentMetaData
   */
  id: string;
  /**
   * CID of attachment
   * @type {string}
   * @memberof AttachmentMetaData
   */
  contentId?: string | null;
}

export function AttachmentMetaDataFromJSON(json: any): AttachmentMetaData {
  return AttachmentMetaDataFromJSONTyped(json, false);
}

export function AttachmentMetaDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AttachmentMetaData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
    contentType: json['contentType'],
    contentLength: json['contentLength'],
    id: json['id'],
    contentId: !exists(json, 'contentId') ? undefined : json['contentId'],
  };
}

export function AttachmentMetaDataToJSON(
  value?: AttachmentMetaData | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    contentType: value.contentType,
    contentLength: value.contentLength,
    id: value.id,
    contentId: value.contentId,
  };
}
