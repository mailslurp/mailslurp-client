[MailSlurp JS](../README.md) / WaitForAIMessagesOptions

# Interface: WaitForAIMessagesOptions

Wait for every named delivery expectation across inboxes and phones using one shared timeout and token budget. A message cannot satisfy multiple expectations unless allowSharedMessages is true.

**`Export`**

**`Interface`**

WaitForAIMessagesOptions

## Table of contents

### Properties

- [aiOptions](WaitForAIMessagesOptions.md#aioptions)
- [allowSharedMessages](WaitForAIMessagesOptions.md#allowsharedmessages)
- [before](WaitForAIMessagesOptions.md#before)
- [expectations](WaitForAIMessagesOptions.md#expectations)
- [since](WaitForAIMessagesOptions.md#since)
- [timeout](WaitForAIMessagesOptions.md#timeout)

## Properties

### aiOptions

• **aiOptions**: [`AIMessageAIOptions`](AIMessageAIOptions.md)

**`Memberof`**

WaitForAIMessagesOptions

___

### allowSharedMessages

• **allowSharedMessages**: `boolean`

**`Memberof`**

WaitForAIMessagesOptions

___

### before

• `Optional` **before**: `Date`

**`Memberof`**

WaitForAIMessagesOptions

___

### expectations

• **expectations**: [`AIMessageExpectation`](AIMessageExpectation.md)[]

**`Memberof`**

WaitForAIMessagesOptions

___

### since

• **since**: `Date`

**`Memberof`**

WaitForAIMessagesOptions

___

### timeout

• **timeout**: `number`

**`Memberof`**

WaitForAIMessagesOptions
