
//update param trên thanh addressbar của trình duyệt
export const updateParam = (searchParams, setSearchParams, newParams) => {
    // Mục tiêu để update param trên url

    let params = {};
    for (const [key, value] of searchParams.entries()) {
        params[key] = value;
    }
    for (const p in newParams) {
        params[p] = newParams[p];
    }
    setSearchParams(params);
}

export const isAuth = () => {
    const access_token = getAcessToken();
    if (access_token) return true;
    return false;
}

export const getAcessToken = () => {
    const access_token = localStorage.getItem('access_token') || null;
    return access_token;
}

export const getLoggedUser = () => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || "{}");
    return loggedUser;
}
