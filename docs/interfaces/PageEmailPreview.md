# Interface: PageEmailPreview

Paginated email preview results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`**

**`interface`** PageEmailPreview

## Table of contents

### Properties

- [content](PageEmailPreview.md#content)
- [empty](PageEmailPreview.md#empty)
- [first](PageEmailPreview.md#first)
- [last](PageEmailPreview.md#last)
- [number](PageEmailPreview.md#number)
- [numberOfElements](PageEmailPreview.md#numberofelements)
- [pageable](PageEmailPreview.md#pageable)
- [size](PageEmailPreview.md#size)
- [sort](PageEmailPreview.md#sort)
- [total](PageEmailPreview.md#total)
- [totalElements](PageEmailPreview.md#totalelements)
- [totalPages](PageEmailPreview.md#totalpages)

## Properties

### content

• `Optional` **content**: [`EmailPreview`](EmailPreview.md)[]

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: `number`

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: `number`

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailPreview

___

### total

• `Optional` **total**: `number`

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailPreview
