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

*Defined in [src/generated/api.ts:2664](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2664)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2670](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2670)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2676](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2676)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2682](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2682)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2688](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2688)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2694](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2694)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2700](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2700)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2706](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2706)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2712](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2712)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2718](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2718)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2724](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L2724)*

**`memberof`** PageEmailPreview
