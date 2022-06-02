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

### <a id="content" name="content"></a> content

• `Optional` **content**: [`EmailPreview`](EmailPreview.md)[]

**`memberof`** PageEmailPreview

___

### <a id="empty" name="empty"></a> empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailPreview

___

### <a id="first" name="first"></a> first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailPreview

___

### <a id="last" name="last"></a> last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailPreview

___

### <a id="number" name="number"></a> number

• `Optional` **number**: `number`

**`memberof`** PageEmailPreview

___

### <a id="numberofelements" name="numberofelements"></a> numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailPreview

___

### <a id="pageable" name="pageable"></a> pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`memberof`** PageEmailPreview

___

### <a id="size" name="size"></a> size

• `Optional` **size**: `number`

**`memberof`** PageEmailPreview

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailPreview

___

### <a id="total" name="total"></a> total

• `Optional` **total**: `number`

**`memberof`** PageEmailPreview

___

### <a id="totalelements" name="totalelements"></a> totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailPreview

___

### <a id="totalpages" name="totalpages"></a> totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailPreview
