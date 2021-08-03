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

*Defined in [src/generated/api.ts:4546](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4546)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:4552](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4552)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:4558](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4558)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:4564](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4564)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:4570](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4570)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:4576](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4576)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:4582](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4582)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:4588](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4588)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:4594](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4594)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:4600](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4600)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:4606](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L4606)*

**`memberof`** PageThreadProjection
