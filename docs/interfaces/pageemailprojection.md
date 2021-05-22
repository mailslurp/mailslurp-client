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

*Defined in [src/generated/api.ts:2900](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2900)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2906](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2906)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2912](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2912)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2918](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2918)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2924](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2924)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2930](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2930)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2936](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2936)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2942](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2942)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2948](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2948)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2954](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2954)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2960](https://github.com/mailslurp/mailslurp-client/blob/8d5c17f/src/generated/api.ts#L2960)*

**`memberof`** PageEmailProjection
