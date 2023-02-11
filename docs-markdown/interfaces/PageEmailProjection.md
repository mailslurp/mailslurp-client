[MailSlurp JS](../README.md) / PageEmailProjection

# Interface: PageEmailProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`Export`**

**`Interface`**

PageEmailProjection

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

**`Memberof`**

PageEmailProjection

___

### empty

• `Optional` **empty**: `boolean`

**`Memberof`**

PageEmailProjection

___

### first

• `Optional` **first**: `boolean`

**`Memberof`**

PageEmailProjection

___

### last

• `Optional` **last**: `boolean`

**`Memberof`**

PageEmailProjection

___

### number

• `Optional` **number**: `number`

**`Memberof`**

PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`Memberof`**

PageEmailProjection

___

### pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`Memberof`**

PageEmailProjection

___

### size

• `Optional` **size**: `number`

**`Memberof`**

PageEmailProjection

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`Memberof`**

PageEmailProjection

___

### total

• `Optional` **total**: `number`

**`Memberof`**

PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: `number`

**`Memberof`**

PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: `number`

**`Memberof`**

PageEmailProjection
