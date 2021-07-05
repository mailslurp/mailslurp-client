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

*Defined in [src/generated/api.ts:3233](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3233)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3239](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3239)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3245](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3245)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3251](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3251)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3257](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3257)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3263](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3263)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3269](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3269)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3275](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3275)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3281](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3281)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3287](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3287)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3293](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L3293)*

**`memberof`** PageEmailProjection
