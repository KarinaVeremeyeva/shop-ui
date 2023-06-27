export const getChildren = (categories, id) => {
    const currentCategory = categories.find(c => c.id === id);
    const childrenCategories = categories.filter(c => c.parentCategoryId === id);
    const nestedChildren = childrenCategories.map(c => getChildren(categories, c.id)).flat();

    return [currentCategory, ...nestedChildren]
};