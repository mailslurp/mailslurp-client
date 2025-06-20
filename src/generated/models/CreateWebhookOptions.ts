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
import {
  BasicAuthOptions,
  BasicAuthOptionsFromJSON,
  BasicAuthOptionsFromJSONTyped,
  BasicAuthOptionsToJSON,
  WebhookHeaders,
  WebhookHeadersFromJSON,
  WebhookHeadersFromJSONTyped,
  WebhookHeadersToJSON,
} from './';

/**
 * Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the webhook's event is triggered. Webhooks are great for processing many inbound emails and responding to other events at scale. Customize the payload sent to your endpoint by setting the `requestBodyTemplate` property to a string with moustache style variables. Property names from the standard payload model for the given event are available as variables.
 * @export
 * @interface CreateWebhookOptions
 */
export interface CreateWebhookOptions {
  /**
   * Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received or an event is trigger. The payload of the submitted JSON is dependent on the webhook event type. See docs.mailslurp.com/webhooks for event payload documentation.
   * @type {string}
   * @memberof CreateWebhookOptions
   */
  url: string;
  /**
   *
   * @type {BasicAuthOptions}
   * @memberof CreateWebhookOptions
   */
  basicAuth?: BasicAuthOptions | null;
  /**
   * Optional name for the webhook
   * @type {string}
   * @memberof CreateWebhookOptions
   */
  name?: string | null;
  /**
   * Optional webhook event name. Default is `EMAIL_RECEIVED` and is triggered when an email is received by the inbox associated with the webhook. Payload differ according to the webhook event name.
   * @type {string}
   * @memberof CreateWebhookOptions
   */
  eventName?: CreateWebhookOptionsEventNameEnum;
  /**
   *
   * @type {WebhookHeaders}
   * @memberof CreateWebhookOptions
   */
  includeHeaders?: WebhookHeaders;
  /**
   * Template for the JSON body of the webhook request that will be sent to your server. Use Moustache style `{{variableName}}` templating to use parts of the standard webhook payload for the given event.
   * @type {string}
   * @memberof CreateWebhookOptions
   */
  requestBodyTemplate?: string | null;
  /**
   * AI Transform ID to apply to the webhook event and send a payload matching transform output schema
   * @type {string}
   * @memberof CreateWebhookOptions
   */
  aiTransformId?: string | null;
  /**
   * Use static IP range when calling webhook endpoint
   * @type {boolean}
   * @memberof CreateWebhookOptions
   */
  useStaticIpRange?: boolean | null;
  /**
   * Ignore insecure SSL certificates when sending request. Useful for self-signed certs.
   * @type {boolean}
   * @memberof CreateWebhookOptions
   */
  ignoreInsecureSslCertificates?: boolean | null;
  /**
   * Optional list of tags
   * @type {Array<string>}
   * @memberof CreateWebhookOptions
   */
  tags?: Array<string> | null;
}

/**
 * @export
 * @enum {string}
 */
export enum CreateWebhookOptionsEventNameEnum {
  EMAIL_RECEIVED = 'EMAIL_RECEIVED',
  NEW_EMAIL = 'NEW_EMAIL',
  NEW_CONTACT = 'NEW_CONTACT',
  NEW_ATTACHMENT = 'NEW_ATTACHMENT',
  EMAIL_OPENED = 'EMAIL_OPENED',
  EMAIL_READ = 'EMAIL_READ',
  DELIVERY_STATUS = 'DELIVERY_STATUS',
  BOUNCE = 'BOUNCE',
  BOUNCE_RECIPIENT = 'BOUNCE_RECIPIENT',
  NEW_SMS = 'NEW_SMS',
  NEW_GUEST_USER = 'NEW_GUEST_USER',
}

export function CreateWebhookOptionsFromJSON(json: any): CreateWebhookOptions {
  return CreateWebhookOptionsFromJSONTyped(json, false);
}

export function CreateWebhookOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateWebhookOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    url: json['url'],
    basicAuth: !exists(json, 'basicAuth')
      ? undefined
      : BasicAuthOptionsFromJSON(json['basicAuth']),
    name: !exists(json, 'name') ? undefined : json['name'],
    eventName: !exists(json, 'eventName') ? undefined : json['eventName'],
    includeHeaders: !exists(json, 'includeHeaders')
      ? undefined
      : WebhookHeadersFromJSON(json['includeHeaders']),
    requestBodyTemplate: !exists(json, 'requestBodyTemplate')
      ? undefined
      : json['requestBodyTemplate'],
    aiTransformId: !exists(json, 'aiTransformId')
      ? undefined
      : json['aiTransformId'],
    useStaticIpRange: !exists(json, 'useStaticIpRange')
      ? undefined
      : json['useStaticIpRange'],
    ignoreInsecureSslCertificates: !exists(
      json,
      'ignoreInsecureSslCertificates'
    )
      ? undefined
      : json['ignoreInsecureSslCertificates'],
    tags: !exists(json, 'tags') ? undefined : json['tags'],
  };
}

export function CreateWebhookOptionsToJSON(
  value?: CreateWebhookOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    url: value.url,
    basicAuth: BasicAuthOptionsToJSON(value.basicAuth),
    name: value.name,
    eventName: value.eventName,
    includeHeaders: WebhookHeadersToJSON(value.includeHeaders),
    requestBodyTemplate: value.requestBodyTemplate,
    aiTransformId: value.aiTransformId,
    useStaticIpRange: value.useStaticIpRange,
    ignoreInsecureSslCertificates: value.ignoreInsecureSslCertificates,
    tags: value.tags,
  };
}
