[MailSlurp JS](../README.md) / FormControllerApi

# Class: FormControllerApi

FormControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`FormControllerApi`**

## Table of contents

### Constructors

- [constructor](FormControllerApi.md#constructor)

### Properties

- [basePath](FormControllerApi.md#basepath)
- [configuration](FormControllerApi.md#configuration)
- [fetch](FormControllerApi.md#fetch)

### Methods

- [submitForm](FormControllerApi.md#submitform)

## Constructors

### constructor

• **new FormControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### submitForm

▸ **submitForm**(`emailAddress?`, `redirectTo?`, `spamCheck?`, `subject?`, `successMessage?`, `to?`, `otherParameters?`, `options?`): `Promise`<`string`\>

This endpoint allows you to submit HTML forms and receive the field values and files via email.   #### Parameters The endpoint looks for special meta parameters in the form fields OR in the URL request parameters. The meta parameters can be used to specify the behaviour of the email.   You must provide at-least a `_to` email address to tell the endpoint where the form should be emailed. These can be submitted as hidden HTML input fields with the corresponding `name` attributes or as URL query parameters such as `?_to=test@example.com`  The endpoint takes all other form fields that are named and includes them in the message body of the email. Files are sent as attachments.  #### Submitting This endpoint accepts form submission via POST method. It accepts `application/x-www-form-urlencoded`, and `multipart/form-data` content-types.  #### HTML Example ```html <form    action=\"https://api.mailslurp.com/forms\"   method=\"post\" >   <input name=\"_to\" type=\"hidden\" value=\"test@example.com\"/>   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```  #### URL Example ```html <form    action=\"https://api.mailslurp.com/forms?_to=test@example.com\"   method=\"post\" >   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```    The email address is specified by a `_to` field OR is extracted from an email alias specified by a `_toAlias` field (see the alias controller for more information).  Endpoint accepts .  You can specify a content type in HTML forms using the `enctype` attribute, for instance: `<form enctype=\"multipart/form-data\">`.

**`summary`** Submit a form to be parsed and sent as an email to an address determined by the form fields

**`throws`** {RequiredError}

**`memberof`** FormControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `emailAddress?` | `string` |
| `redirectTo?` | `string` |
| `spamCheck?` | `string` |
| `subject?` | `string` |
| `successMessage?` | `string` |
| `to?` | `string` |
| `otherParameters?` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:18246](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L18246)
