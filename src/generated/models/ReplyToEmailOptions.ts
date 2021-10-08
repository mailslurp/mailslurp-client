/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Options for replying to email with API
 * @export
 * @interface ReplyToEmailOptions
 */
export interface ReplyToEmailOptions {
  /**
   * List of uploaded attachments to send with the reply. Optional.
   * @type {Array<string>}
   * @memberof ReplyToEmailOptions
   */
  attachments?: Array<string>;
  /**
   * Body of the reply email you want to send
   * @type {string}
   * @memberof ReplyToEmailOptions
   */
  body?: string;
  /**
   * The charset that your message should be sent with. Optional. Default is UTF-8
   * @type {string}
   * @memberof ReplyToEmailOptions
   */
  charset?: string;
  /**
   * The from header that should be used. Optional
   * @type {string}
   * @memberof ReplyToEmailOptions
   */
  from?: string;
  /**
   * Is the reply HTML
   * @type {boolean}
   * @memberof ReplyToEmailOptions
   */
  isHTML?: boolean;
  /**
   * The replyTo header that should be used. Optional
   * @type {string}
   * @memberof ReplyToEmailOptions
   */
  replyTo?: string;
  /**
   * When to send the email. Typically immediately
   * @type {string}
   * @memberof ReplyToEmailOptions
   */
  sendStrategy?: ReplyToEmailOptionsSendStrategyEnum;
  /**
   * Template ID to use instead of body. Will use template variable map to fill defined variable slots.
   * @type {string}
   * @memberof ReplyToEmailOptions
   */
  template?: string;
  /**
   * Template variables if using a template
   * @type {object}
   * @memberof ReplyToEmailOptions
   */
  templateVariables?: object;
  /**
   * Optionally use inbox name as display name for sender email address
   * @type {boolean}
   * @memberof ReplyToEmailOptions
   */
  useInboxName?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum ReplyToEmailOptionsSendStrategyEnum {
  SINGLE_MESSAGE = 'SINGLE_MESSAGE',
}

export function ReplyToEmailOptionsFromJSON(json: any): ReplyToEmailOptions {
  return ReplyToEmailOptionsFromJSONTyped(json, false);
}

export function ReplyToEmailOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ReplyToEmailOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    attachments: !exists(json, 'attachments') ? undefined : json['attachments'],
    body: !exists(json, 'body') ? undefined : json['body'],
    charset: !exists(json, 'charset') ? undefined : json['charset'],
    from: !exists(json, 'from') ? undefined : json['from'],
    isHTML: !exists(json, 'isHTML') ? undefined : json['isHTML'],
    replyTo: !exists(json, 'replyTo') ? undefined : json['replyTo'],
    sendStrategy: !exists(json, 'sendStrategy')
      ? undefined
      : json['sendStrategy'],
    template: !exists(json, 'template') ? undefined : json['template'],
    templateVariables: !exists(json, 'templateVariables')
      ? undefined
      : json['templateVariables'],
    useInboxName: !exists(json, 'useInboxName')
      ? undefined
      : json['useInboxName'],
  };
}

export function ReplyToEmailOptionsToJSON(
  value?: ReplyToEmailOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    attachments: value.attachments,
    body: value.body,
    charset: value.charset,
    from: value.from,
    isHTML: value.isHTML,
    replyTo: value.replyTo,
    sendStrategy: value.sendStrategy,
    template: value.template,
    templateVariables: value.templateVariables,
    useInboxName: value.useInboxName,
  };
}
