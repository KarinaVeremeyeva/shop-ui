export const getIsPermittedForUser = state => state.user.userData?.role === 'User';
export const getIsPermittedForAdmin = state => state.user.userData?.role === 'Admin';