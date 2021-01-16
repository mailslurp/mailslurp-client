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

*Defined in [src/generated/api.ts:2744](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2744)*

**`memberof`** PageThreadProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2750](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2750)*

**`memberof`** PageThreadProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2756](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2756)*

**`memberof`** PageThreadProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2762](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2762)*

**`memberof`** PageThreadProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2768](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2768)*

**`memberof`** PageThreadProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2774](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2774)*

**`memberof`** PageThreadProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2780](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2780)*

**`memberof`** PageThreadProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2786](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2786)*

**`memberof`** PageThreadProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2792](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2792)*

**`memberof`** PageThreadProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2798](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2798)*

**`memberof`** PageThreadProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2804](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2804)*

**`memberof`** PageThreadProjection
