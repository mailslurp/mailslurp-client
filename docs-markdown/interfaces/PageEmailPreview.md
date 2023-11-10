[MailSlurp JS](../README.md) / PageEmailPreview

# Interface: PageEmailPreview

Paginated email preview results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`Export`**

**`Interface`**

PageEmailPreview

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

**`Memberof`**

PageEmailPreview

___

### empty

• `Optional` **empty**: `boolean`

**`Memberof`**

PageEmailPreview

___

### first

• `Optional` **first**: `boolean`

**`Memberof`**

PageEmailPreview

___

### last

• `Optional` **last**: `boolean`

**`Memberof`**

PageEmailPreview

___

### number

• `Optional` **number**: `number`

**`Memberof`**

PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`Memberof`**

PageEmailPreview

___

### pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`Memberof`**

PageEmailPreview

___

### size

• `Optional` **size**: `number`

**`Memberof`**

PageEmailPreview

___

### sort

• `Optional` **sort**: [`SortObject`](SortObject.md)

**`Memberof`**

PageEmailPreview

___

### total

• `Optional` **total**: `number`

**`Memberof`**

PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: `number`

**`Memberof`**

PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: `number`

**`Memberof`**

PageEmailPreview
