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

*Defined in [src/generated/api.ts:4506](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4506)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:4512](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4512)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:4518](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4518)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:4524](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4524)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:4530](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4530)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:4536](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4536)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:4542](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4542)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:4548](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4548)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:4554](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4554)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:4560](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4560)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:4566](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L4566)*

**`memberof`** PageThreadProjection
