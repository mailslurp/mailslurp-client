[MailSlurp JS](../README.md) / PageThreadProjection

# Interface: PageThreadProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`Export`**

**`Interface`**

PageThreadProjection

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

**`Memberof`**

PageThreadProjection

___

### empty

• `Optional` **empty**: `boolean`

**`Memberof`**

PageThreadProjection

___

### first

• `Optional` **first**: `boolean`

**`Memberof`**

PageThreadProjection

___

### last

• `Optional` **last**: `boolean`

**`Memberof`**

PageThreadProjection

___

### number

• `Optional` **number**: `number`

**`Memberof`**

PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`Memberof`**

PageThreadProjection

___

### pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`Memberof`**

PageThreadProjection

___

### size

• `Optional` **size**: `number`

**`Memberof`**

PageThreadProjection

___

### sort

• `Optional` **sort**: [`SortObject`](SortObject.md)[]

**`Memberof`**

PageThreadProjection

___

### totalElements

• **totalElements**: `number`

**`Memberof`**

PageThreadProjection

___

### totalPages

• **totalPages**: `number`

**`Memberof`**

PageThreadProjection
