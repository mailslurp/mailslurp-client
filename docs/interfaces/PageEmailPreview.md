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

[src/generated/api.ts:3772](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3772)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3778](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3778)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3784](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3784)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3790](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3790)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3796](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3796)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3802](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3802)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3808](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3808)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3814](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3814)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3820](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3820)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3826](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3826)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3832](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L3832)
