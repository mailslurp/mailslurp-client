# Interface: PageInboxProjection

Paginated inbox results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.

**`export`**

**`interface`** PageInboxProjection

## Table of contents

### Properties

- [content](PageInboxProjection.md#content)
- [empty](PageInboxProjection.md#empty)
- [first](PageInboxProjection.md#first)
- [last](PageInboxProjection.md#last)
- [number](PageInboxProjection.md#number)
- [numberOfElements](PageInboxProjection.md#numberofelements)
- [pageable](PageInboxProjection.md#pageable)
- [size](PageInboxProjection.md#size)
- [sort](PageInboxProjection.md#sort)
- [total](PageInboxProjection.md#total)
- [totalElements](PageInboxProjection.md#totalelements)
- [totalPages](PageInboxProjection.md#totalpages)

## Properties

### <a id="content" name="content"></a> content

• `Optional` **content**: [`InboxPreview`](InboxPreview.md)[]

**`memberof`** PageInboxProjection

___

### <a id="empty" name="empty"></a> empty

• `Optional` **empty**: `boolean`

**`memberof`** PageInboxProjection

___

### <a id="first" name="first"></a> first

• `Optional` **first**: `boolean`

**`memberof`** PageInboxProjection

___

### <a id="last" name="last"></a> last

• `Optional` **last**: `boolean`

**`memberof`** PageInboxProjection

___

### <a id="number" name="number"></a> number

• `Optional` **number**: `number`

**`memberof`** PageInboxProjection

___

### <a id="numberofelements" name="numberofelements"></a> numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageInboxProjection

___

### <a id="pageable" name="pageable"></a> pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`memberof`** PageInboxProjection

___

### <a id="size" name="size"></a> size

• `Optional` **size**: `number`

**`memberof`** PageInboxProjection

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageInboxProjection

___

### <a id="total" name="total"></a> total

• `Optional` **total**: `number`

**`memberof`** PageInboxProjection

___

### <a id="totalelements" name="totalelements"></a> totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageInboxProjection

___

### <a id="totalpages" name="totalpages"></a> totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageInboxProjection
