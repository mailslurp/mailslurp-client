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

### <a id="content" name="content"></a> content

• `Optional` **content**: [`EmailProjection`](EmailProjection.md)[]

**`memberof`** PageEmailProjection

___

### <a id="empty" name="empty"></a> empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailProjection

___

### <a id="first" name="first"></a> first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailProjection

___

### <a id="last" name="last"></a> last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailProjection

___

### <a id="number" name="number"></a> number

• `Optional` **number**: `number`

**`memberof`** PageEmailProjection

___

### <a id="numberofelements" name="numberofelements"></a> numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailProjection

___

### <a id="pageable" name="pageable"></a> pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`memberof`** PageEmailProjection

___

### <a id="size" name="size"></a> size

• `Optional` **size**: `number`

**`memberof`** PageEmailProjection

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailProjection

___

### <a id="total" name="total"></a> total

• `Optional` **total**: `number`

**`memberof`** PageEmailProjection

___

### <a id="totalelements" name="totalelements"></a> totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailProjection

___

### <a id="totalpages" name="totalpages"></a> totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailProjection
