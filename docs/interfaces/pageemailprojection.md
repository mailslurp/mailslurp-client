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

*Defined in [src/generated/api.ts:3806](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3806)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3812](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3812)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3818](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3818)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3824](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3824)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3830](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3830)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3836](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3836)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3842](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3842)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3848](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3848)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3854](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3854)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3860](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3860)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3866](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L3866)*

**`memberof`** PageEmailProjection
