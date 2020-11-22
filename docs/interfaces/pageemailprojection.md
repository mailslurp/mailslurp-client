**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageEmailProjection

# Interface: PageEmailProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`** 

**`interface`** PageEmailProjection

## Hierarchy

* **PageEmailProjection**

## Index

### Properties

* [content](pageemailprojection.md#content)
* [empty](pageemailprojection.md#empty)
* [first](pageemailprojection.md#first)
* [last](pageemailprojection.md#last)
* [number](pageemailprojection.md#number)
* [numberOfElements](pageemailprojection.md#numberofelements)
* [pageable](pageemailprojection.md#pageable)
* [size](pageemailprojection.md#size)
* [sort](pageemailprojection.md#sort)
* [totalElements](pageemailprojection.md#totalelements)
* [totalPages](pageemailprojection.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[EmailProjection](emailprojection.md)>

*Defined in [src/generated/api.ts:1568](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1568)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:1574](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1574)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:1580](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1580)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:1586](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1586)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:1592](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1592)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:1598](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1598)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:1604](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1604)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:1610](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1610)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:1616](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1616)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:1622](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1622)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:1628](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1628)*

**`memberof`** PageEmailProjection
