import {create} from "zustand";

interface BearStore{
    bears:number;
    increasePopulation:(by: number) => void;
    removeAllBears:(by: number) => void;
  }
  
  export const useBearStore = create<BearStore>()((set) => ({
    bears : 0,
    increasePopulation : () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

  }))
  