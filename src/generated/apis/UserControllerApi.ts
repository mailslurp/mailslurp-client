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
import { UserInfoDto, UserInfoDtoFromJSON, UserInfoDtoToJSON } from '../models';

export interface GetJsonPropertyAsStringRequest {
  property: string;
  body: object | null;
}

/**
 *
 */
export class UserControllerApi extends runtime.BaseAPI {
  /**
   * Utility function to extract properties from JSON objects in language where this is cumbersome.
   */
  async getJsonPropertyAsStringRaw(
    requestParameters: GetJsonPropertyAsStringRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<string>> {
    if (
      requestParameters.property === null ||
      requestParameters.property === undefined
    ) {
      throw new runtime.RequiredError(
        'property',
        'Required parameter requestParameters.property was null or undefined when calling getJsonPropertyAsString.'
      );
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling getJsonPropertyAsString.'
      );
    }

    const queryParameters: any = {};

    if (requestParameters.property !== undefined) {
      queryParameters['property'] = requestParameters.property;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/user/json/pluck`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.body as any,
      },
      initOverrides
    );

    return new runtime.TextApiResponse(response) as any;
  }

  /**
   * Utility function to extract properties from JSON objects in language where this is cumbersome.
   */
  async getJsonPropertyAsString(
    requestParameters: GetJsonPropertyAsStringRequest,
    initOverrides?: RequestInit
  ): Promise<string> {
    const response = await this.getJsonPropertyAsStringRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get account information for your user
   */
  async getUserInfoRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<UserInfoDto>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
    }

    const response = await this.request(
      {
        path: `/user/info`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserInfoDtoFromJSON(jsonValue)
    );
  }

  /**
   * Get account information for your user
   */
  async getUserInfo(initOverrides?: RequestInit): Promise<UserInfoDto> {
    const response = await this.getUserInfoRaw(initOverrides);
    return await response.value();
  }
}
