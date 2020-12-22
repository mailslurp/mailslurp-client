**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageThreadProjection

# Interface: PageThreadProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`** 

**`interface`** PageThreadProjection

## Hierarchy

* **PageThreadProjection**

## Index

### Properties

* [content](pagethreadprojection.md#content)
* [empty](pagethreadprojection.md#empty)
* [first](pagethreadprojection.md#first)
* [last](pagethreadprojection.md#last)
* [number](pagethreadprojection.md#number)
* [numberOfElements](pagethreadprojection.md#numberofelements)
* [pageable](pagethreadprojection.md#pageable)
* [size](pagethreadprojection.md#size)
* [sort](pagethreadprojection.md#sort)
* [totalElements](pagethreadprojection.md#totalelements)
* [totalPages](pagethreadprojection.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[ThreadProjection](threadprojection.md)>

*Defined in [src/generated/api.ts:2440](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2440)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2446](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2446)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2452](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2452)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2458](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2458)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2464](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2464)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2470](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2470)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2476](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2476)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2482](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2482)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2488](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2488)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2494](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2494)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2500](https://github.com/mailslurp/mailslurp-client/blob/c889afa/src/generated/api.ts#L2500)*

**`memberof`** PageThreadProjection
