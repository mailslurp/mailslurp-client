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

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: `number`

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: `number`

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageThreadProjection
