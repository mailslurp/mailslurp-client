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

*Defined in [src/generated/api.ts:3766](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3766)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3772](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3772)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3778](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3778)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3784](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3784)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3790](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3790)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3796](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3796)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3802](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3802)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3808](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3808)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3814](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3814)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3820](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3820)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3826](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3826)*

**`memberof`** PageEmailProjection
