[MailSlurp JS](../README.md) / PageEmailProjection

# Interface: PageEmailProjection

Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.

**`export`**

**`interface`** PageEmailProjection

## Table of contents

### Properties

- [content](PageEmailProjection.md#content)
- [empty](PageEmailProjection.md#empty)
- [first](PageEmailProjection.md#first)
- [last](PageEmailProjection.md#last)
- [number](PageEmailProjection.md#number)
- [numberOfElements](PageEmailProjection.md#numberofelements)
- [pageable](PageEmailProjection.md#pageable)
- [size](PageEmailProjection.md#size)
- [sort](PageEmailProjection.md#sort)
- [totalElements](PageEmailProjection.md#totalelements)
- [totalPages](PageEmailProjection.md#totalpages)

## Properties

### content

• `Optional` **content**: [`EmailProjection`](EmailProjection.md)[]

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3790](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3790)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3796](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3796)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3802](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3802)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3808](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3808)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3814](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3814)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3820](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3820)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3826](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3826)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3832](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3832)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3838](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3838)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3844](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3844)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3850](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3850)
