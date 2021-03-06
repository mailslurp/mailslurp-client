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

*Defined in [src/generated/api.ts:3398](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3398)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3404](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3404)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3410](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3410)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3416](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3416)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3422](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3422)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3428](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3428)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3434](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3434)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3440](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3440)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3446](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3446)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3452](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3452)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3458](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L3458)*

**`memberof`** PageEmailProjection
