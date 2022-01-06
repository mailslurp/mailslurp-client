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
- [total](PageSentEmailProjection.md#total)
- [totalElements](PageSentEmailProjection.md#totalelements)
- [totalPages](PageSentEmailProjection.md#totalpages)

## Properties

### content

• **content**: [`SentEmailProjection`](SentEmailProjection.md)[]

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

• **number**: `number`

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### numberOfElements

• **numberOfElements**: `number`

Number of items returned

**`memberof`** PageSentEmailProjection

___

### pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`memberof`** PageSentEmailProjection

___

### size

• **size**: `number`

Size of page requested

**`memberof`** PageSentEmailProjection

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageSentEmailProjection

___

### total

• `Optional` **total**: `number`

**`memberof`** PageSentEmailProjection

___

### totalElements

• **totalElements**: `number`

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### totalPages

• **totalPages**: `number`

Total number of pages available

**`memberof`** PageSentEmailProjection
