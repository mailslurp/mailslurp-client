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
- [createConnectorSyncSettings](ConnectorControllerApi.md#createconnectorsyncsettings)
- [createConnectorSyncSettingsRaw](ConnectorControllerApi.md#createconnectorsyncsettingsraw)
- [createConnectorWithOptions](ConnectorControllerApi.md#createconnectorwithoptions)
- [createConnectorWithOptionsRaw](ConnectorControllerApi.md#createconnectorwithoptionsraw)
- [deleteAllConnector](ConnectorControllerApi.md#deleteallconnector)
- [deleteAllConnectorRaw](ConnectorControllerApi.md#deleteallconnectorraw)
- [deleteConnector](ConnectorControllerApi.md#deleteconnector)
- [deleteConnectorImapConnection](ConnectorControllerApi.md#deleteconnectorimapconnection)
- [deleteConnectorImapConnectionRaw](ConnectorControllerApi.md#deleteconnectorimapconnectionraw)
- [deleteConnectorRaw](ConnectorControllerApi.md#deleteconnectorraw)
- [deleteConnectorSmtpConnection](ConnectorControllerApi.md#deleteconnectorsmtpconnection)
- [deleteConnectorSmtpConnectionRaw](ConnectorControllerApi.md#deleteconnectorsmtpconnectionraw)
- [deleteConnectorSyncSettings](ConnectorControllerApi.md#deleteconnectorsyncsettings)
- [deleteConnectorSyncSettingsRaw](ConnectorControllerApi.md#deleteconnectorsyncsettingsraw)
- [getAllConnectorEvents](ConnectorControllerApi.md#getallconnectorevents)
- [getAllConnectorEventsRaw](ConnectorControllerApi.md#getallconnectoreventsraw)
- [getConnector](ConnectorControllerApi.md#getconnector)
- [getConnectorByEmailAddress](ConnectorControllerApi.md#getconnectorbyemailaddress)
- [getConnectorByEmailAddressRaw](ConnectorControllerApi.md#getconnectorbyemailaddressraw)
- [getConnectorByInboxId](ConnectorControllerApi.md#getconnectorbyinboxid)
- [getConnectorByInboxIdRaw](ConnectorControllerApi.md#getconnectorbyinboxidraw)
- [getConnectorByName](ConnectorControllerApi.md#getconnectorbyname)
- [getConnectorByNameRaw](ConnectorControllerApi.md#getconnectorbynameraw)
- [getConnectorEvent](ConnectorControllerApi.md#getconnectorevent)
- [getConnectorEventRaw](ConnectorControllerApi.md#getconnectoreventraw)
- [getConnectorEvents](ConnectorControllerApi.md#getconnectorevents)
- [getConnectorEventsRaw](ConnectorControllerApi.md#getconnectoreventsraw)
- [getConnectorImapConnection](ConnectorControllerApi.md#getconnectorimapconnection)
- [getConnectorImapConnectionRaw](ConnectorControllerApi.md#getconnectorimapconnectionraw)
- [getConnectorProviderSettings](ConnectorControllerApi.md#getconnectorprovidersettings)
- [getConnectorProviderSettingsRaw](ConnectorControllerApi.md#getconnectorprovidersettingsraw)
- [getConnectorRaw](ConnectorControllerApi.md#getconnectorraw)
- [getConnectorSmtpConnection](ConnectorControllerApi.md#getconnectorsmtpconnection)
- [getConnectorSmtpConnectionRaw](ConnectorControllerApi.md#getconnectorsmtpconnectionraw)
- [getConnectorSyncSettings](ConnectorControllerApi.md#getconnectorsyncsettings)
- [getConnectorSyncSettingsRaw](ConnectorControllerApi.md#getconnectorsyncsettingsraw)
- [getConnectors](ConnectorControllerApi.md#getconnectors)
- [getConnectorsRaw](ConnectorControllerApi.md#getconnectorsraw)
- [request](ConnectorControllerApi.md#request)
- [sendEmailFromConnector](ConnectorControllerApi.md#sendemailfromconnector)
- [sendEmailFromConnectorRaw](ConnectorControllerApi.md#sendemailfromconnectorraw)
- [syncConnector](ConnectorControllerApi.md#syncconnector)
- [syncConnectorRaw](ConnectorControllerApi.md#syncconnectorraw)
- [testConnectorImapConnection](ConnectorControllerApi.md#testconnectorimapconnection)
- [testConnectorImapConnectionOptions](ConnectorControllerApi.md#testconnectorimapconnectionoptions)
- [testConnectorImapConnectionOptionsRaw](ConnectorControllerApi.md#testconnectorimapconnectionoptionsraw)
- [testConnectorImapConnectionRaw](ConnectorControllerApi.md#testconnectorimapconnectionraw)
- [testConnectorSmtpConnection](ConnectorControllerApi.md#testconnectorsmtpconnection)
- [testConnectorSmtpConnectionOptions](ConnectorControllerApi.md#testconnectorsmtpconnectionoptions)
- [testConnectorSmtpConnectionOptionsRaw](ConnectorControllerApi.md#testconnectorsmtpconnectionoptionsraw)
- [testConnectorSmtpConnectionRaw](ConnectorControllerApi.md#testconnectorsmtpconnectionraw)
- [updateConnector](ConnectorControllerApi.md#updateconnector)
- [updateConnectorImapConnection](ConnectorControllerApi.md#updateconnectorimapconnection)
- [updateConnectorImapConnectionRaw](ConnectorControllerApi.md#updateconnectorimapconnectionraw)
- [updateConnectorRaw](ConnectorControllerApi.md#updateconnectorraw)
- [updateConnectorSmtpConnection](ConnectorControllerApi.md#updateconnectorsmtpconnection)
- [updateConnectorSmtpConnectionRaw](ConnectorControllerApi.md#updateconnectorsmtpconnectionraw)
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

### createConnectorSyncSettings

▸ **createConnectorSyncSettings**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorSyncSettingsDto`](../interfaces/ConnectorSyncSettingsDto.md)\>

Configure automatic pull or emails from external inboxes using an interval or schedule
Create an inbox connector sync settings

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorSyncSettingsRequest`](../interfaces/CreateConnectorSyncSettingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorSyncSettingsDto`](../interfaces/ConnectorSyncSettingsDto.md)\>

___

### createConnectorSyncSettingsRaw

▸ **createConnectorSyncSettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSyncSettingsDto`](../interfaces/ConnectorSyncSettingsDto.md)\>\>

Configure automatic pull or emails from external inboxes using an interval or schedule
Create an inbox connector sync settings

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorSyncSettingsRequest`](../interfaces/CreateConnectorSyncSettingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSyncSettingsDto`](../interfaces/ConnectorSyncSettingsDto.md)\>\>

___

### createConnectorWithOptions

▸ **createConnectorWithOptions**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>

Sync emails between external mailboxes and MailSlurp inboxes
Create an inbox connector with options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorWithOptionsRequest`](../interfaces/CreateConnectorWithOptionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>

___

### createConnectorWithOptionsRaw

▸ **createConnectorWithOptionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>\>

Sync emails between external mailboxes and MailSlurp inboxes
Create an inbox connector with options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateConnectorWithOptionsRequest`](../interfaces/CreateConnectorWithOptionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorDto`](../interfaces/ConnectorDto.md)\>\>

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

### deleteConnectorSyncSettings

▸ **deleteConnectorSyncSettings**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Configure automatic pull or emails from external inboxes using an interval or schedule
Create an inbox connector sync settings

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteConnectorSyncSettingsRequest`](../interfaces/DeleteConnectorSyncSettingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteConnectorSyncSettingsRaw

▸ **deleteConnectorSyncSettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Configure automatic pull or emails from external inboxes using an interval or schedule
Create an inbox connector sync settings

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteConnectorSyncSettingsRequest`](../interfaces/DeleteConnectorSyncSettingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAllConnectorEvents

▸ **getAllConnectorEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`PageConnectorEvents`](../interfaces/PageConnectorEvents.md)\>

Get all inbox connector events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllConnectorEventsRequest`](../interfaces/GetAllConnectorEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageConnectorEvents`](../interfaces/PageConnectorEvents.md)\>

___

### getAllConnectorEventsRaw

▸ **getAllConnectorEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnectorEvents`](../interfaces/PageConnectorEvents.md)\>\>

Get all inbox connector events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllConnectorEventsRequest`](../interfaces/GetAllConnectorEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnectorEvents`](../interfaces/PageConnectorEvents.md)\>\>

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

### getConnectorByEmailAddress

▸ **getConnectorByEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>

Find an inbox connector by email address
Get connector by email address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorByEmailAddressRequest`](../interfaces/GetConnectorByEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>

___

### getConnectorByEmailAddressRaw

▸ **getConnectorByEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>\>

Find an inbox connector by email address
Get connector by email address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorByEmailAddressRequest`](../interfaces/GetConnectorByEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>\>

___

### getConnectorByInboxId

▸ **getConnectorByInboxId**(`requestParameters`, `initOverrides?`): `Promise`<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>

Find an inbox connector by inbox ID
Get connector by inbox ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorByInboxIdRequest`](../interfaces/GetConnectorByInboxIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>

___

### getConnectorByInboxIdRaw

▸ **getConnectorByInboxIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>\>

Find an inbox connector by inbox ID
Get connector by inbox ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorByInboxIdRequest`](../interfaces/GetConnectorByInboxIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>\>

___

### getConnectorByName

▸ **getConnectorByName**(`requestParameters`, `initOverrides?`): `Promise`<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>

Find an inbox connector by name
Get connector by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorByNameRequest`](../interfaces/GetConnectorByNameRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>

___

### getConnectorByNameRaw

▸ **getConnectorByNameRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>\>

Find an inbox connector by name
Get connector by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorByNameRequest`](../interfaces/GetConnectorByNameRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorDto`](../interfaces/OptionalConnectorDto.md)\>\>

___

### getConnectorEvent

▸ **getConnectorEvent**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorEventDto`](../interfaces/ConnectorEventDto.md)\>

Get an inbox connector event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorEventRequest`](../interfaces/GetConnectorEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorEventDto`](../interfaces/ConnectorEventDto.md)\>

___

### getConnectorEventRaw

▸ **getConnectorEventRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorEventDto`](../interfaces/ConnectorEventDto.md)\>\>

Get an inbox connector event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorEventRequest`](../interfaces/GetConnectorEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorEventDto`](../interfaces/ConnectorEventDto.md)\>\>

___

### getConnectorEvents

▸ **getConnectorEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`PageConnectorEvents`](../interfaces/PageConnectorEvents.md)\>

Get an inbox connector events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorEventsRequest`](../interfaces/GetConnectorEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageConnectorEvents`](../interfaces/PageConnectorEvents.md)\>

___

### getConnectorEventsRaw

▸ **getConnectorEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnectorEvents`](../interfaces/PageConnectorEvents.md)\>\>

Get an inbox connector events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorEventsRequest`](../interfaces/GetConnectorEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageConnectorEvents`](../interfaces/PageConnectorEvents.md)\>\>

___

### getConnectorImapConnection

▸ **getConnectorImapConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`OptionalConnectorImapConnectionDto`](../interfaces/OptionalConnectorImapConnectionDto.md)\>

Get IMAP connection for external inbox
Get an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorImapConnectionRequest`](../interfaces/GetConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OptionalConnectorImapConnectionDto`](../interfaces/OptionalConnectorImapConnectionDto.md)\>

___

### getConnectorImapConnectionRaw

▸ **getConnectorImapConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorImapConnectionDto`](../interfaces/OptionalConnectorImapConnectionDto.md)\>\>

Get IMAP connection for external inbox
Get an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorImapConnectionRequest`](../interfaces/GetConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorImapConnectionDto`](../interfaces/OptionalConnectorImapConnectionDto.md)\>\>

___

### getConnectorProviderSettings

▸ **getConnectorProviderSettings**(`initOverrides?`): `Promise`<[`ConnectorProviderSettingsDto`](../interfaces/ConnectorProviderSettingsDto.md)\>

Get common mail provider SMTP and IMAP connection settings
Get SMTP and IMAP connection settings for common mail providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorProviderSettingsDto`](../interfaces/ConnectorProviderSettingsDto.md)\>

___

### getConnectorProviderSettingsRaw

▸ **getConnectorProviderSettingsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorProviderSettingsDto`](../interfaces/ConnectorProviderSettingsDto.md)\>\>

Get common mail provider SMTP and IMAP connection settings
Get SMTP and IMAP connection settings for common mail providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorProviderSettingsDto`](../interfaces/ConnectorProviderSettingsDto.md)\>\>

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

### getConnectorSmtpConnection

▸ **getConnectorSmtpConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`OptionalConnectorSmtpConnectionDto`](../interfaces/OptionalConnectorSmtpConnectionDto.md)\>

Get SMTP connection for external inbox
Get an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorSmtpConnectionRequest`](../interfaces/GetConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OptionalConnectorSmtpConnectionDto`](../interfaces/OptionalConnectorSmtpConnectionDto.md)\>

___

### getConnectorSmtpConnectionRaw

▸ **getConnectorSmtpConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorSmtpConnectionDto`](../interfaces/OptionalConnectorSmtpConnectionDto.md)\>\>

Get SMTP connection for external inbox
Get an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorSmtpConnectionRequest`](../interfaces/GetConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorSmtpConnectionDto`](../interfaces/OptionalConnectorSmtpConnectionDto.md)\>\>

___

### getConnectorSyncSettings

▸ **getConnectorSyncSettings**(`requestParameters`, `initOverrides?`): `Promise`<[`OptionalConnectorSyncSettingsDto`](../interfaces/OptionalConnectorSyncSettingsDto.md)\>

Get sync settings for connection with external inbox
Get an inbox connector sync settings

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorSyncSettingsRequest`](../interfaces/GetConnectorSyncSettingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OptionalConnectorSyncSettingsDto`](../interfaces/OptionalConnectorSyncSettingsDto.md)\>

___

### getConnectorSyncSettingsRaw

▸ **getConnectorSyncSettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorSyncSettingsDto`](../interfaces/OptionalConnectorSyncSettingsDto.md)\>\>

Get sync settings for connection with external inbox
Get an inbox connector sync settings

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectorSyncSettingsRequest`](../interfaces/GetConnectorSyncSettingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OptionalConnectorSyncSettingsDto`](../interfaces/OptionalConnectorSyncSettingsDto.md)\>\>

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

### sendEmailFromConnector

▸ **sendEmailFromConnector**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Send from an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailFromConnectorRequest`](../interfaces/SendEmailFromConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### sendEmailFromConnectorRaw

▸ **sendEmailFromConnectorRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Send from an inbox connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailFromConnectorRequest`](../interfaces/SendEmailFromConnectorRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

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

### testConnectorImapConnection

▸ **testConnectorImapConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorImapConnectionTestResult`](../interfaces/ConnectorImapConnectionTestResult.md)\>

Test the IMAP connection for a connector
Test an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestConnectorImapConnectionRequest`](../interfaces/TestConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorImapConnectionTestResult`](../interfaces/ConnectorImapConnectionTestResult.md)\>

___

### testConnectorImapConnectionOptions

▸ **testConnectorImapConnectionOptions**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorImapConnectionTestResult`](../interfaces/ConnectorImapConnectionTestResult.md)\>

Test the IMAP connection options for a connector
Test an inbox connector IMAP connection options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestConnectorImapConnectionOptionsRequest`](../interfaces/TestConnectorImapConnectionOptionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorImapConnectionTestResult`](../interfaces/ConnectorImapConnectionTestResult.md)\>

___

### testConnectorImapConnectionOptionsRaw

▸ **testConnectorImapConnectionOptionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorImapConnectionTestResult`](../interfaces/ConnectorImapConnectionTestResult.md)\>\>

Test the IMAP connection options for a connector
Test an inbox connector IMAP connection options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestConnectorImapConnectionOptionsRequest`](../interfaces/TestConnectorImapConnectionOptionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorImapConnectionTestResult`](../interfaces/ConnectorImapConnectionTestResult.md)\>\>

___

### testConnectorImapConnectionRaw

▸ **testConnectorImapConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorImapConnectionTestResult`](../interfaces/ConnectorImapConnectionTestResult.md)\>\>

Test the IMAP connection for a connector
Test an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestConnectorImapConnectionRequest`](../interfaces/TestConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorImapConnectionTestResult`](../interfaces/ConnectorImapConnectionTestResult.md)\>\>

___

### testConnectorSmtpConnection

▸ **testConnectorSmtpConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorSmtpConnectionTestResult`](../interfaces/ConnectorSmtpConnectionTestResult.md)\>

Test the SMTP connection for a connector
Test an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestConnectorSmtpConnectionRequest`](../interfaces/TestConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorSmtpConnectionTestResult`](../interfaces/ConnectorSmtpConnectionTestResult.md)\>

___

### testConnectorSmtpConnectionOptions

▸ **testConnectorSmtpConnectionOptions**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorSmtpConnectionTestResult`](../interfaces/ConnectorSmtpConnectionTestResult.md)\>

Test the SMTP connection options for a connector
Test an inbox connector SMTP connection options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestConnectorSmtpConnectionOptionsRequest`](../interfaces/TestConnectorSmtpConnectionOptionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorSmtpConnectionTestResult`](../interfaces/ConnectorSmtpConnectionTestResult.md)\>

___

### testConnectorSmtpConnectionOptionsRaw

▸ **testConnectorSmtpConnectionOptionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSmtpConnectionTestResult`](../interfaces/ConnectorSmtpConnectionTestResult.md)\>\>

Test the SMTP connection options for a connector
Test an inbox connector SMTP connection options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestConnectorSmtpConnectionOptionsRequest`](../interfaces/TestConnectorSmtpConnectionOptionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSmtpConnectionTestResult`](../interfaces/ConnectorSmtpConnectionTestResult.md)\>\>

___

### testConnectorSmtpConnectionRaw

▸ **testConnectorSmtpConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSmtpConnectionTestResult`](../interfaces/ConnectorSmtpConnectionTestResult.md)\>\>

Test the SMTP connection for a connector
Test an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestConnectorSmtpConnectionRequest`](../interfaces/TestConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSmtpConnectionTestResult`](../interfaces/ConnectorSmtpConnectionTestResult.md)\>\>

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

### updateConnectorImapConnection

▸ **updateConnectorImapConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorImapConnectionDto`](../interfaces/ConnectorImapConnectionDto.md)\>

Update IMAP connection for external inbox
Update an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateConnectorImapConnectionRequest`](../interfaces/UpdateConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorImapConnectionDto`](../interfaces/ConnectorImapConnectionDto.md)\>

___

### updateConnectorImapConnectionRaw

▸ **updateConnectorImapConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorImapConnectionDto`](../interfaces/ConnectorImapConnectionDto.md)\>\>

Update IMAP connection for external inbox
Update an inbox connector IMAP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateConnectorImapConnectionRequest`](../interfaces/UpdateConnectorImapConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorImapConnectionDto`](../interfaces/ConnectorImapConnectionDto.md)\>\>

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

### updateConnectorSmtpConnection

▸ **updateConnectorSmtpConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectorSmtpConnectionDto`](../interfaces/ConnectorSmtpConnectionDto.md)\>

Update SMTP connection for external inbox
Update an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateConnectorSmtpConnectionRequest`](../interfaces/UpdateConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectorSmtpConnectionDto`](../interfaces/ConnectorSmtpConnectionDto.md)\>

___

### updateConnectorSmtpConnectionRaw

▸ **updateConnectorSmtpConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSmtpConnectionDto`](../interfaces/ConnectorSmtpConnectionDto.md)\>\>

Update SMTP connection for external inbox
Update an inbox connector SMTP connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateConnectorSmtpConnectionRequest`](../interfaces/UpdateConnectorSmtpConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ConnectorSmtpConnectionDto`](../interfaces/ConnectorSmtpConnectionDto.md)\>\>

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
