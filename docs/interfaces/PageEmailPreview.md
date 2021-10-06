[MailSlurp JS](../README.md) / PageEmailPreview

# Interface: PageEmailPreview

Paginated email preview results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`**

**`interface`** PageEmailPreview

## Table of contents

### Properties

- [content](PageEmailPreview.md#content)
- [empty](PageEmailPreview.md#empty)
- [first](PageEmailPreview.md#first)
- [last](PageEmailPreview.md#last)
- [number](PageEmailPreview.md#number)
- [numberOfElements](PageEmailPreview.md#numberofelements)
- [pageable](PageEmailPreview.md#pageable)
- [size](PageEmailPreview.md#size)
- [sort](PageEmailPreview.md#sort)
- [totalElements](PageEmailPreview.md#totalelements)
- [totalPages](PageEmailPreview.md#totalpages)

## Properties

### content

• `Optional` **content**: [`EmailPreview`](EmailPreview.md)[]

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3762](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3762)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3768](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3768)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3774](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3774)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3780](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3780)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3786](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3786)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3792](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3792)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3798](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3798)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3804](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3804)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3810](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3810)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3816](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3816)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3822](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L3822)
