const loginKey = 'isLoggedIn';

export const isLoggedIn = () => localStorage.getItem(loginKey) !== null;
export const logIn = () => localStorage.setItem(loginKey, 'true');
export const logOut = () => localStorage.removeItem(loginKey);