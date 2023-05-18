export default class ShopService {
    getProducts(categoryId) {
        const allProducts = [
            {
                id: 1,
                name:  'Product 1',
                price: 100,
                categoryId: '1',
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 10
                    }
                ]
            },
            {
                id: 2,
                name:  'Product 2',
                price: 20,
                categoryId: '2',
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str 1'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 30
                    },
                    {
                        id: 3,
                        name: 'filter 3',
                        type: 'boolean',
                        value: true
                    },
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'test'
                    },
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'test 2'
                    },
                    {
                        id: 5,
                        name: 'filter 5',
                        type: 'string',
                        value: 'test 5'
                    }
                ]
            },
            {
                id: 3,
                name:  'Product 3',
                price: 45,
                categoryId: '3',
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 50
                    },
                    {
                        id: 3,
                        name: 'filter 3',
                        type: 'string',
                        value: 'test'
                    },
                    {
                        id: 4,
                        name: 'filter 4',
                        type: 'boolean',
                        value: true
                    }
                ]
            },
            {
                id: 4,
                name: 'Product 4',
                price: 1000,
                categoryId: '4',
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 20
                    },
                    {
                        id: 3,
                        name: 'filter 3',
                        type: 'boolean',
                        value: false
                    }
                ]
            },
            {
                id: 5,
                name: 'Product 5',
                price: 400,
                categoryId: '1',
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 15
                    },
                    {
                        id: 3,
                        name: 'filter 3',
                        type: 'boolean',
                        value: false
                    },
                    {
                        id: 4,
                        name: 'filter 4',
                        type: 'number',
                        value: 10
                    }
                ]
            },
            {
                id: 6,
                name: 'Product 6',
                categoryId: '2',
                price: 999,
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str 1'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 50
                    },
                    {
                        id: 3,
                        name: 'filter 3',
                        type: 'boolean',
                        value: false
                    },
                    {
                        id: 4,
                        name: 'filter 4',
                        type: 'number',
                        value: 10
                    },
                    {
                        id: 5,
                        name: 'filter 5',
                        type: 'string',
                        value: 'test 5'
                    }
                ]
            },
            {
                id: 7,
                name: 'Product 7',
                categoryId: '3',
                price: 55,
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 15
                    },
                    {
                        id: 3,
                        name: 'filter 3',
                        type: 'string',
                        value: 'test'
                    }
                ]
            },
            {
                id: 8,
                name: 'Product 8',
                categoryId: '4',
                price: 900,
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 80
                    },
                    {
                        id: 4,
                        name: 'filter 4',
                        type: 'number',
                        value: 30
                    }
                ]
            },
            {
                id: 9,
                name: 'Product 9',
                categoryId: '1',
                price: 30,
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 30
                    },
                    {
                        id: 3,
                        name: 'filter 3',
                        type: 'boolean',
                        value: false
                    }
                ]
            },
            {
                id: 10,
                name: 'Product 10',
                categoryId: '4',
                price: 60,
                details: [
                    {
                        id: 1,
                        name: 'filter 1',
                        type: 'string',
                        value: 'str 1'
                    },
                    {
                        id: 2,
                        name: 'filter 2',
                        type: 'number',
                        value: 50
                    },
                    {
                        id: 3,
                        name: 'filter 3',
                        type: 'boolean',
                        value: false
                    }
                ]
            }
        ];
        
        return categoryId ? allProducts.filter((product) => product.categoryId === categoryId) : allProducts;
    };

    getCategories() {
        return [{
            id: 'root',
            name: 'Parent',
            children: [
                {
                    id: '1',
                    name: 'Child - 1',
                    children: []
                },
                {
                    id: '2',
                    name: 'Child - 2',
                    children: []
                },
                {
                    id: '3',
                    name: 'Child - 3',
                    children: [
                        {
                        id: '4',
                        name: 'Child - 4',
                        },
                    ]
                }
            ]
        }]
    }
};