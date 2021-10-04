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

[src/generated/api.ts:3836](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3836)

___

### empty

• `Optional` **empty**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3842](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3842)

___

### first

• `Optional` **first**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3848](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3848)

___

### last

• `Optional` **last**: `boolean`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3854](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3854)

___

### number

• `Optional` **number**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3860](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3860)

___

### numberOfElements

• `Optional` **numberOfElements**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3866](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3866)

___

### pageable

• `Optional` **pageable**: [`Pageable`](Pageable.md)

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3872](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3872)

___

### size

• `Optional` **size**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3878](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3878)

___

### sort

• `Optional` **sort**: [`Sort`](Sort.md)

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3884](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3884)

___

### totalElements

• `Optional` **totalElements**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3890](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3890)

___

### totalPages

• `Optional` **totalPages**: `number`

**`memberof`** PageEmailProjection

#### Defined in

[src/generated/api.ts:3896](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L3896)
