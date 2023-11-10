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
 * Options for the email to be sent
 * @export
 * @interface SendEmailOptions
 */
export interface SendEmailOptions {
  /**
   * Optional list of contact IDs to send email to. Manage your contacts via the API or dashboard. When contacts are used the email is sent to each contact separately so they will not see other recipients.
   * @type {Array<string>}
   * @memberof SendEmailOptions
   */
  toContacts?: Array<string> | null;
  /**
   * Optional contact group ID to send email to. You can create contacts and contact groups in the API or dashboard and use them for email campaigns. When contact groups are used the email is sent to each contact separately so they will not see other recipients
   * @type {string}
   * @memberof SendEmailOptions
   */
  toGroup?: string | null;
  /**
   * List of destination email addresses. Each email address must be RFC 5322 format. Even single recipients must be in array form. Maximum recipients per email depends on your plan. If you need to send many emails try using contacts or contact groups or use a non standard sendStrategy to ensure that spam filters are not triggered (many recipients in one email can affect your spam rating). Be cautious when sending emails that your recipients exist. High bounce rates (meaning a high percentage of emails cannot be delivered because an address does not exist) can result in account freezing.
   * @type {Array<string>}
   * @memberof SendEmailOptions
   */
  to?: Array<string> | null;
  /**
   * Optional from address. Email address is RFC 5322 format and may include a display name and email in angle brackets (`my@address.com` or `My inbox <my@address.com>`). If no sender is set the source inbox address will be used for this field. If you set `useInboxName` to `true` the from field will include the inbox name as a display name: `inbox_name <inbox@address.com>`. For this to work use the name field when creating an inbox. Beware of potential spam penalties when setting the from field to an address not used by the inbox. Your emails may get blocked by services if you impersonate another address. To use a custom email addresses use a custom domain. You can create domains with the DomainController. The domain must be verified in the dashboard before it can be used.
   * @type {string}
   * @memberof SendEmailOptions
   */
  from?: string | null;
  /**
   * Optional list of cc destination email addresses
   * @type {Array<string>}
   * @memberof SendEmailOptions
   */
  cc?: Array<string> | null;
  /**
   * Optional list of bcc destination email addresses
   * @type {Array<string>}
   * @memberof SendEmailOptions
   */
  bcc?: Array<string> | null;
  /**
   * Optional email subject line
   * @type {string}
   * @memberof SendEmailOptions
   */
  subject?: string | null;
  /**
   * Optional replyTo header
   * @type {string}
   * @memberof SendEmailOptions
   */
  replyTo?: string | null;
  /**
   * Optional custom headers
   * @type {{ [key: string]: string; }}
   * @memberof SendEmailOptions
   */
  customHeaders?: { [key: string]: string } | null;
  /**
   * Optional contents of email. If body contains HTML then set `isHTML` to true to ensure that email clients render it correctly. You can use moustache template syntax in the email body in conjunction with `toGroup` contact variables or `templateVariables` data. If you need more templating control consider creating a template and using the `template` property instead of the body.
   * @type {string}
   * @memberof SendEmailOptions
   */
  body?: string | null;
  /**
   * Optional HTML flag to indicate that contents is HTML. Set's a `content-type: text/html` for email. (Deprecated: use `isHTML` instead.)
   * @type {boolean}
   * @memberof SendEmailOptions
   */
  html?: boolean | null;
  /**
   * Optional HTML flag. If true the `content-type` of the email will be `text/html`. Set to true when sending HTML to ensure proper rending on email clients
   * @type {boolean}
   * @memberof SendEmailOptions
   */
  isHTML?: boolean | null;
  /**
   * Optional charset
   * @type {string}
   * @memberof SendEmailOptions
   */
  charset?: string | null;
  /**
   * Optional list of attachment IDs to send with this email. You must first upload each attachment separately via method call or dashboard in order to obtain attachment IDs. This way you can reuse attachments with different emails once uploaded. There are several ways to upload that support `multi-part form`, `base64 file encoding`, and octet stream binary uploads. See the `UploadController` for available methods.
   * @type {Array<string>}
   * @memberof SendEmailOptions
   */
  attachments?: Array<string> | null;
  /**
   * Optional map of template variables. Will replace moustache syntax variables in subject and body or template with the associated values if found.
   * @type {{ [key: string]: object; }}
   * @memberof SendEmailOptions
   */
  templateVariables?: { [key: string]: object } | null;
  /**
   * Optional template ID to use for body. Will override body if provided. When using a template make sure you pass the corresponding map of `templateVariables`. You can find which variables are needed by fetching the template itself or viewing it in the dashboard.
   * @type {string}
   * @memberof SendEmailOptions
   */
  template?: string | null;
  /**
   * How an email should be sent based on its recipients
   * @type {string}
   * @memberof SendEmailOptions
   */
  sendStrategy?: SendEmailOptionsSendStrategyEnum;
  /**
   * Use name of inbox as sender email address name. Will construct RFC 5322 email address with `Inbox name <inbox@address.com>` if the inbox has a name.
   * @type {boolean}
   * @memberof SendEmailOptions
   */
  useInboxName?: boolean | null;
  /**
   * Add tracking pixel to email
   * @type {boolean}
   * @memberof SendEmailOptions
   */
  addTrackingPixel?: boolean | null;
  /**
   * Filter recipients to remove any bounced recipients from to, bcc, and cc before sending
   * @type {boolean}
   * @memberof SendEmailOptions
   */
  filterBouncedRecipients?: boolean | null;
  /**
   * Validate recipient email addresses before sending
   * @type {string}
   * @memberof SendEmailOptions
   */
  validateEmailAddresses?: SendEmailOptionsValidateEmailAddressesEnum;
  /**
   * Ignore empty recipients after validation removes all recipients as invalid and fail silently
   * @type {boolean}
   * @memberof SendEmailOptions
   */
  ignoreEmptyRecipients?: boolean | null;
}

