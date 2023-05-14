export default class ShopService {
    getProducts(categoryId) {
        const allProducts = [
            {
                id: 1,
                name:  'Product 1',
                price: 100,
                categoryId: '1'
            },
            {
                id: 2,
                name:  'Product 2',
                price: 20,
                categoryId: '2'
            },
            {
                id: 3,
                name:  'Product 3',
                price: 45,
                categoryId: '3'
            },
        ];
        
        return allProducts.filter((product) => product.categoryId === categoryId)
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