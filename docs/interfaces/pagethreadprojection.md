**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageThreadProjection

# Interface: PageThreadProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`** 

**`interface`** PageThreadProjection

## Hierarchy

* **PageThreadProjection**

## Index

### Properties

* [content](pagethreadprojection.md#content)
* [empty](pagethreadprojection.md#empty)
* [first](pagethreadprojection.md#first)
* [last](pagethreadprojection.md#last)
* [number](pagethreadprojection.md#number)
* [numberOfElements](pagethreadprojection.md#numberofelements)
* [pageable](pagethreadprojection.md#pageable)
* [size](pagethreadprojection.md#size)
* [sort](pagethreadprojection.md#sort)
* [totalElements](pagethreadprojection.md#totalelements)
* [totalPages](pagethreadprojection.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[ThreadProjection](threadprojection.md)>

*Defined in [src/generated/api.ts:3546](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3546)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3552](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3552)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3558](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3558)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3564](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3564)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3570](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3570)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3576](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3576)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3582](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3582)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3588](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3588)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3594](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3594)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3600](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3600)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3606](https://github.com/mailslurp/mailslurp-client/blob/6b679b8/src/generated/api.ts#L3606)*

**`memberof`** PageThreadProjection
