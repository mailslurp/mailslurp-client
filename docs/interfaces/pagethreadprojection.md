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

*Defined in [src/generated/api.ts:3626](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3626)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3632](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3632)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3638](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3638)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3644](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3644)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3650](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3650)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3656](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3656)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3662](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3662)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3668](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3668)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3674](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3674)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3680](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3680)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3686](https://github.com/mailslurp/mailslurp-client/blob/24bff2e/src/generated/api.ts#L3686)*

**`memberof`** PageThreadProjection
