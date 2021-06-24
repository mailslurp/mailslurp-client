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

*Defined in [src/generated/api.ts:3160](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3160)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3166](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3166)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3172](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3172)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3178](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3178)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3184](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3184)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3190](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3190)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3196](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3196)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3202](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3202)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3208](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3208)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3214](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3214)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3220](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L3220)*

**`memberof`** PageEmailPreview
