[MailSlurp JS](../README.md) / EmailPreviewHtmlDto

# Interface: EmailPreviewHtmlDto

Deprecated server-normalized HTML representation. It can alter malformed email layout and should not be used for fidelity-sensitive rendering.

**`Export`**

**`Interface`**

EmailPreviewHtmlDto

## Table of contents

### Properties

- [html](EmailPreviewHtmlDto.md#html)
- [linkBehavior](EmailPreviewHtmlDto.md#linkbehavior)
- [subject](EmailPreviewHtmlDto.md#subject)

## Properties

### html

• **html**: `string`

Server-normalized preview HTML with active content removed

**`Memberof`**

EmailPreviewHtmlDto

___

### linkBehavior

• **linkBehavior**: [`EmailPreviewHtmlDtoLinkBehaviorEnum`](../enums/EmailPreviewHtmlDtoLinkBehaviorEnum.md)

Controls navigation for links in hardened email HTML previews. Original email HTML endpoints are unaffected.

**`Memberof`**

EmailPreviewHtmlDto

___

### subject

• `Optional` **subject**: `string`

Email subject when available

**`Memberof`**

EmailPreviewHtmlDto
