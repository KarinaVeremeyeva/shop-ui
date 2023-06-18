export const getIsPermittedForUser = state => state.userData?.role === 'User';
export const getIsPermittedForAdmin = state => state.userData?.role === 'Admin';