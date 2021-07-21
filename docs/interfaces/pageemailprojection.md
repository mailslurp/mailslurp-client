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

*Defined in [src/generated/api.ts:3710](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3710)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3716](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3716)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3722](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3722)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3728](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3728)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3734](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3734)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3740](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3740)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3746](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3746)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3752](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3752)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3758](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3758)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3764](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3764)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3770](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L3770)*

**`memberof`** PageEmailProjection
