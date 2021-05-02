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

*Defined in [src/generated/api.ts:3200](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3200)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:3206](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3206)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:3212](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3212)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:3218](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3218)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:3224](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3224)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:3230](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3230)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:3236](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3236)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:3242](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3242)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:3248](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3248)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:3254](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3254)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:3260](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L3260)*

**`memberof`** PageThreadProjection
