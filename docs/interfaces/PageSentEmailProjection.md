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

### <a id="content" name="content"></a> content

• **content**: [`SentEmailProjection`](SentEmailProjection.md)[]

Collection of items

**`memberof`** PageSentEmailProjection

___

### <a id="empty" name="empty"></a> empty

• `Optional` **empty**: `boolean`

**`memberof`** PageSentEmailProjection

___

### <a id="first" name="first"></a> first

• `Optional` **first**: `boolean`

**`memberof`** PageSentEmailProjection

___

### <a id="last" name="last"></a> last

• `Optional` **last**: `boolean`

**`memberof`** PageSentEmailProjection

___

### <a id="number" name="number"></a> number

• **number**: `number`

Page number starting at 0

**`memberof`** PageSentEmailProjection

___

### <a id="numberofelements" name="numberofelements"></a> numberOfElements

• **numberOfElements**: `number`

Number of items returned

**`memberof`** PageSentEmailProjection

___

### <a id="pageable" name="pageable"></a> pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`memberof`** PageSentEmailProjection

___

### <a id="size" name="size"></a> size

• **size**: `number`

Size of page requested

**`memberof`** PageSentEmailProjection

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageSentEmailProjection

___

### <a id="total" name="total"></a> total

• `Optional` **total**: `number`

**`memberof`** PageSentEmailProjection

___

### <a id="totalelements" name="totalelements"></a> totalElements

• **totalElements**: `number`

Total number of items available for querying

**`memberof`** PageSentEmailProjection

___

### <a id="totalpages" name="totalpages"></a> totalPages

• **totalPages**: `number`

Total number of pages available

**`memberof`** PageSentEmailProjection
