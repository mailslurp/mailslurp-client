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

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageSentEmailProjection

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageSentEmailProjection

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageSentEmailProjection

___

### number

• `Optional` **number**: `number`

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

Number of items returned

**`memberof`** PageSentEmailProjection

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageSentEmailProjection

___

### size

• `Optional` **size**: `number`

Size of page requested

**`memberof`** PageSentEmailProjection

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageSentEmailProjection

___

### totalElements

• `Optional` **totalElements**: `number`

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### totalPages

• `Optional` **totalPages**: `number`

Total number of pages available

**`memberof`** PageSentEmailProjection
