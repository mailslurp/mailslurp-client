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

*Defined in [src/generated/api.ts:2374](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2374)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2380](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2380)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2386](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2386)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2392](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2392)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2398](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2398)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2404](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2404)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2410](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2410)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2416](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2416)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2422](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2422)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2428](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2428)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2434](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2434)*

**`memberof`** PageEmailPreview
