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

*Defined in [src/generated/api.ts:2966](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2966)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2972](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2972)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2978](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2978)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2984](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2984)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2990](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2990)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2996](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2996)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3002](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3002)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3008](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3008)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3014](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3014)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3020](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3020)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3026](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L3026)*

**`memberof`** PageThreadProjection
