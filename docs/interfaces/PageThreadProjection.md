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
- [total](PageThreadProjection.md#total)
- [totalElements](PageThreadProjection.md#totalelements)
- [totalPages](PageThreadProjection.md#totalpages)

## Properties

### <a id="content" name="content"></a> content

• `Optional` **content**: [`ThreadProjection`](ThreadProjection.md)[]

**`memberof`** PageThreadProjection

___

### <a id="empty" name="empty"></a> empty

• `Optional` **empty**: `boolean`

**`memberof`** PageThreadProjection

___

### <a id="first" name="first"></a> first

• `Optional` **first**: `boolean`

**`memberof`** PageThreadProjection

___

### <a id="last" name="last"></a> last

• `Optional` **last**: `boolean`

**`memberof`** PageThreadProjection

___

### <a id="number" name="number"></a> number

• `Optional` **number**: `number`

**`memberof`** PageThreadProjection

___

### <a id="numberofelements" name="numberofelements"></a> numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageThreadProjection

___

### <a id="pageable" name="pageable"></a> pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`memberof`** PageThreadProjection

___

### <a id="size" name="size"></a> size

• `Optional` **size**: `number`

**`memberof`** PageThreadProjection

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageThreadProjection

___

### <a id="total" name="total"></a> total

• `Optional` **total**: `number`

**`memberof`** PageThreadProjection

___

### <a id="totalelements" name="totalelements"></a> totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageThreadProjection

___

### <a id="totalpages" name="totalpages"></a> totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageThreadProjection
