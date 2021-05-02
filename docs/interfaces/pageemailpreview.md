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

*Defined in [src/generated/api.ts:2534](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2534)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2540](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2540)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2546](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2546)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2552](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2552)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2558](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2558)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2564](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2564)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2570](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2570)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2576](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2576)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2582](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2582)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2588](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2588)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2594](https://github.com/mailslurp/mailslurp-client/blob/aab6cee/src/generated/api.ts#L2594)*

**`memberof`** PageEmailPreview
