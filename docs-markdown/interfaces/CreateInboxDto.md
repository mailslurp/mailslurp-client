[MailSlurp JS](../README.md) / CreateInboxDto

# Interface: CreateInboxDto

Options for creating an inbox. An inbox has a real email address that can send and receive emails. Inboxes can be permanent or expire at a given time. Inboxes are either `SMTP` or `HTTP` mailboxes. `SMTP` inboxes are processed by a mail server running at `mailslurp.mx` while `HTTP` inboxes are processed by AWS SES backed mailservers. An inbox email address is randomly assigned by default ending in either `mailslurp.com` or (if `useDomainPool` is enabled) ending in a similar domain such as `mailslurp.xyz` (selected at random). To specify an address use a custom domain: either pass the `emailAddress` options with `<your-recipient>@<your-domain>`. To create a randomized address for your domain set the `domainName` to the domain you have verified or pass the `domainId`. Virtual inboxes prevent outbound sending and instead trap mail.

**`Export`**

**`Interface`**

CreateInboxDto

## Table of contents

### Properties

- [allowTeamAccess](CreateInboxDto.md#allowteamaccess)
- [description](CreateInboxDto.md#description)
- [domainId](CreateInboxDto.md#domainid)
- [domainName](CreateInboxDto.md#domainname)
- [emailAddress](CreateInboxDto.md#emailaddress)
- [expiresAt](CreateInboxDto.md#expiresat)
- [expiresIn](CreateInboxDto.md#expiresin)
- [favourite](CreateInboxDto.md#favourite)
- [inboxType](CreateInboxDto.md#inboxtype)
- [name](CreateInboxDto.md#name)
- [plusAddressing](CreateInboxDto.md#plusaddressing)
- [prefix](CreateInboxDto.md#prefix)
- [tags](CreateInboxDto.md#tags)
- [useDomainPool](CreateInboxDto.md#usedomainpool)
- [useShortAddress](CreateInboxDto.md#useshortaddress)
- [virtualInbox](CreateInboxDto.md#virtualinbox)

## Properties

### allowTeamAccess

• `Optional` **allowTeamAccess**: `boolean`

DEPRECATED (team access is always true). Grant team access to this inbox and the emails that belong to it for team members of your organization.

**`Memberof`**

CreateInboxDto

___

### description

• `Optional` **description**: `string`

Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with

**`Memberof`**

CreateInboxDto

___

### domainId

• `Optional` **domainId**: `string`

ID of custom domain to use for email address.

**`Memberof`**

CreateInboxDto

___

### domainName

• `Optional` **domainName**: `string`

FQDN domain name for the domain you have verified. Will be appended with a randomly assigned recipient name. Use the `emailAddress` option instead to specify the full custom inbox.

**`Memberof`**

CreateInboxDto

___

### emailAddress

• `Optional` **emailAddress**: `string`

A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as `123@mailslurp.com`. If you use the `useDomainPool` option when the email address is null it will generate an email address with a more varied domain ending such as `123@mailslurp.info` or `123@mailslurp.biz`. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Note domain types must match the inbox type - so `SMTP` inboxes will only work with `SMTP` type domains. Avoid `SMTP` inboxes if you need to send emails as they can only receive. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`Memberof`**

CreateInboxDto

___

### expiresAt

• `Optional` **expiresAt**: `Date`

Optional inbox expiration date. If null then this inbox is permanent and the emails in it won't be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd'T'HH:mm:ss.SSSXXX.

**`Memberof`**

CreateInboxDto

___

### expiresIn

• `Optional` **expiresIn**: `number`

Number of milliseconds that inbox should exist for

**`Memberof`**

CreateInboxDto

___

### favourite

• `Optional` **favourite**: `boolean`

Is the inbox a favorite. Marking an inbox as a favorite is typically done in the dashboard for quick access or filtering

**`Memberof`**

CreateInboxDto

___

### inboxType

• `Optional` **inboxType**: [`CreateInboxDtoInboxTypeEnum`](../enums/CreateInboxDtoInboxTypeEnum.md)

Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).

**`Memberof`**

CreateInboxDto

___

### name

• `Optional` **name**: `string`

Optional name of the inbox. Displayed in the dashboard for easier search and used as the sender name when sending emails.

**`Memberof`**

CreateInboxDto

___

### plusAddressing

• `Optional` **plusAddressing**: `boolean`

Allow subaddressing or plus addressing with this inbox so that emails sent to the address with a + suffix redirect to this inbox

**`Memberof`**

CreateInboxDto

___

### prefix

• `Optional` **prefix**: `string`

Prefix to add before the email address for easier labelling or identification.

**`Memberof`**

CreateInboxDto

___

### tags

• `Optional` **tags**: `string`[]

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`Memberof`**

CreateInboxDto

___

### useDomainPool

• `Optional` **useDomainPool**: `boolean`

Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default `@mailslurp.com` email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in `@mailslurp.{world,info,xyz,...}` . This means a TLD is randomly selecting from a list of `.biz`, `.info`, `.xyz` etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of `@mailslurp.com` or custom email address provided by the emailAddress field. Note this feature is only available for `HTTP` inbox types.

**`Memberof`**

CreateInboxDto

___

### useShortAddress

• `Optional` **useShortAddress**: `boolean`

Use a shorter email address under 31 characters

**`Memberof`**

CreateInboxDto

___

### virtualInbox

• `Optional` **virtualInbox**: `boolean`

Virtual inbox prevents any outbound emails from being sent. It creates sent email records but will never send real emails to recipients. Great for testing and faking email sending.

**`Memberof`**

CreateInboxDto
