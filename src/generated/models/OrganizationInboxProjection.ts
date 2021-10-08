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
 *
 * @export
 * @interface OrganizationInboxProjection
 */
export interface OrganizationInboxProjection {
  /**
   * When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.
   * @type {Date}
   * @memberof OrganizationInboxProjection
   */
  createdAt?: Date;
  /**
   * The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
   * @type {string}
   * @memberof OrganizationInboxProjection
   */
  emailAddress?: string;
  /**
   * Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering
   * @type {boolean}
   * @memberof OrganizationInboxProjection
   */
  favourite?: boolean;
  /**
   * ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.
   * @type {string}
   * @memberof OrganizationInboxProjection
   */
  id?: string;
  /**
   * Type of inbox - either HTTP (default) or SMTP. HTTP inboxes are great for testing. SMTP inboxes are processed by a custom SMTP mail server and are better for public facing inboxes that receive emails from Gmail and other large providers. If using a custom domain the domain type must match the inbox type. Use an SMTP domain for SMTP inboxes that includes an MX record pointing to `10 mx.mailslurp.com` for inbound messages.
   * @type {string}
   * @memberof OrganizationInboxProjection
   */
  inboxType?: OrganizationInboxProjectionInboxTypeEnum;
  /**
   * Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search
   * @type {string}
   * @memberof OrganizationInboxProjection
   */
  name?: string;
  /**
   * Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.
   * @type {boolean}
   * @memberof OrganizationInboxProjection
   */
  readOnly?: boolean;
  /**
   * Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
   * @type {Array<string>}
   * @memberof OrganizationInboxProjection
   */
  tags?: Array<string>;
  /**
   * Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/
   * @type {boolean}
   * @memberof OrganizationInboxProjection
   */
  teamAccess?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum OrganizationInboxProjectionInboxTypeEnum {
  HTTP_INBOX = 'HTTP_INBOX',
  SMTP_INBOX = 'SMTP_INBOX',
}

export function OrganizationInboxProjectionFromJSON(
  json: any
): OrganizationInboxProjection {
  return OrganizationInboxProjectionFromJSONTyped(json, false);
}

export function OrganizationInboxProjectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrganizationInboxProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    createdAt: !exists(json, 'createdAt')
      ? undefined
      : new Date(json['createdAt']),
    emailAddress: !exists(json, 'emailAddress')
      ? undefined
      : json['emailAddress'],
    favourite: !exists(json, 'favourite') ? undefined : json['favourite'],
    id: !exists(json, 'id') ? undefined : json['id'],
    inboxType: !exists(json, 'inboxType') ? undefined : json['inboxType'],
    name: !exists(json, 'name') ? undefined : json['name'],
    readOnly: !exists(json, 'readOnly') ? undefined : json['readOnly'],
    tags: !exists(json, 'tags') ? undefined : json['tags'],
    teamAccess: !exists(json, 'teamAccess') ? undefined : json['teamAccess'],
  };
}

export function OrganizationInboxProjectionToJSON(
  value?: OrganizationInboxProjection | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    createdAt:
      value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    emailAddress: value.emailAddress,
    favourite: value.favourite,
    id: value.id,
    inboxType: value.inboxType,
    name: value.name,
    readOnly: value.readOnly,
    tags: value.tags,
    teamAccess: value.teamAccess,
  };
}
