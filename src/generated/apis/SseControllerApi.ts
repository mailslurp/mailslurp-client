/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';

export interface StreamEventsRequest {
  xApiKey: string;
}

/**
 *
 */
export class SseControllerApi extends runtime.BaseAPI {
  /**
   */
  async streamEventsRaw(
    requestParameters: StreamEventsRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<string>>> {
    if (
      requestParameters.xApiKey === null ||
      requestParameters.xApiKey === undefined
    ) {
      throw new runtime.RequiredError(
        'xApiKey',
        'Required parameter requestParameters.xApiKey was null or undefined when calling streamEvents.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.xApiKey !== undefined &&
      requestParameters.xApiKey !== null
    ) {
      headerParameters['x-api-key'] = String(requestParameters.xApiKey);
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/sse`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   */
  async streamEvents(
    requestParameters: StreamEventsRequest,
    initOverrides?: RequestInit
  ): Promise<Array<string>> {
    const response = await this.streamEventsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
