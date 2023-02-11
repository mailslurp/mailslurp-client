[MailSlurp JS](../README.md) / Middleware

# Interface: Middleware

## Table of contents

### Methods

- [post](Middleware.md#post)
- [pre](Middleware.md#pre)

## Methods

### post

▸ `Optional` **post**(`context`): `Promise`<`void` \| `Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ResponseContext`](ResponseContext.md) |

#### Returns

`Promise`<`void` \| `Response`\>

___

### pre

▸ `Optional` **pre**(`context`): `Promise`<`void` \| [`FetchParams`](FetchParams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestContext`](RequestContext.md) |

#### Returns

`Promise`<`void` \| [`FetchParams`](FetchParams.md)\>
