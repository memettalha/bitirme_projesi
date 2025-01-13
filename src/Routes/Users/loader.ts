import { fetchWithAuth } from "../../Services/api/api-client";
import { BASE_URL } from "../SingUpPage";

export interface User {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: null | string;
}

export async function UsersLoader(): Promise<{ users?: User[], error?: string }> {
  console.log("Fonksiyon giriş")
  
  try {
    // fetchWithAuth zaten token kontrolü ve yenilemeyi yapıyor
    const response = await fetchWithAuth('/users/my-account', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + localStorage.getItem("access_token"),  
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userData = await response.json();
    console.log("user.data",{userData})
    return { users: [userData] }; // Tek kullanıcı verisi dönüyorsa array içinde dön

  } catch (error) {
    console.error('Error fetching user data:', error);
    return { 
      error: error instanceof Error ? error.message : 'Failed to fetch user data' 
    };
  }
}

// Adres ekleme fonksiyonu
export async function addUserAddress(addressData: any) {
  try {
    const response = await fetchWithAuth('/users/addresses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addressData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding address:', error);
    throw error;
  }
}

// Adresleri getirme fonksiyonu
export async function getUserAddresses() {
  try {
    const response = await fetchWithAuth('/users/addresses', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching addresses:', error);
    throw error;
  }
}