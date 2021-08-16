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

[src/generated/api.ts:4438](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4438)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4444](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4444)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4450](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4450)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4456](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4456)

___

### number

• `Optional` **number**: `number`

Page number starting at 0

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4462](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4462)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

Number of items returned

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4468](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4468)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4474](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4474)

___

### size

• `Optional` **size**: `number`

Size of page requested

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4480](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4480)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4486](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4486)

___

### totalElements

• `Optional` **totalElements**: `number`

Total number of items available for querying

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4492](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4492)

___

### totalPages

• `Optional` **totalPages**: `number`

Total number of pages available

**`memberof`** PageSentEmailProjection

#### Defined in

[src/generated/api.ts:4498](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L4498)
