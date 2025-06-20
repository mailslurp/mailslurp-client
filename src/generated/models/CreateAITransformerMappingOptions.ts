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
 * @interface CreateAITransformerMappingOptions
 */
export interface CreateAITransformerMappingOptions {
  /**
   *
   * @type {string}
   * @memberof CreateAITransformerMappingOptions
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CreateAITransformerMappingOptions
   */
  aiTransformId: string;
  /**
   *
   * @type {string}
   * @memberof CreateAITransformerMappingOptions
   */
  entityId: string;
  /**
   *
   * @type {string}
   * @memberof CreateAITransformerMappingOptions
   */
  entityType: CreateAITransformerMappingOptionsEntityTypeEnum;
  /**
   *
   * @type {string}
   * @memberof CreateAITransformerMappingOptions
   */
  contentSelector?: CreateAITransformerMappingOptionsContentSelectorEnum;
  /**
   *
   * @type {string}
   * @memberof CreateAITransformerMappingOptions
   */
  triggerSelector?: CreateAITransformerMappingOptionsTriggerSelectorEnum;
  /**
   *
   * @type {boolean}
   * @memberof CreateAITransformerMappingOptions
   */
  spreadRootArray?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum CreateAITransformerMappingOptionsEntityTypeEnum {
  INBOX = 'INBOX',
  PHONE = 'PHONE',
}
/**
 * @export
 * @enum {string}
 */
export enum CreateAITransformerMappingOptionsContentSelectorEnum {
  RAW = 'RAW',
  BODY = 'BODY',
  BODY_ATTACHMENTS = 'BODY_ATTACHMENTS',
}
/**
 * @export
 * @enum {string}
 */
export enum CreateAITransformerMappingOptionsTriggerSelectorEnum {
  MESSAGE = 'PER_MESSAGE',
  ATTACHMENT = 'PER_ATTACHMENT',
}

export function CreateAITransformerMappingOptionsFromJSON(
  json: any
): CreateAITransformerMappingOptions {
  return CreateAITransformerMappingOptionsFromJSONTyped(json, false);
}

export function CreateAITransformerMappingOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateAITransformerMappingOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
    aiTransformId: json['aiTransformId'],
    entityId: json['entityId'],
    entityType: json['entityType'],
    contentSelector: !exists(json, 'contentSelector')
      ? undefined
      : json['contentSelector'],
    triggerSelector: !exists(json, 'triggerSelector')
      ? undefined
      : json['triggerSelector'],
    spreadRootArray: !exists(json, 'spreadRootArray')
      ? undefined
      : json['spreadRootArray'],
  };
}

export function CreateAITransformerMappingOptionsToJSON(
  value?: CreateAITransformerMappingOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    aiTransformId: value.aiTransformId,
    entityId: value.entityId,
    entityType: value.entityType,
    contentSelector: value.contentSelector,
    triggerSelector: value.triggerSelector,
    spreadRootArray: value.spreadRootArray,
  };
}
