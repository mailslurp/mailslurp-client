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

### Methods

- [value](JSONApiResponse.md#value)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

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

### <a id="raw" name="raw"></a> raw

• **raw**: `Response`

## Methods

### <a id="value" name="value"></a> value

▸ **value**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>
