[MailSlurp JS](../README.md) / ConnectorControllerApi

# Class: ConnectorControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ConnectorControllerApi`**

## Table of contents

### Constructors

- [constructor](ConnectorControllerApi.md#constructor)

### Properties

- [configuration](ConnectorControllerApi.md#configuration)

### Methods

- [createConnector](ConnectorControllerApi.md#createconnector)
- [createConnectorImapConnection](ConnectorControllerApi.md#createconnectorimapconnection)
- [createConnectorImapConnectionRaw](ConnectorControllerApi.md#createconnectorimapconnectionraw)
- [createConnectorRaw](ConnectorControllerApi.md#createconnectorraw)
- [createConnectorSmtpConnection](ConnectorControllerApi.md#createconnectorsmtpconnection)
- [createConnectorSmtpConnectionRaw](ConnectorControllerApi.md#createconnectorsmtpconnectionraw)
- [deleteAllConnector](ConnectorControllerApi.md#deleteallconnector)
- [deleteAllConnectorRaw](ConnectorControllerApi.md#deleteallconnectorraw)
- [deleteConnector](ConnectorControllerApi.md#deleteconnector)
- [deleteConnectorImapConnection](ConnectorControllerApi.md#deleteconnectorimapconnection)
- [deleteConnectorImapConnectionRaw](ConnectorControllerApi.md#deleteconnectorimapconnectionraw)
- [deleteConnectorRaw](ConnectorControllerApi.md#deleteconnectorraw)
- [deleteConnectorSmtpConnection](ConnectorControllerApi.md#deleteconnectorsmtpconnection)
- [deleteConnectorSmtpConnectionRaw](ConnectorControllerApi.md#deleteconnectorsmtpconnectionraw)
- [getAllConnectorSyncEvents](ConnectorControllerApi.md#getallconnectorsyncevents)
- [getAllConnectorSyncEventsRaw](ConnectorControllerApi.md#getallconnectorsynceventsraw)
- [getConnector](ConnectorControllerApi.md#getconnector)
- [getConnectorRaw](ConnectorControllerApi.md#getconnectorraw)
- [getConnectorSyncEvent](ConnectorControllerApi.md#getconnectorsyncevent)
- [getConnectorSyncEventRaw](ConnectorControllerApi.md#getconnectorsynceventraw)
- [getConnectorSyncEvents](ConnectorControllerApi.md#getconnectorsyncevents)
- [getConnectorSyncEventsRaw](ConnectorControllerApi.md#getconnectorsynceventsraw)
- [getConnectors](ConnectorControllerApi.md#getconnectors)
- [getConnectorsRaw](ConnectorControllerApi.md#getconnectorsraw)
- [request](ConnectorControllerApi.md#request)
- [syncConnector](ConnectorControllerApi.md#syncconnector)
- [syncConnectorRaw](ConnectorControllerApi.md#syncconnectorraw)
- [updateConnector](ConnectorControllerApi.md#updateconnector)
- [updateConnectorRaw](ConnectorControllerApi.md#updateconnectorraw)
- [withMiddleware](ConnectorControllerApi.md#withmiddleware)
- [withPostMiddleware](ConnectorControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ConnectorControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ConnectorControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### createConnector

▸ **createConnector**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>

Sync emails between external mailboxes and MailSlurp inboxes
Create an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorRequest`](../interfaces/CreateConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>

___

### createConnectorImapConnection

▸ **createConnectorImapConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorImapConnectionDto`](../interfaces/ConnectorImapConnectionDto.md)\>

Allows the reading of emails in an external mailbox and syncing to a MailSlurp inbox
Create an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorImapConnectionRequest`](../interfaces/CreateConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorImapConnectionDto`](../interfaces/ConnectorImapConnectionDto.md)\>

___

### createConnectorImapConnectionRaw

▸ **createConnectorImapConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorImapConnectionDto`](../interfaces/ConnectorImapConnectionDto.md)\>\>

Allows the reading of emails in an external mailbox and syncing to a MailSlurp inbox
Create an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorImapConnectionRequest`](../interfaces/CreateConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorImapConnectionDto`](../interfaces/ConnectorImapConnectionDto.md)\>\>

___

### createConnectorRaw

▸ **createConnectorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>\>

Sync emails between external mailboxes and MailSlurp inboxes
Create an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorRequest`](../interfaces/CreateConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>\>

___

### createConnectorSmtpConnection

▸ **createConnectorSmtpConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorSmtpConnectionDto`](../interfaces/ConnectorSmtpConnectionDto.md)\>

Allows sending via connector and email is routed to connected inbox and sent via SMTP
Create an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorSmtpConnectionRequest`](../interfaces/CreateConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorSmtpConnectionDto`](../interfaces/ConnectorSmtpConnectionDto.md)\>

___

### createConnectorSmtpConnectionRaw

▸ **createConnectorSmtpConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSmtpConnectionDto`](../interfaces/ConnectorSmtpConnectionDto.md)\>\>

Allows sending via connector and email is routed to connected inbox and sent via SMTP
Create an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorSmtpConnectionRequest`](../interfaces/CreateConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSmtpConnectionDto`](../interfaces/ConnectorSmtpConnectionDto.md)\>\>

___

### deleteAllConnector

▸ **deleteAllConnector**(`initOverrides?`): `Promise`<`void`\>

Delete all inbox connectors

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAllConnectorRaw

▸ **deleteAllConnectorRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete all inbox connectors

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteConnector

▸ **deleteConnector**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteConnectorRequest`](../interfaces/DeleteConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteConnectorImapConnection

▸ **deleteConnectorImapConnection**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete IMAP connection for external inbox
Delete an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteConnectorImapConnectionRequest`](../interfaces/DeleteConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteConnectorImapConnectionRaw

▸ **deleteConnectorImapConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete IMAP connection for external inbox
Delete an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteConnectorImapConnectionRequest`](../interfaces/DeleteConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteConnectorRaw

▸ **deleteConnectorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteConnectorRequest`](../interfaces/DeleteConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteConnectorSmtpConnection

▸ **deleteConnectorSmtpConnection**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete SMTP connection for external inbox
Delete an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteConnectorSmtpConnectionRequest`](../interfaces/DeleteConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteConnectorSmtpConnectionRaw

▸ **deleteConnectorSmtpConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete SMTP connection for external inbox
Delete an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteConnectorSmtpConnectionRequest`](../interfaces/DeleteConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAllConnectorSyncEvents

▸ **getAllConnectorSyncEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`PageConnectorSyncEvents`](../interfaces/PageConnectorSyncEvents.md)\>

Get all inbox connector sync events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllConnectorSyncEventsRequest`](../interfaces/GetAllConnectorSyncEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageConnectorSyncEvents`](../interfaces/PageConnectorSyncEvents.md)\>

___

### getAllConnectorSyncEventsRaw

▸ **getAllConnectorSyncEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnectorSyncEvents`](../interfaces/PageConnectorSyncEvents.md)\>\>

Get all inbox connector sync events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllConnectorSyncEventsRequest`](../interfaces/GetAllConnectorSyncEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnectorSyncEvents`](../interfaces/PageConnectorSyncEvents.md)\>\>

___

### getConnector

▸ **getConnector**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>

Get an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorRequest`](../interfaces/GetConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>

___

### getConnectorRaw

▸ **getConnectorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>\>

Get an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorRequest`](../interfaces/GetConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>\>

___

### getConnectorSyncEvent

▸ **getConnectorSyncEvent**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorSyncEventDto`](../interfaces/ConnectorSyncEventDto.md)\>

Get an inbox connector sync event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorSyncEventRequest`](../interfaces/GetConnectorSyncEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorSyncEventDto`](../interfaces/ConnectorSyncEventDto.md)\>

___

### getConnectorSyncEventRaw

▸ **getConnectorSyncEventRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSyncEventDto`](../interfaces/ConnectorSyncEventDto.md)\>\>

Get an inbox connector sync event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorSyncEventRequest`](../interfaces/GetConnectorSyncEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSyncEventDto`](../interfaces/ConnectorSyncEventDto.md)\>\>

___

### getConnectorSyncEvents

▸ **getConnectorSyncEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`PageConnectorSyncEvents`](../interfaces/PageConnectorSyncEvents.md)\>

Get an inbox connector sync events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorSyncEventsRequest`](../interfaces/GetConnectorSyncEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageConnectorSyncEvents`](../interfaces/PageConnectorSyncEvents.md)\>

___

### getConnectorSyncEventsRaw

▸ **getConnectorSyncEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnectorSyncEvents`](../interfaces/PageConnectorSyncEvents.md)\>\>

Get an inbox connector sync events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorSyncEventsRequest`](../interfaces/GetConnectorSyncEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnectorSyncEvents`](../interfaces/PageConnectorSyncEvents.md)\>\>

___

### getConnectors

▸ **getConnectors**(`requestParameters`, `initOverrides?`): `Promise`<[`PageConnector`](../interfaces/PageConnector.md)\>

List inbox connectors that sync external emails to MailSlurp inboxes
Get inbox connectors

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorsRequest`](../interfaces/GetConnectorsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageConnector`](../interfaces/PageConnector.md)\>

___

### getConnectorsRaw

▸ **getConnectorsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnector`](../interfaces/PageConnector.md)\>\>

List inbox connectors that sync external emails to MailSlurp inboxes
Get inbox connectors

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorsRequest`](../interfaces/GetConnectorsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnector`](../interfaces/PageConnector.md)\>\>

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

___

### syncConnector

▸ **syncConnector**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorSyncRequestResult`](../interfaces/ConnectorSyncRequestResult.md)\>

Sync an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SyncConnectorRequest`](../interfaces/SyncConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorSyncRequestResult`](../interfaces/ConnectorSyncRequestResult.md)\>

___

### syncConnectorRaw

▸ **syncConnectorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSyncRequestResult`](../interfaces/ConnectorSyncRequestResult.md)\>\>

Sync an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SyncConnectorRequest`](../interfaces/SyncConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSyncRequestResult`](../interfaces/ConnectorSyncRequestResult.md)\>\>

___

### updateConnector

▸ **updateConnector**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>

Update an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateConnectorRequest`](../interfaces/UpdateConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>

___

### updateConnectorRaw

▸ **updateConnectorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>\>

Update an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateConnectorRequest`](../interfaces/UpdateConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>\>

___

### withMiddleware

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)
