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
 * Create email alias options. Email aliases can be used to mask real email addresses behind an ID. You can also attach an inbox to an alias so that any email received by the inbox email address if forwarded to the alias email address.
 * @export
 * @interface CreateAliasOptions
 */
export interface CreateAliasOptions {
  /**
   * Email address to be hidden behind alias. Emails sent to the alias email address will be forwarded to this address. If you want to enable replies set useThreads true and the reply-to for the email will allow outbound communication via a thread.
   * @type {string}
   * @memberof CreateAliasOptions
   */
  emailAddress?: string;
  /**
   * Optional inbox ID to attach to alias. Null by default means an a new inbox will be created for the alias. Use a custom inbox to control what email address the alias uses. To use custom email addresses create a domain and an inbox, the use the inbox ID with this call. Emails received by this inbox will be forwarded to the alias email address
   * @type {string}
   * @memberof CreateAliasOptions
   */
  inboxId?: string;
  /**
   * Optional name for alias
   * @type {string}
   * @memberof CreateAliasOptions
   */
  name?: string;
  /**
   * Enable threads options. If true emails will be sent with a unique reply-to thread address. This means you can reply to the forwarded email and it will be sent to the recipients via your alias address. That way a thread conversation is preserved.
   * @type {boolean}
   * @memberof CreateAliasOptions
   */
  useThreads?: boolean;
}

export function CreateAliasOptionsFromJSON(json: any): CreateAliasOptions {
  return CreateAliasOptionsFromJSONTyped(json, false);
}

export function CreateAliasOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateAliasOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    emailAddress: !exists(json, 'emailAddress')
      ? undefined
      : json['emailAddress'],
    inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
    name: !exists(json, 'name') ? undefined : json['name'],
    useThreads: !exists(json, 'useThreads') ? undefined : json['useThreads'],
  };
}

export function CreateAliasOptionsToJSON(
  value?: CreateAliasOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    emailAddress: value.emailAddress,
    inboxId: value.inboxId,
    name: value.name,
    useThreads: value.useThreads,
  };
}
