[MailSlurp JS](../README.md) / ApiSendingConnectionControllerApi

# Class: ApiSendingConnectionControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ApiSendingConnectionControllerApi`**

## Table of contents

### Constructors

- [constructor](ApiSendingConnectionControllerApi.md#constructor)

### Properties

- [configuration](ApiSendingConnectionControllerApi.md#configuration)

### Methods

- [createSendingConnection](ApiSendingConnectionControllerApi.md#createsendingconnection)
- [createSendingConnectionRaw](ApiSendingConnectionControllerApi.md#createsendingconnectionraw)
- [deleteDeliverySenderSeats](ApiSendingConnectionControllerApi.md#deletedeliverysenderseats)
- [deleteDeliverySenderSeatsRaw](ApiSendingConnectionControllerApi.md#deletedeliverysenderseatsraw)
- [deleteSendingConnection](ApiSendingConnectionControllerApi.md#deletesendingconnection)
- [deleteSendingConnectionRaw](ApiSendingConnectionControllerApi.md#deletesendingconnectionraw)
- [disableSendingConnection](ApiSendingConnectionControllerApi.md#disablesendingconnection)
- [disableSendingConnectionRaw](ApiSendingConnectionControllerApi.md#disablesendingconnectionraw)
- [enableSendingConnection](ApiSendingConnectionControllerApi.md#enablesendingconnection)
- [enableSendingConnectionRaw](ApiSendingConnectionControllerApi.md#enablesendingconnectionraw)
- [getDeliverySenderCapacity](ApiSendingConnectionControllerApi.md#getdeliverysendercapacity)
- [getDeliverySenderCapacityRaw](ApiSendingConnectionControllerApi.md#getdeliverysendercapacityraw)
- [getSendingConnection](ApiSendingConnectionControllerApi.md#getsendingconnection)
- [getSendingConnectionProviders](ApiSendingConnectionControllerApi.md#getsendingconnectionproviders)
- [getSendingConnectionProvidersRaw](ApiSendingConnectionControllerApi.md#getsendingconnectionprovidersraw)
- [getSendingConnectionRaw](ApiSendingConnectionControllerApi.md#getsendingconnectionraw)
- [getSendingConnections](ApiSendingConnectionControllerApi.md#getsendingconnections)
- [getSendingConnectionsRaw](ApiSendingConnectionControllerApi.md#getsendingconnectionsraw)
- [probeSendingConnectionDelivery](ApiSendingConnectionControllerApi.md#probesendingconnectiondelivery)
- [probeSendingConnectionDeliveryRaw](ApiSendingConnectionControllerApi.md#probesendingconnectiondeliveryraw)
- [request](ApiSendingConnectionControllerApi.md#request)
- [rotateSendingConnectionCredentials](ApiSendingConnectionControllerApi.md#rotatesendingconnectioncredentials)
- [rotateSendingConnectionCredentialsRaw](ApiSendingConnectionControllerApi.md#rotatesendingconnectioncredentialsraw)
- [updateDeliverySenderSeats](ApiSendingConnectionControllerApi.md#updatedeliverysenderseats)
- [updateDeliverySenderSeatsRaw](ApiSendingConnectionControllerApi.md#updatedeliverysenderseatsraw)
- [updateSendingConnection](ApiSendingConnectionControllerApi.md#updatesendingconnection)
- [updateSendingConnectionRaw](ApiSendingConnectionControllerApi.md#updatesendingconnectionraw)
- [verifySendingConnection](ApiSendingConnectionControllerApi.md#verifysendingconnection)
- [verifySendingConnectionRaw](ApiSendingConnectionControllerApi.md#verifysendingconnectionraw)
- [withMiddleware](ApiSendingConnectionControllerApi.md#withmiddleware)
- [withPostMiddleware](ApiSendingConnectionControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ApiSendingConnectionControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ApiSendingConnectionControllerApi**(`configuration?`)

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

### createSendingConnection

▸ **createSendingConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

Create a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateSendingConnectionRequest`](../interfaces/CreateSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

___

### createSendingConnectionRaw

▸ **createSendingConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

Create a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateSendingConnectionRequest`](../interfaces/CreateSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

___

### deleteDeliverySenderSeats

▸ **deleteDeliverySenderSeats**(`initOverrides?`): `Promise`<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>

Cancel purchased Delivery Sender seats

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>

___

### deleteDeliverySenderSeatsRaw

▸ **deleteDeliverySenderSeatsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>\>

Cancel purchased Delivery Sender seats

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>\>

___

### deleteSendingConnection

▸ **deleteSendingConnection**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Disconnect a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteSendingConnectionRequest`](../interfaces/DeleteSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteSendingConnectionRaw

▸ **deleteSendingConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Disconnect a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteSendingConnectionRequest`](../interfaces/DeleteSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### disableSendingConnection

▸ **disableSendingConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

Releases this connection\'s shared sender allocation while retaining its verified credentials.
Disable Delivery Sender capacity

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DisableSendingConnectionRequest`](../interfaces/DisableSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

___

### disableSendingConnectionRaw

▸ **disableSendingConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

Releases this connection\'s shared sender allocation while retaining its verified credentials.
Disable Delivery Sender capacity

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DisableSendingConnectionRequest`](../interfaces/DisableSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

___

### enableSendingConnection

▸ **enableSendingConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

Allocates shared sender capacity. Included capacity is used first and supported additional capacity is added to the existing subscription when possible.
Enable a verified Delivery Sender

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EnableSendingConnectionRequest`](../interfaces/EnableSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

___

### enableSendingConnectionRaw

▸ **enableSendingConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

Allocates shared sender capacity. Included capacity is used first and supported additional capacity is added to the existing subscription when possible.
Enable a verified Delivery Sender

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EnableSendingConnectionRequest`](../interfaces/EnableSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

___

### getDeliverySenderCapacity

▸ **getDeliverySenderCapacity**(`initOverrides?`): `Promise`<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>

Get shared Delivery Sender capacity

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>

___

### getDeliverySenderCapacityRaw

▸ **getDeliverySenderCapacityRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>\>

Get shared Delivery Sender capacity

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>\>

___

### getSendingConnection

▸ **getSendingConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

Get a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSendingConnectionRequest`](../interfaces/GetSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

___

### getSendingConnectionProviders

▸ **getSendingConnectionProviders**(`initOverrides?`): `Promise`<[`SendingConnectionProviderDto`](../interfaces/SendingConnectionProviderDto.md)[]\>

List sending connection providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionProviderDto`](../interfaces/SendingConnectionProviderDto.md)[]\>

___

### getSendingConnectionProvidersRaw

▸ **getSendingConnectionProvidersRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionProviderDto`](../interfaces/SendingConnectionProviderDto.md)[]\>\>

List sending connection providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionProviderDto`](../interfaces/SendingConnectionProviderDto.md)[]\>\>

___

### getSendingConnectionRaw

▸ **getSendingConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

Get a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSendingConnectionRequest`](../interfaces/GetSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

___

### getSendingConnections

▸ **getSendingConnections**(`initOverrides?`): `Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)[]\>

List sending connections

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)[]\>

___

### getSendingConnectionsRaw

▸ **getSendingConnectionsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)[]\>\>

List sending connections

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)[]\>\>

___

### probeSendingConnectionDelivery

▸ **probeSendingConnectionDelivery**(`requestParameters`, `initOverrides?`): `Promise`<[`SendingConnectionDeliveryProbeDto`](../interfaces/SendingConnectionDeliveryProbeDto.md)\>

Uses only the selected customer-owned connection. A successful receipt proves provider acceptance and delivery to MailSlurp, not Gmail or Outlook placement.
Send an unbilled delivery test to a temporary MailSlurp inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ProbeSendingConnectionDeliveryRequest`](../interfaces/ProbeSendingConnectionDeliveryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionDeliveryProbeDto`](../interfaces/SendingConnectionDeliveryProbeDto.md)\>

___

### probeSendingConnectionDeliveryRaw

▸ **probeSendingConnectionDeliveryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDeliveryProbeDto`](../interfaces/SendingConnectionDeliveryProbeDto.md)\>\>

Uses only the selected customer-owned connection. A successful receipt proves provider acceptance and delivery to MailSlurp, not Gmail or Outlook placement.
Send an unbilled delivery test to a temporary MailSlurp inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ProbeSendingConnectionDeliveryRequest`](../interfaces/ProbeSendingConnectionDeliveryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDeliveryProbeDto`](../interfaces/SendingConnectionDeliveryProbeDto.md)\>\>

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

### rotateSendingConnectionCredentials

▸ **rotateSendingConnectionCredentials**(`requestParameters`, `initOverrides?`): `Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

Verifies supported replacement credentials before atomically replacing the encrypted credential envelope.
Rotate sending connection credentials

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RotateSendingConnectionCredentialsRequest`](../interfaces/RotateSendingConnectionCredentialsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

___

### rotateSendingConnectionCredentialsRaw

▸ **rotateSendingConnectionCredentialsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

Verifies supported replacement credentials before atomically replacing the encrypted credential envelope.
Rotate sending connection credentials

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RotateSendingConnectionCredentialsRequest`](../interfaces/RotateSendingConnectionCredentialsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

___

### updateDeliverySenderSeats

▸ **updateDeliverySenderSeats**(`requestParameters`, `initOverrides?`): `Promise`<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>

Update purchased Delivery Sender seats

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDeliverySenderSeatsRequest`](../interfaces/UpdateDeliverySenderSeatsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>

___

### updateDeliverySenderSeatsRaw

▸ **updateDeliverySenderSeatsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>\>

Update purchased Delivery Sender seats

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDeliverySenderSeatsRequest`](../interfaces/UpdateDeliverySenderSeatsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DeliverySenderCapacityDto`](../interfaces/DeliverySenderCapacityDto.md)\>\>

___

### updateSendingConnection

▸ **updateSendingConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

Updates non-secret connection metadata. Use the credentials endpoint to replace supported SMTP or API-key credentials.
Update a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateSendingConnectionRequest`](../interfaces/UpdateSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

___

### updateSendingConnectionRaw

▸ **updateSendingConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

Updates non-secret connection metadata. Use the credentials endpoint to replace supported SMTP or API-key credentials.
Update a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateSendingConnectionRequest`](../interfaces/UpdateSendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

___

### verifySendingConnection

▸ **verifySendingConnection**(`requestParameters`, `initOverrides?`): `Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

Verifies the customer credential without enabling billable sender capacity. A consuming product enables the shared Delivery Sender seat when sending starts.
Verify a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`VerifySendingConnectionRequest`](../interfaces/VerifySendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>

___

### verifySendingConnectionRaw

▸ **verifySendingConnectionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

Verifies the customer credential without enabling billable sender capacity. A consuming product enables the shared Delivery Sender seat when sending starts.
Verify a sending connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`VerifySendingConnectionRequest`](../interfaces/VerifySendingConnectionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SendingConnectionDto`](../interfaces/SendingConnectionDto.md)\>\>

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
