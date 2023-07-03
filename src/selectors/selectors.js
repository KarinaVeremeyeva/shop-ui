export const getIsPermittedForUser = state => state.userData.userData?.role === 'User';
export const getIsPermittedForAdmin = state => state.userData.userData?.role === 'Admin';