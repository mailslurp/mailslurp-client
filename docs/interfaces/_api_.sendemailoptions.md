[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [SendEmailOptions](../interfaces/_api_.sendemailoptions.md)

# Interface: SendEmailOptions

Options for sending an email message from an inbox

*__export__*: 

*__interface__*: SendEmailOptions

## Hierarchy

**SendEmailOptions**

## Index

### Properties

* [bcc](_api_.sendemailoptions.md#bcc)
* [body](_api_.sendemailoptions.md#body)
* [cc](_api_.sendemailoptions.md#cc)
* [charset](_api_.sendemailoptions.md#charset)
* [from](_api_.sendemailoptions.md#from)
* [html](_api_.sendemailoptions.md#html)
* [replyTo](_api_.sendemailoptions.md#replyto)
* [subject](_api_.sendemailoptions.md#subject)
* [to](_api_.sendemailoptions.md#to)

---

## Properties

<a id="bcc"></a>

### `<Optional>` bcc

**● bcc**: *`Array`<`string`>*

*Defined in api.ts:258*

Optional list of bcc destination email addresses

*__type__*: {Array}

*__memberof__*: SendEmailOptions

___
<a id="body"></a>

### `<Optional>` body

**● body**: *`string`*

*Defined in api.ts:264*

Contents of email

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="cc"></a>

### `<Optional>` cc

**● cc**: *`Array`<`string`>*

*Defined in api.ts:270*

Optional list of cc destination email addresses

*__type__*: {Array}

*__memberof__*: SendEmailOptions

___
<a id="charset"></a>

### `<Optional>` charset

**● charset**: *`string`*

*Defined in api.ts:276*

Optional charset

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="from"></a>

### `<Optional>` from

**● from**: *`string`*

*Defined in api.ts:282*

Optional from address. If not set source inbox address will be used

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="html"></a>

### `<Optional>` html

**● html**: *`boolean`*

*Defined in api.ts:288*

*__type__*: {boolean}

*__memberof__*: SendEmailOptions

___
<a id="replyto"></a>

### `<Optional>` replyTo

**● replyTo**: *`string`*

*Defined in api.ts:294*

Optional replyTo header

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="subject"></a>

### `<Optional>` subject

**● subject**: *`string`*

*Defined in api.ts:300*

Optional email subject line

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="to"></a>

###  to

**● to**: *`Array`<`string`>*

*Defined in api.ts:306*

List of destination email addresses. Even single recipients must be in array form.

*__type__*: {Array}

*__memberof__*: SendEmailOptions

___

