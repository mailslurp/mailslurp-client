**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / SendEmailOptions

# Namespace: SendEmailOptions

**`export`** 

**`namespace`** SendEmailOptions

## Index

### Enumerations

* [SendStrategyEnum](../enums/sendemailoptions.sendstrategyenum.md)

### Properties

* [addTrackingPixel](sendemailoptions.md#addtrackingpixel)
* [attachments](sendemailoptions.md#attachments)
* [bcc](sendemailoptions.md#bcc)
* [body](sendemailoptions.md#body)
* [cc](sendemailoptions.md#cc)
* [charset](sendemailoptions.md#charset)
* [from](sendemailoptions.md#from)
* [html](sendemailoptions.md#html)
* [isHTML](sendemailoptions.md#ishtml)
* [replyTo](sendemailoptions.md#replyto)
* [sendStrategy](sendemailoptions.md#sendstrategy)
* [subject](sendemailoptions.md#subject)
* [template](sendemailoptions.md#template)
* [templateVariables](sendemailoptions.md#templatevariables)
* [to](sendemailoptions.md#to)
* [toContacts](sendemailoptions.md#tocontacts)
* [toGroup](sendemailoptions.md#togroup)
* [useInboxName](sendemailoptions.md#useinboxname)

## Properties

### addTrackingPixel

• `Optional` **addTrackingPixel**: boolean

*Defined in [src/generated/api.ts:4930](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4930)*

Add tracking pixel to email

**`memberof`** SendEmailOptions

___

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:4936](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4936)*

Optional list of attachment IDs to send with this email. You must first upload each attachment separately via method call or dashboard in order to obtain attachment IDs. This way you can reuse attachments with different emails once uploaded. There are several ways to upload that support `multi-part form`, `base64 file encoding`, and octet stream binary uploads. See the `UploadController` for available methods.

**`memberof`** SendEmailOptions

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:4942](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4942)*

Optional list of bcc destination email addresses

**`memberof`** SendEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:4948](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4948)*

Optional contents of email. If body contains HTML then set `isHTML` to true to ensure that email clients render it correctly. You can use moustache template syntax in the email body in conjunction with `toGroup` contact variables or `templateVariables` data. If you need more templating control consider creating a template and using the `template` property instead of the body.

**`memberof`** SendEmailOptions

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:4954](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4954)*

Optional list of cc destination email addresses

**`memberof`** SendEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:4960](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4960)*

Optional charset

**`memberof`** SendEmailOptions

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:4966](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4966)*

Optional from address. Email address is RFC 5322 format and may include a display name and email in angle brackets (`my@address.com` or `My inbox <my@address.com>`). If no sender is set the source inbox address will be used for this field. If you set `useInboxName` to `true` the from field will include the inbox name as a display name: `inbox_name <inbox@address.com>`. For this to work use the name field when creating an inbox. Beware of potential spam penalties when setting the from field to an address not used by the inbox. Your emails may get blocked by services if you impersonate another address. To use a custom email addresses use a custom domain. You can create domains with the DomainController. The domain must be verified in the dashboard before it can be used.

**`memberof`** SendEmailOptions

___

### html

• `Optional` **html**: boolean

*Defined in [src/generated/api.ts:4972](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4972)*

Optional HTML flag to indicate that contents is HTML. Set's a `content-type: text/html` for email. (Deprecated: use `isHTML` instead.)

**`memberof`** SendEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:4978](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4978)*

Optional HTML flag. If true the `content-type` of the email will be `text/html`. Set to true when sending HTML to ensure proper rending on email clients

**`memberof`** SendEmailOptions

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:4984](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4984)*

Optional replyTo header

**`memberof`** SendEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/sendemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:4990](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4990)*

Optional strategy to use when sending the email

**`memberof`** SendEmailOptions

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:4996](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L4996)*

Optional email subject line

**`memberof`** SendEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:5002](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5002)*

Optional template ID to use for body. Will override body if provided. When using a template make sure you pass the corresponding map of `templateVariables`. You can find which variables are needed by fetching the template itself or viewing it in the dashboard.

**`memberof`** SendEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:5008](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5008)*

Optional map of template variables. Will replace moustache syntax variables in subject and body or template with the associated values if found.

**`memberof`** SendEmailOptions

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:5014](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5014)*

List of destination email addresses. Each email address must be RFC 5322 format. Even single recipients must be in array form. Maximum recipients per email depends on your plan. If you need to send many emails try using contacts or contact groups or use a non standard sendStrategy to ensure that spam filters are not triggered (many recipients in one email can affect your spam rating). Be cautious when sending emails that your recipients exist. High bounce rates (meaning a high percentage of emails cannot be delivered because an address does not exist) can result in account freezing.

**`memberof`** SendEmailOptions

___

### toContacts

• `Optional` **toContacts**: Array\<string>

*Defined in [src/generated/api.ts:5020](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5020)*

Optional list of contact IDs to send email to. Manage your contacts via the API or dashboard. When contacts are used the email is sent to each contact separately so they will not see other recipients.

**`memberof`** SendEmailOptions

___

### toGroup

• `Optional` **toGroup**: string

*Defined in [src/generated/api.ts:5026](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5026)*

Optional contact group ID to send email to. You can create contacts and contact groups in the API or dashboard and use them for email campaigns. When contact groups are used the email is sent to each contact separately so they will not see other recipients

**`memberof`** SendEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: boolean

*Defined in [src/generated/api.ts:5032](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5032)*

Use name of inbox as sender email address name. Will construct RFC 5322 email address with `Inbox name <inbox@address.com>` if the inbox has a name.

**`memberof`** SendEmailOptions
