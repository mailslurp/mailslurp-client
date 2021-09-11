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

[src/generated/api.ts:4544](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4544)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4550](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4550)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4556](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4556)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4562](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4562)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4568](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4568)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4574](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4574)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4580](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4580)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4586](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4586)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4592](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4592)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4598](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4598)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageThreadProjection

#### Defined in

[src/generated/api.ts:4604](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L4604)
