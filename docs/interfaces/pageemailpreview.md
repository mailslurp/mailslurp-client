**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageEmailPreview

# Interface: PageEmailPreview

Paginated email preview results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`** 

**`interface`** PageEmailPreview

## Hierarchy

* **PageEmailPreview**

## Index

### Properties

* [content](pageemailpreview.md#content)
* [empty](pageemailpreview.md#empty)
* [first](pageemailpreview.md#first)
* [last](pageemailpreview.md#last)
* [number](pageemailpreview.md#number)
* [numberOfElements](pageemailpreview.md#numberofelements)
* [pageable](pageemailpreview.md#pageable)
* [size](pageemailpreview.md#size)
* [sort](pageemailpreview.md#sort)
* [totalElements](pageemailpreview.md#totalelements)
* [totalPages](pageemailpreview.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[EmailPreview](emailpreview.md)>

*Defined in [src/generated/api.ts:3692](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3692)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3698](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3698)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3704](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3704)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3710](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3710)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3716](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3716)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3722](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3722)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3728](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3728)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3734](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3734)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3740](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3740)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3746](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3746)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3752](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L3752)*

**`memberof`** PageEmailPreview
