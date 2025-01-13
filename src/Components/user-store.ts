import { create } from 'zustand'

interface UserState {
    firstName? : string;
    lastName? : string;
    birthDate? : Date;
    height? : number;
    width? : number;
    // Aksiyonlar
    setFirstName? : (payload : string) => void;
    setLastName? : (payload : string) => void;
    setBirthDate? : (payload : Date) => void;
}

export const useUserStore = create<UserState>()((set) => ({
    firstName : "" ,
    lastName : "" ,
    setFirstName : (payload) => set({firstName : payload}),
    setLastName : (payload) => set({lastName : payload}),
    setBirthDate : (payload) => set({birthDate : payload})

}))



