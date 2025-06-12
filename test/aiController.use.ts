import {
  StructuredOutputSchemaTypeEnum,
  StructuredOutputSchema,
} from '../dist';
import { integrationTest } from './_helpers';

jest.setTimeout(120_000);
integrationTest('can use structured content', async (mailslurp) => {
  const emailId = '';
  const instructions = '';
  const schema: StructuredOutputSchema = {
    type: StructuredOutputSchemaTypeEnum.object,
    properties: {
      orderId: {
        type: StructuredOutputSchemaTypeEnum.string,
        description: 'Order ID',
      },
      storeName: {
        type: StructuredOutputSchemaTypeEnum.string,
        description: 'Store name',
      },
      orderItems: {
        type: StructuredOutputSchemaTypeEnum.array,
        description: 'List of items purchased',
        items: {
          type: StructuredOutputSchemaTypeEnum.object,
          properties: {
            productName: {
              type: StructuredOutputSchemaTypeEnum.string,
              description: 'Product name',
            },
            quantity: {
              type: StructuredOutputSchemaTypeEnum.number,
              description: 'Quantity purchased',
            },
            price: {
              type: StructuredOutputSchemaTypeEnum.number,
              description: 'Price of the product',
            },
          },
        },
      },
    },
  };
  const { valid } = await mailslurp.aiController.validateStructuredOutputSchema(
    {
      structuredOutputSchema: schema,
    }
  );
  expect(valid).toEqual(true);
});
