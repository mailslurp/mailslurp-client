# Interface: PageEmailProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`**

**`interface`** PageEmailProjection

## Table of contents

### Properties

- [content](PageEmailProjection.md#content)
- [empty](PageEmailProjection.md#empty)
- [first](PageEmailProjection.md#first)
- [last](PageEmailProjection.md#last)
- [number](PageEmailProjection.md#number)
- [numberOfElements](PageEmailProjection.md#numberofelements)
- [pageable](PageEmailProjection.md#pageable)
- [size](PageEmailProjection.md#size)
- [sort](PageEmailProjection.md#sort)
- [total](PageEmailProjection.md#total)
- [totalElements](PageEmailProjection.md#totalelements)
- [totalPages](PageEmailProjection.md#totalpages)

## Properties

### content

• `Optional` **content**: [`EmailProjection`](EmailProjection.md)[]

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: `number`

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: `number`

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailProjection

___

### total

• `Optional` **total**: `number`

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailProjection
