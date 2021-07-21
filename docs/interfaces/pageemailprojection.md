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

*Defined in [src/generated/api.ts:3684](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3684)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3690](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3690)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3696](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3696)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3702](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3702)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3708](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3708)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3714](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3714)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3720](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3720)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3726](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3726)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3732](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3732)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3738](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3738)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3744](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L3744)*

**`memberof`** PageEmailProjection