/**
 * @export
 * @enum {string}
 */
export enum SendEmailOptionsSendStrategyEnum {
  SINGLE_MESSAGE = 'SINGLE_MESSAGE',
}
/**
 * @export
 * @enum {string}
 */
export enum SendEmailOptionsValidateEmailAddressesEnum {
  VALIDATE_FILTER_REMOVE_INVALID = 'VALIDATE_FILTER_REMOVE_INVALID',
  VALIDATE_ERROR_IF_INVALID = 'VALIDATE_ERROR_IF_INVALID',
  NO_VALIDATION = 'NO_VALIDATION',
}

export function SendEmailOptionsFromJSON(json: any): SendEmailOptions {
  return SendEmailOptionsFromJSONTyped(json, false);
}

export function SendEmailOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SendEmailOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    toContacts: !exists(json, 'toContacts') ? undefined : json['toContacts'],
    toGroup: !exists(json, 'toGroup') ? undefined : json['toGroup'],
    to: !exists(json, 'to') ? undefined : json['to'],
    from: !exists(json, 'from') ? undefined : json['from'],
    cc: !exists(json, 'cc') ? undefined : json['cc'],
    bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    replyTo: !exists(json, 'replyTo') ? undefined : json['replyTo'],
    customHeaders: !exists(json, 'customHeaders')
      ? undefined
      : json['customHeaders'],
    body: !exists(json, 'body') ? undefined : json['body'],
    html: !exists(json, 'html') ? undefined : json['html'],
    isHTML: !exists(json, 'isHTML') ? undefined : json['isHTML'],
    charset: !exists(json, 'charset') ? undefined : json['charset'],
    attachments: !exists(json, 'attachments') ? undefined : json['attachments'],
    templateVariables: !exists(json, 'templateVariables')
      ? undefined
      : json['templateVariables'],
    template: !exists(json, 'template') ? undefined : json['template'],
    sendStrategy: !exists(json, 'sendStrategy')
      ? undefined
      : json['sendStrategy'],
    useInboxName: !exists(json, 'useInboxName')
      ? undefined
      : json['useInboxName'],
    addTrackingPixel: !exists(json, 'addTrackingPixel')
      ? undefined
      : json['addTrackingPixel'],
    filterBouncedRecipients: !exists(json, 'filterBouncedRecipients')
      ? undefined
      : json['filterBouncedRecipients'],
    validateEmailAddresses: !exists(json, 'validateEmailAddresses')
      ? undefined
      : json['validateEmailAddresses'],
    ignoreEmptyRecipients: !exists(json, 'ignoreEmptyRecipients')
      ? undefined
      : json['ignoreEmptyRecipients'],
  };
}

export function SendEmailOptionsToJSON(value?: SendEmailOptions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    toContacts: value.toContacts,
    toGroup: value.toGroup,
    to: value.to,
    from: value.from,
    cc: value.cc,
    bcc: value.bcc,
    subject: value.subject,
    replyTo: value.replyTo,
    customHeaders: value.customHeaders,
    body: value.body,
    html: value.html,
    isHTML: value.isHTML,
    charset: value.charset,
    attachments: value.attachments,
    templateVariables: value.templateVariables,
    template: value.template,
    sendStrategy: value.sendStrategy,
    useInboxName: value.useInboxName,
    addTrackingPixel: value.addTrackingPixel,
    filterBouncedRecipients: value.filterBouncedRecipients,
    validateEmailAddresses: value.validateEmailAddresses,
    ignoreEmptyRecipients: value.ignoreEmptyRecipients,
  };
}
