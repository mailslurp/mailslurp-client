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

*Defined in [src/generated/api.ts:1602](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1602)*

**`memberof`** PageEmailProjection

___

### empty

• `Optional` **empty**: boolean

*Defined in [src/generated/api.ts:1608](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1608)*

**`memberof`** PageEmailProjection

___

### first

• `Optional` **first**: boolean

*Defined in [src/generated/api.ts:1614](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1614)*

**`memberof`** PageEmailProjection

___

### last

• `Optional` **last**: boolean

*Defined in [src/generated/api.ts:1620](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1620)*

**`memberof`** PageEmailProjection

___

### number

• `Optional` **number**: number

*Defined in [src/generated/api.ts:1626](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1626)*

**`memberof`** PageEmailProjection

___

### numberOfElements

• `Optional` **numberOfElements**: number

*Defined in [src/generated/api.ts:1632](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1632)*

**`memberof`** PageEmailProjection

___

### pageable

• `Optional` **pageable**: [Pageable](pageable.md)

*Defined in [src/generated/api.ts:1638](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1638)*

**`memberof`** PageEmailProjection

___

### size

• `Optional` **size**: number

*Defined in [src/generated/api.ts:1644](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1644)*

**`memberof`** PageEmailProjection

___

### sort

• `Optional` **sort**: [Sort](sort.md)

*Defined in [src/generated/api.ts:1650](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1650)*

**`memberof`** PageEmailProjection

___

### totalElements

• `Optional` **totalElements**: number

*Defined in [src/generated/api.ts:1656](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1656)*

**`memberof`** PageEmailProjection

___

### totalPages

• `Optional` **totalPages**: number

*Defined in [src/generated/api.ts:1662](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L1662)*

**`memberof`** PageEmailProjection
