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

*Defined in [src/generated/api.ts:4138](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4138)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:4144](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4144)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:4150](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4150)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:4156](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4156)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:4162](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4162)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:4168](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4168)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:4174](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4174)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:4180](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4180)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:4186](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4186)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:4192](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4192)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:4198](https://github.com/mailslurp/mailslurp-client/blob/eace919/src/generated/api.ts#L4198)*

**`memberof`** PageThreadProjection
