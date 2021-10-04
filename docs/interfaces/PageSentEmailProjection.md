[MailSlurp JS](../README.md) / PageSentEmailProjection

# Interface: PageSentEmailProjection

Paginated sent email results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full sent email entity use the projection ID with individual method calls.

**`export`**

**`interface`** PageSentEmailProjection

## Table of contents

### Properties

- [content](PageSentEmailProjection.md#content)
- [empty](PageSentEmailProjection.md#empty)
- [first](PageSentEmailProjection.md#first)
- [last](PageSentEmailProjection.md#last)
- [number](PageSentEmailProjection.md#number)
- [numberOfElements](PageSentEmailProjection.md#numberofelements)
- [pageable](PageSentEmailProjection.md#pageable)
- [size](PageSentEmailProjection.md#size)
- [sort](PageSentEmailProjection.md#sort)
- [totalElements](PageSentEmailProjection.md#totalelements)
- [totalPages](PageSentEmailProjection.md#totalpages)

## Properties

### content

• `Optional` **content**: [`SentEmailProjection`](SentEmailProjection.md)[]

Collection of items

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4396](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4396)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4402](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4402)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4408](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4408)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4414](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4414)

___

### number

• `Optional` **number**: `number`

Page number starting at 0

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4420](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4420)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

Number of items returned

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4426](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4426)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4432](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4432)

___

### size

• `Optional` **size**: `number`

Size of page requested

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4438](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4438)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4444](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4444)

___

### totalElements

• `Optional` **totalElements**: `number`

Total number of items available for querying

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4450](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4450)

___

### totalPages

• `Optional` **totalPages**: `number`

Total number of pages available

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4456](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L4456)
