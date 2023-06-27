import { types } from './detail-types';

export const displayDetailType = (type) => {
    const typeName = types.find(t => t.value === type).name;
    return typeName;
};