import { integrationTest } from './_helpers';

jest.setTimeout(120_000);
integrationTest('can use structured content', async (mailslurp) => {
    const emailId = ''
    const instructions = ''
    const { result } = await mailslurp.aiController.generateStructuredContentFromEmail({
        generateStructuredContentEmailOptions: {
            emailId,
            instructions,
            outputSchema: {
                type: 'object',
                properties: {
                    orderId: {
                        type: 'string',
                        description: 'Order ID',
                    },
                    storeName: {
                        type: 'string',
                        description: 'Store name',
                    },
                    orderItems: {
                        type: 'array',
                        description: 'List of items purchased',
                        items: {
                            type: 'object',
                            properties: {
                                productName: {
                                    type: 'string',
                                    description: 'Product name',
                                },
                                quantity: {
                                    type: 'number',
                                    description: 'Quantity purchased',
                                },
                                price: {
                                    type: 'number',
                                    description: 'Price of the product',
                                },
                            },
                        },
                    },
                }
            }
        }
    })
});