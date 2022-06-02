# Interface: Middleware

## Table of contents

### Methods

- [post](Middleware.md#post)
- [pre](Middleware.md#pre)

## Methods

### <a id="post" name="post"></a> post

▸ `Optional` **post**(`context`): `Promise`<`void` \| `Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ResponseContext`](ResponseContext.md) |

#### Returns

`Promise`<`void` \| `Response`\>

___

### <a id="pre" name="pre"></a> pre

▸ `Optional` **pre**(`context`): `Promise`<`void` \| [`FetchParams`](FetchParams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestContext`](RequestContext.md) |

#### Returns

`Promise`<`void` \| [`FetchParams`](FetchParams.md)\>
