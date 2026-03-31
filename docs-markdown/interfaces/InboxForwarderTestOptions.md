[MailSlurp JS](../README.md) / InboxForwarderTestOptions

# Interface: InboxForwarderTestOptions

Options for testing an inbox forwarder against a value

**`Export`**

**`Interface`**

InboxForwarderTestOptions

## Table of contents

### Properties

- [emailId](InboxForwarderTestOptions.md#emailid)
- [testValue](InboxForwarderTestOptions.md#testvalue)

## Properties

### emailId

• `Optional` **emailId**: `string`

Optional email ID to evaluate the forwarder using full inbound email content (headers, recipients, and attachments).

**`Memberof`**

InboxForwarderTestOptions

___

### testValue

• `Optional` **testValue**: `string`

Simple value to test against the forwarder's simple field/match rule. Required when emailId is not provided.

**`Memberof`**

InboxForwarderTestOptions
