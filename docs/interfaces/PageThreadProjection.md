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

[src/generated/api.ts:4548](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4548)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4554](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4554)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4560](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4560)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4566](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4566)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4572](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4572)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4578](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4578)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4584](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4584)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4590](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4590)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4596](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4596)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4602](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4602)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4608](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L4608)
