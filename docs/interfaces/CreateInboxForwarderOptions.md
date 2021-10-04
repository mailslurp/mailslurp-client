[MailSlurp JS](../README.md) / CreateInboxForwarderOptions

# Interface: CreateInboxForwarderOptions

Options for creating an inbox forwarder

**`export`**

**`interface`** CreateInboxForwarderOptions

## Table of contents

### Properties

- [field](CreateInboxForwarderOptions.md#field)
- [forwardToRecipients](CreateInboxForwarderOptions.md#forwardtorecipients)
- [match](CreateInboxForwarderOptions.md#match)

## Properties

### field

• `Optional` **field**: [`FieldEnum`](../enums/CreateInboxForwarderOptions.FieldEnum.md)

Field to match against to trigger inbox forwarding for inbound email

**`memberof`** CreateInboxForwarderOptions

#### Defined in

[src/generated/api.ts:1043](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1043)

___

### forwardToRecipients

• `Optional` **forwardToRecipients**: `string`[]

Email addresses to forward an email to if it matches the field and match criteria of the forwarder

**`memberof`** CreateInboxForwarderOptions

#### Defined in

[src/generated/api.ts:1049](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1049)

___

### match

• `Optional` **match**: `string`

String or wildcard style match for field specified when evaluating forwarding rules

**`memberof`** CreateInboxForwarderOptions

#### Defined in

[src/generated/api.ts:1055](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1055)
