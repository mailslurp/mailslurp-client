[MailSlurp JS](../README.md) / JSONApiResponse

# Class: JSONApiResponse<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](JSONApiResponse.md#constructor)

### Properties

- [raw](JSONApiResponse.md#raw)
- [transformer](JSONApiResponse.md#transformer)

### Methods

- [value](JSONApiResponse.md#value)

## Constructors

### constructor

• **new JSONApiResponse**<`T`\>(`raw`, `transformer?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `Response` |
| `transformer` | [`ResponseTransformer`](../interfaces/ResponseTransformer.md)<`T`\> |

## Properties

### raw

• **raw**: `Response`

___

### transformer

• `Private` **transformer**: [`ResponseTransformer`](../interfaces/ResponseTransformer.md)<`T`\>

## Methods

### value

▸ **value**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>
