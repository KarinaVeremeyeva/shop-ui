const initialState = {
    products: [],
    categories: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'PRODUCTS_LOADED':
            return {
                ...state,
                products: action.payload
            };
        case 'CATEGORIES_LOADED':
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
};

export default reducer;