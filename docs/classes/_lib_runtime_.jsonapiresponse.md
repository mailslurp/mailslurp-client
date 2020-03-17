[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/runtime"](../modules/_lib_runtime_.md) › [JSONApiResponse](_lib_runtime_.jsonapiresponse.md)

# Class: JSONApiResponse <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **JSONApiResponse**

## Index

### Constructors

* [constructor](_lib_runtime_.jsonapiresponse.md#constructor)

### Properties

* [raw](_lib_runtime_.jsonapiresponse.md#raw)
* [transformer](_lib_runtime_.jsonapiresponse.md#private-transformer)

### Methods

* [value](_lib_runtime_.jsonapiresponse.md#value)

## Constructors

###  constructor

\+ **new JSONApiResponse**(`raw`: Response, `transformer`: [ResponseTransformer](../interfaces/_lib_runtime_.responsetransformer.md)‹T›): *[JSONApiResponse](_lib_runtime_.jsonapiresponse.md)*

*Defined in [src/lib/runtime.ts:331](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L331)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`raw` | Response | - |
`transformer` | [ResponseTransformer](../interfaces/_lib_runtime_.responsetransformer.md)‹T› |  (jsonValue: any) =>
            jsonValue |

**Returns:** *[JSONApiResponse](_lib_runtime_.jsonapiresponse.md)*

## Properties

###  raw

• **raw**: *Response*

*Defined in [src/lib/runtime.ts:333](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L333)*

___

### `Private` transformer

• **transformer**: *[ResponseTransformer](../interfaces/_lib_runtime_.responsetransformer.md)‹T›*

*Defined in [src/lib/runtime.ts:334](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L334)*

## Methods

###  value

▸ **value**(): *Promise‹T›*

*Defined in [src/lib/runtime.ts:338](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L338)*

**Returns:** *Promise‹T›*
