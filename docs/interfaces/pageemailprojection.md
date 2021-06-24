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

*Defined in [src/generated/api.ts:3234](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3234)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3240](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3240)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3246](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3246)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3252](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3252)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3258](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3258)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3264](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3264)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3270](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3270)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3276](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3276)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3282](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3282)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3288](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3288)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3294](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3294)*

**`memberof`** PageEmailProjection
