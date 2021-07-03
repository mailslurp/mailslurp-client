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

*Defined in [src/generated/api.ts:3887](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3887)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3893](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3893)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3899](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3899)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3905](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3905)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3911](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3911)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3917](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3917)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3923](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3923)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3929](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3929)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3935](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3935)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3941](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3941)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3947](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L3947)*

**`memberof`** PageThreadProjection
