# Interface: BulkSendEmailOptions

Options for bulk sending an email from multiple addresses. See regular `sendEmail` methods for more information.

**`export`** 

**`interface`** BulkSendEmailOptions

## Hierarchy

* **BulkSendEmailOptions**

## Properties

### `Optional` inboxIds

• **inboxIds**? : *Array‹string›*

*Defined in [src/generated/api.ts:203](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L203)*

Inboxes to send the email from

**`type`** {Array<string>}

**`memberof`** BulkSendEmailOptions

___

### `Optional` sendEmailOptions

• **sendEmailOptions**? : *[SendEmailOptions](../modules/_generated_api_.sendemailoptions.md)*

*Defined in [src/generated/api.ts:209](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L209)*

Options for the email to be sent

**`type`** {SendEmailOptions}

**`memberof`** BulkSendEmailOptions
