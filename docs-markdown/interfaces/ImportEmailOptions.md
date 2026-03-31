[MailSlurp JS](../README.md) / ImportEmailOptions

# Interface: ImportEmailOptions

Options for importing a raw RFC822/MIME email into a specific inbox. V1 supports MIME-family formats such as `.eml`, `message/rfc822`, and raw MIME bytes. Outlook `.msg`, `mbox`, and `maildir` are not supported in V1.

**`Export`**

**`Interface`**

ImportEmailOptions

## Table of contents

### Properties

- [externalId](ImportEmailOptions.md#externalid)
- [overrideMessageId](ImportEmailOptions.md#overridemessageid)
- [rawEmailBase64](ImportEmailOptions.md#rawemailbase64)
- [runPipeline](ImportEmailOptions.md#runpipeline)

## Properties

### externalId

• `Optional` **externalId**: `string`

Optional external identifier for the imported email source. Useful for correlating imports back to another system.

**`Memberof`**

ImportEmailOptions

___

### overrideMessageId

• `Optional` **overrideMessageId**: `boolean`

When true MailSlurp rewrites the MIME `Message-ID` header before storing and parsing the email so imported messages do not collide with existing message identities.

**`Memberof`**

ImportEmailOptions

___

### rawEmailBase64

• **rawEmailBase64**: `string`

Base64 encoded RFC822/MIME email contents. This should be the full raw email including headers and body, such as the bytes from an `.eml` file.

**`Memberof`**

ImportEmailOptions

___

### runPipeline

• `Optional` **runPipeline**: `boolean`

When true the normal inbound receive pipeline runs after persistence, including automations, webhooks, transformers, forwarders, repliers, and related fanout. When false the email is stored only.

**`Memberof`**

ImportEmailOptions
