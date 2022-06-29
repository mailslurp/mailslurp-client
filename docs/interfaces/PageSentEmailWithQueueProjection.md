# Interface: PageSentEmailWithQueueProjection

Paginated sent email results for emails sent with queue. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full sent email entity use the projection ID with individual method calls.

**`export`**

**`interface`** PageSentEmailWithQueueProjection

## Table of contents

### Properties

- [content](PageSentEmailWithQueueProjection.md#content)
- [empty](PageSentEmailWithQueueProjection.md#empty)
- [first](PageSentEmailWithQueueProjection.md#first)
- [last](PageSentEmailWithQueueProjection.md#last)
- [number](PageSentEmailWithQueueProjection.md#number)
- [numberOfElements](PageSentEmailWithQueueProjection.md#numberofelements)
- [pageable](PageSentEmailWithQueueProjection.md#pageable)
- [size](PageSentEmailWithQueueProjection.md#size)
- [sort](PageSentEmailWithQueueProjection.md#sort)
- [total](PageSentEmailWithQueueProjection.md#total)
- [totalElements](PageSentEmailWithQueueProjection.md#totalelements)
- [totalPages](PageSentEmailWithQueueProjection.md#totalpages)

## Properties

### <a id="content" name="content"></a> content

• **content**: [`SendWithQueueResult`](SendWithQueueResult.md)[]

Collection of items

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="empty" name="empty"></a> empty

• `Optional` **empty**: `boolean`

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="first" name="first"></a> first

• `Optional` **first**: `boolean`

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="last" name="last"></a> last

• `Optional` **last**: `boolean`

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="number" name="number"></a> number

• **number**: `number`

Page number starting at 0

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="numberofelements" name="numberofelements"></a> numberOfElements

• **numberOfElements**: `number`

Number of items returned

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="pageable" name="pageable"></a> pageable

• `Optional` **pageable**: [`PageableObject`](PageableObject.md)

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="size" name="size"></a> size

• **size**: `number`

Size of page requested

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="total" name="total"></a> total

• `Optional` **total**: `number`

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="totalelements" name="totalelements"></a> totalElements

• **totalElements**: `number`

Total number of items available for querying

**`memberof`** PageSentEmailWithQueueProjection

___

### <a id="totalpages" name="totalpages"></a> totalPages

• **totalPages**: `number`

Total number of pages available

**`memberof`** PageSentEmailWithQueueProjection
