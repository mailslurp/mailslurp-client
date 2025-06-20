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

import { exists, mapValues } from '../runtime';
import {
  StructuredOutputSchema,
  StructuredOutputSchemaFromJSON,
  StructuredOutputSchemaFromJSONTyped,
  StructuredOutputSchemaToJSON,
} from './';

/**
 *
 * @export
 * @interface AITranformCreateOptions
 */
export interface AITranformCreateOptions {
  /**
   *
   * @type {string}
   * @memberof AITranformCreateOptions
   */
  name?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof AITranformCreateOptions
   */
  conditions?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof AITranformCreateOptions
   */
  instructions?: Array<string>;
  /**
   *
   * @type {StructuredOutputSchema}
   * @memberof AITranformCreateOptions
   */
  outputSchema?: StructuredOutputSchema;
}

export function AITranformCreateOptionsFromJSON(
  json: any
): AITranformCreateOptions {
  return AITranformCreateOptionsFromJSONTyped(json, false);
}

export function AITranformCreateOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AITranformCreateOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    conditions: !exists(json, 'conditions') ? undefined : json['conditions'],
    instructions: !exists(json, 'instructions')
      ? undefined
      : json['instructions'],
    outputSchema: !exists(json, 'outputSchema')
      ? undefined
      : StructuredOutputSchemaFromJSON(json['outputSchema']),
  };
}

export function AITranformCreateOptionsToJSON(
  value?: AITranformCreateOptions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    conditions: value.conditions,
    instructions: value.instructions,
    outputSchema: StructuredOutputSchemaToJSON(value.outputSchema),
  };
}
