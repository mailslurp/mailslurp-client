[MailSlurp JS](../README.md) / RequiredError

# Class: RequiredError

**`export`**

## Hierarchy

- `Error`

  ↳ **`RequiredError`**

## Table of contents

### Constructors

- [constructor](RequiredError.md#constructor)

### Properties

- [field](RequiredError.md#field)
- [message](RequiredError.md#message)
- [name](RequiredError.md#name)
- [stack](RequiredError.md#stack)
- [prepareStackTrace](RequiredError.md#preparestacktrace)
- [stackTraceLimit](RequiredError.md#stacktracelimit)

### Methods

- [captureStackTrace](RequiredError.md#capturestacktrace)

## Constructors

### constructor

• **new RequiredError**(`field`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/generated/api.ts:79](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L79)

## Properties

### field

• **field**: `string`

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: ``"RequiredError"``

#### Overrides

Error.name

#### Defined in

[src/generated/api.ts:78](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L78)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:140

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:142

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `Object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:133
