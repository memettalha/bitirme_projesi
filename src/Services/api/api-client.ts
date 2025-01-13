import { BASE_URL } from "../../Routes/SingUpPage"

interface TokenPayload {
  sub: number;
  exp: number;
  iat: number;
}
interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export function getRefreshToken(): string | null {
  return localStorage.getItem('refresh_token');
}

export function setTokensAndAuthUser(accessToken: string, refreshToken: string): void {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
}

export async function fetchWithAuth(url: string, options: RequestInit = {}): Promise<Response> {
  try {
    const accessToken = localStorage.getItem('access_token');
    
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    // Access token'ın süresini kontrol et
    const tokenPayload = JSON.parse(atob(accessToken.split('.')[1])) as TokenPayload;
    const isTokenExpired = Date.now() >= tokenPayload.exp * 1000;

    // Eğer token süresi dolmuşsa yenile
    if (isTokenExpired) {
      const refreshToken = getRefreshToken();
      
      if (!refreshToken) {
        throw new Error('Refresh token not found');
      }

      const response = await fetch(`${BASE_URL}/auth/token/refresh`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = 
        await response.json() as RefreshTokenResponse;

      setTokensAndAuthUser(newAccessToken, newRefreshToken);

     
      
      // Yeni access token ile headers'ı güncelle
      options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${newAccessToken}`
      };
    } else {
      // Token geçerliyse mevcut token'ı kullan
      options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${accessToken}`
      };
    }

    const urlWithSlash = url.startsWith("/") ? url : "/" + url

    // İsteği gönder
    const response = await fetch(BASE_URL +url,options);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response;

  } catch (error) {
    console.error('Error in fetchWithAuth:', error);
    throw error; // Hatayı yukarı fırlat ki çağıran fonksiyon handle edebilsin
  }
}