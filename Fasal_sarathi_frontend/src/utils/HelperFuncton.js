export const getToken = () => {
    const accessToken =  localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    return {accessToken, refreshToken};
}


export const setToken = (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
}

export const removeToken = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}