const ACCESS_TOKEN_STORAGE_KEY = "access_Token";
const REFRESH_TOKEN_STORAGE_KEY = "refresh_Token";


export function setAccessToken(accessToken:string){
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY,accessToken)
}

export function setRefreshToken(refreshToken:string){
    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY,refreshToken)
}

export function getAccessToken(){
    localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
}

export function getRefreshToken(){
    localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY)
}

export function removeAccessToken(){
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)
}

export function removeRefreshToken(){
    localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY)
}

export function setTokensAndAuthUser(accessToken:string,refreshToken:string){
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
}

export function removeTokensAndAuthUser(){
    removeAccessToken();
    removeRefreshToken()
}