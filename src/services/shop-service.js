import { allProducts } from "./mockData";

export default class ShopService {
    getProducts(categoryId) {
        return categoryId
            ? allProducts.filter((product) => product.categoryId === categoryId)
            : allProducts;
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
    };

    getProduct(id) {
        return allProducts.find(p => p.id === id);
    };
};