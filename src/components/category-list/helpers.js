export const getPath = (categories, categoryId) => {
    for (let category of categories) {
        if (category.id === categoryId) {
            return [category.id];
        }

        const categoryPath = getPath(category.childCategories, categoryId);
        if (categoryPath.length) {
            return [category.id, ...categoryPath];
        }
    }

    return [];
};