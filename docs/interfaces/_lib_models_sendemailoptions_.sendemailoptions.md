[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/SendEmailOptions"](../modules/_lib_models_sendemailoptions_.md) › [SendEmailOptions](_lib_models_sendemailoptions_.sendemailoptions.md)

# Interface: SendEmailOptions

Options for sending an email message from an inbox. You must provide one of: `to`, `toGroup`, or `toContacts` to send an email. All other parameters are optional.

**`export`** 

**`interface`** SendEmailOptions

## Hierarchy

* **SendEmailOptions**

## Index

### Properties

* [attachments](_lib_models_sendemailoptions_.sendemailoptions.md#optional-attachments)
* [bcc](_lib_models_sendemailoptions_.sendemailoptions.md#optional-bcc)
* [body](_lib_models_sendemailoptions_.sendemailoptions.md#optional-body)
* [cc](_lib_models_sendemailoptions_.sendemailoptions.md#optional-cc)
* [charset](_lib_models_sendemailoptions_.sendemailoptions.md#optional-charset)
* [from](_lib_models_sendemailoptions_.sendemailoptions.md#optional-from)
* [isHTML](_lib_models_sendemailoptions_.sendemailoptions.md#optional-ishtml)
* [replyTo](_lib_models_sendemailoptions_.sendemailoptions.md#optional-replyto)
* [sendStrategy](_lib_models_sendemailoptions_.sendemailoptions.md#optional-sendstrategy)
* [subject](_lib_models_sendemailoptions_.sendemailoptions.md#optional-subject)
* [template](_lib_models_sendemailoptions_.sendemailoptions.md#optional-template)
* [templateVariables](_lib_models_sendemailoptions_.sendemailoptions.md#optional-templatevariables)
* [to](_lib_models_sendemailoptions_.sendemailoptions.md#optional-to)
* [toContacts](_lib_models_sendemailoptions_.sendemailoptions.md#optional-tocontacts)
* [toGroup](_lib_models_sendemailoptions_.sendemailoptions.md#optional-togroup)

## Properties

### `Optional` attachments

• **attachments**? : *Array‹string›*

*Defined in [src/lib/models/SendEmailOptions.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L27)*

Optional list of attachment IDs to send with this email. You must first upload each attachment separately in order to obtain attachment IDs. This way you can reuse attachments with different emails once uploaded.

**`type`** {Array<string>}

**`memberof`** SendEmailOptions

___

### `Optional` bcc

• **bcc**? : *Array‹string›*

*Defined in [src/lib/models/SendEmailOptions.ts:33](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L33)*

Optional list of bcc destination email addresses

**`type`** {Array<string>}

**`memberof`** SendEmailOptions

___

### `Optional` body

• **body**? : *string*

*Defined in [src/lib/models/SendEmailOptions.ts:39](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L39)*

Optional contents of email. If body contains HTML then set `isHTML` to true to ensure that email clients render it correctly. You can use moustache template syntax in the email body in conjunction with `toGroup` contact variables or `templateVariables` data. If you need more templating control consider creating a template and using the `template` property instead of the body.

**`type`** {string}

**`memberof`** SendEmailOptions

___

### `Optional` cc

• **cc**? : *Array‹string›*

*Defined in [src/lib/models/SendEmailOptions.ts:45](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L45)*

Optional list of cc destination email addresses

**`type`** {Array<string>}

**`memberof`** SendEmailOptions

___

### `Optional` charset

• **charset**? : *string*

*Defined in [src/lib/models/SendEmailOptions.ts:51](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L51)*

Optional charset

**`type`** {string}

**`memberof`** SendEmailOptions

___

### `Optional` from

• **from**? : *string*

*Defined in [src/lib/models/SendEmailOptions.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L57)*

Optional from address. If not set the source inbox address will be used for this field. Beware of potential spam penalties when setting this field to an address not used by the inbox. For custom email addresses use a custom domain.

**`type`** {string}

**`memberof`** SendEmailOptions

___

### `Optional` isHTML

• **isHTML**? : *boolean*

*Defined in [src/lib/models/SendEmailOptions.ts:63](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L63)*

Optional HTML flag. If true the `content-type` of the email will be `text/html`. Set to true when sending HTML to ensure proper rending on email clients

**`type`** {boolean}

**`memberof`** SendEmailOptions

___

### `Optional` replyTo

• **replyTo**? : *string*

*Defined in [src/lib/models/SendEmailOptions.ts:69](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L69)*

Optional replyTo header

**`type`** {string}

**`memberof`** SendEmailOptions

___

### `Optional` sendStrategy

• **sendStrategy**? : *[SendEmailOptionsSendStrategyEnum](../enums/_lib_models_sendemailoptions_.sendemailoptionssendstrategyenum.md)*

*Defined in [src/lib/models/SendEmailOptions.ts:75](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L75)*

Optional strategy to use when sending the email

**`type`** {string}

**`memberof`** SendEmailOptions

___

### `Optional` subject

• **subject**? : *string*

*Defined in [src/lib/models/SendEmailOptions.ts:81](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L81)*

Optional email subject line

**`type`** {string}

**`memberof`** SendEmailOptions

___

### `Optional` template

• **template**? : *string*

*Defined in [src/lib/models/SendEmailOptions.ts:87](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L87)*

Optional template ID to use for body. Will override body if provided. When using a template make sure you pass the corresponding map of `templateVariables`. You can find which variables are needed by fetching the template itself or viewing it in the dashboard.

**`type`** {string}

**`memberof`** SendEmailOptions

___

### `Optional` templateVariables

• **templateVariables**? : *object*

*Defined in [src/lib/models/SendEmailOptions.ts:93](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L93)*

Optional map of template variables. Will replace moustache syntax variables in subject and body or template with the associated values if found.

**`type`** {object}

**`memberof`** SendEmailOptions

___

### `Optional` to

• **to**? : *Array‹string›*

*Defined in [src/lib/models/SendEmailOptions.ts:99](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L99)*

List of destination email addresses. Even single recipients must be in array form. Maximum recipients per email depends on your plan. If you need to send many emails try using contacts or contact groups or use a non standard sendStrategy to ensure that spam filters are not triggered (many recipients in one email can affect your spam rating).

**`type`** {Array<string>}

**`memberof`** SendEmailOptions

___

### `Optional` toContacts

• **toContacts**? : *Array‹string›*

*Defined in [src/lib/models/SendEmailOptions.ts:105](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L105)*

Optional list of contact IDs to send email to. Manage your contacts via the API or dashboard. When contacts are used the email is sent to each contact separately so they will not see other recipients.

**`type`** {Array<string>}

**`memberof`** SendEmailOptions

___

### `Optional` toGroup

• **toGroup**? : *string*

*Defined in [src/lib/models/SendEmailOptions.ts:111](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/SendEmailOptions.ts#L111)*

Optional contact group ID to send email to. You can create contacts and contact groups in the API or dashboard and use them for email campaigns. When contact groups are used the email is sent to each contact separately so they will not see other recipients

**`type`** {string}

**`memberof`** SendEmailOptions
