export const getValidationErrors = (name, price, categoryId, productDetails) => {
    let errors = [];
    if (!name) {
        errors.push('Name should not be empty');
    }
    if (price <= 0 ) {
        errors.push('Price must be greater than 0');
    }
    if (!categoryId) {
        errors.push('Category should not be empty');
    }
    if (!productDetails.every(pd => pd.detailId)) {
        errors.push('Product detail is not selected');
    }
    if (!productDetails.every(pd => pd.value)) {
        errors.push('Product detail value is empty');
    }

    return errors.reduce((resultError, currentError) => resultError + '. ' + currentError, '');
};