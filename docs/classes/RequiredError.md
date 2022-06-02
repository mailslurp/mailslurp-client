# Class: RequiredError

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

### <a id="constructor" name="constructor"></a> constructor

• **new RequiredError**(`field`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `msg?` | `string` |

#### Overrides

Error.constructor

## Properties

### <a id="field" name="field"></a> field

• **field**: `string`

___

### <a id="message" name="message"></a> message

• **message**: `string`

#### Inherited from

Error.message

___

### <a id="name" name="name"></a> name

• **name**: ``"RequiredError"``

#### Overrides

Error.name

___

### <a id="stack" name="stack"></a> stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### <a id="preparestacktrace" name="preparestacktrace"></a> prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

___

### <a id="stacktracelimit" name="stacktracelimit"></a> stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

## Methods

### <a id="capturestacktrace" name="capturestacktrace"></a> captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace
