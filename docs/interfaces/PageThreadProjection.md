[MailSlurp JS](../README.md) / PageThreadProjection

# Interface: PageThreadProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`**

**`interface`** PageThreadProjection

## Table of contents

### Properties

- [content](PageThreadProjection.md#content)
- [empty](PageThreadProjection.md#empty)
- [first](PageThreadProjection.md#first)
- [last](PageThreadProjection.md#last)
- [number](PageThreadProjection.md#number)
- [numberOfElements](PageThreadProjection.md#numberofelements)
- [pageable](PageThreadProjection.md#pageable)
- [size](PageThreadProjection.md#size)
- [sort](PageThreadProjection.md#sort)
- [totalElements](PageThreadProjection.md#totalelements)
- [totalPages](PageThreadProjection.md#totalpages)

## Properties

### content

• `Optional` **content**: [`ThreadProjection`](ThreadProjection.md)[]

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4576](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4576)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4582](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4582)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4588](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4588)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4594](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4594)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4600](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4600)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4606](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4606)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4612](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4612)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4618](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4618)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4624](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4624)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4630](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4630)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4636](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L4636)
