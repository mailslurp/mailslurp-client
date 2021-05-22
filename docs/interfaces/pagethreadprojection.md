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

*Defined in [src/generated/api.ts:3492](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3492)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3498](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3498)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3504](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3504)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3510](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3510)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3516](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3516)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3522](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3522)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3528](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3528)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3534](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3534)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3540](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3540)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3546](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3546)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3552](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L3552)*

**`memberof`** PageThreadProjection
