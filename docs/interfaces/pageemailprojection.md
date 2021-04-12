**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / PageEmailProjection

# Interface: PageEmailProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`** 

**`interface`** PageEmailProjection

## Hierarchy

* **PageEmailProjection**

## Index

### Properties

* [content](pageemailprojection.md#content)
* [empty](pageemailprojection.md#empty)
* [first](pageemailprojection.md#first)
* [last](pageemailprojection.md#last)
* [number](pageemailprojection.md#number)
* [numberOfElements](pageemailprojection.md#numberofelements)
* [pageable](pageemailprojection.md#pageable)
* [size](pageemailprojection.md#size)
* [sort](pageemailprojection.md#sort)
* [totalElements](pageemailprojection.md#totalelements)
* [totalPages](pageemailprojection.md#totalpages)

## Properties

### content

• `Optional` **content**: Array\<[EmailProjection](emailprojection.md)>

*Defined in [src/generated/api.ts:2448](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2448)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:2454](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2454)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:2460](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2460)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:2466](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2466)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:2472](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2472)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:2478](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2478)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:2484](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2484)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:2490](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2490)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:2496](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2496)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:2502](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2502)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:2508](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2508)*

**`memberof`** PageEmailProjection
