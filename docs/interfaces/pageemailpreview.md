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

[src/generated/api.ts:3734](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3734)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3740](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3740)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3746](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3746)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3752](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3752)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3758](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3758)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3764](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3764)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3770](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3770)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3776](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3776)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3782](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3782)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3788](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3788)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailPreview

#### Defined in

[src/generated/api.ts:3794](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L3794)
