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

*Defined in [src/generated/api.ts:1528](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1528)*

**`memberof`** PageEmailPreview

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:1534](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1534)*

**`memberof`** PageEmailPreview

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:1540](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1540)*

**`memberof`** PageEmailPreview

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:1546](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1546)*

**`memberof`** PageEmailPreview

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:1552](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1552)*

**`memberof`** PageEmailPreview

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:1558](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1558)*

**`memberof`** PageEmailPreview

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:1564](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1564)*

**`memberof`** PageEmailPreview

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:1570](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1570)*

**`memberof`** PageEmailPreview

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:1576](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1576)*

**`memberof`** PageEmailPreview

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:1582](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1582)*

**`memberof`** PageEmailPreview

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:1588](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1588)*

**`memberof`** PageEmailPreview
