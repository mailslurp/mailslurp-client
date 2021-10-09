# Interface: SendEmailOptions

Options for sending an email message from an inbox. You must provide one of: `to`, `toGroup`, or `toContacts` to send an email. All other parameters are optional.

**`export`**

**`interface`** SendEmailOptions

## Table of contents

### Properties

- [addTrackingPixel](SendEmailOptions.md#addtrackingpixel)
- [attachments](SendEmailOptions.md#attachments)
- [bcc](SendEmailOptions.md#bcc)
- [body](SendEmailOptions.md#body)
- [cc](SendEmailOptions.md#cc)
- [charset](SendEmailOptions.md#charset)
- [from](SendEmailOptions.md#from)
- [html](SendEmailOptions.md#html)
- [isHTML](SendEmailOptions.md#ishtml)
- [replyTo](SendEmailOptions.md#replyto)
- [sendStrategy](SendEmailOptions.md#sendstrategy)
- [subject](SendEmailOptions.md#subject)
- [template](SendEmailOptions.md#template)
- [templateVariables](SendEmailOptions.md#templatevariables)
- [to](SendEmailOptions.md#to)
- [toContacts](SendEmailOptions.md#tocontacts)
- [toGroup](SendEmailOptions.md#togroup)
- [useInboxName](SendEmailOptions.md#useinboxname)

## Properties

### addTrackingPixel

• `Optional` **addTrackingPixel**: `boolean`

Add tracking pixel to email

**`memberof`** SendEmailOptions

___

### attachments

• `Optional` **attachments**: `string`[]

Optional list of attachment IDs to send with this email. You must first upload each attachment separately via method call or dashboard in order to obtain attachment IDs. This way you can reuse attachments with different emails once uploaded. There are several ways to upload that support `multi-part form`, `base64 file encoding`, and octet stream binary uploads. See the `UploadController` for available methods.

**`memberof`** SendEmailOptions

___

### bcc

• `Optional` **bcc**: `string`[]

Optional list of bcc destination email addresses

**`memberof`** SendEmailOptions

___

### body

• `Optional` **body**: `string`

Optional contents of email. If body contains HTML then set `isHTML` to true to ensure that email clients render it correctly. You can use moustache template syntax in the email body in conjunction with `toGroup` contact variables or `templateVariables` data. If you need more templating control consider creating a template and using the `template` property instead of the body.

**`memberof`** SendEmailOptions

___

### cc

• `Optional` **cc**: `string`[]

Optional list of cc destination email addresses

**`memberof`** SendEmailOptions

___

### charset

• `Optional` **charset**: `string`

Optional charset

**`memberof`** SendEmailOptions

___

### from

• `Optional` **from**: `string`

Optional from address. Email address is RFC 5322 format and may include a display name and email in angle brackets (`my@address.com` or `My inbox <my@address.com>`). If no sender is set the source inbox address will be used for this field. If you set `useInboxName` to `true` the from field will include the inbox name as a display name: `inbox_name <inbox@address.com>`. For this to work use the name field when creating an inbox. Beware of potential spam penalties when setting the from field to an address not used by the inbox. Your emails may get blocked by services if you impersonate another address. To use a custom email addresses use a custom domain. You can create domains with the DomainController. The domain must be verified in the dashboard before it can be used.

**`memberof`** SendEmailOptions

___

### html

• `Optional` **html**: `boolean`

Optional HTML flag to indicate that contents is HTML. Set's a `content-type: text/html` for email. (Deprecated: use `isHTML` instead.)

**`memberof`** SendEmailOptions

___

### isHTML

• `Optional` **isHTML**: `boolean`

Optional HTML flag. If true the `content-type` of the email will be `text/html`. Set to true when sending HTML to ensure proper rending on email clients

**`memberof`** SendEmailOptions

___

### replyTo

• `Optional` **replyTo**: `string`

Optional replyTo header

**`memberof`** SendEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [`SINGLE_MESSAGE`](../enums/SendEmailOptionsSendStrategyEnum.md#single_message)

Optional strategy to use when sending the email

**`memberof`** SendEmailOptions

___

### subject

• `Optional` **subject**: `string`

Optional email subject line

**`memberof`** SendEmailOptions

___

### template

• `Optional` **template**: `string`

Optional template ID to use for body. Will override body if provided. When using a template make sure you pass the corresponding map of `templateVariables`. You can find which variables are needed by fetching the template itself or viewing it in the dashboard.

**`memberof`** SendEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: `object`

Optional map of template variables. Will replace moustache syntax variables in subject and body or template with the associated values if found.

**`memberof`** SendEmailOptions

___

### to

• `Optional` **to**: `string`[]

List of destination email addresses. Each email address must be RFC 5322 format. Even single recipients must be in array form. Maximum recipients per email depends on your plan. If you need to send many emails try using contacts or contact groups or use a non standard sendStrategy to ensure that spam filters are not triggered (many recipients in one email can affect your spam rating). Be cautious when sending emails that your recipients exist. High bounce rates (meaning a high percentage of emails cannot be delivered because an address does not exist) can result in account freezing.

**`memberof`** SendEmailOptions

___

### toContacts

• `Optional` **toContacts**: `string`[]

Optional list of contact IDs to send email to. Manage your contacts via the API or dashboard. When contacts are used the email is sent to each contact separately so they will not see other recipients.

**`memberof`** SendEmailOptions

___

### toGroup

• `Optional` **toGroup**: `string`

Optional contact group ID to send email to. You can create contacts and contact groups in the API or dashboard and use them for email campaigns. When contact groups are used the email is sent to each contact separately so they will not see other recipients

**`memberof`** SendEmailOptions

___

### useInboxName

• `Optional` **useInboxName**: `boolean`

Use name of inbox as sender email address name. Will construct RFC 5322 email address with `Inbox name <inbox@address.com>` if the inbox has a name.

**`memberof`** SendEmailOptions
