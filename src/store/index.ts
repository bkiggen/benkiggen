import { create } from "zustand";

type StoreT = {
  isShrunk: boolean;
  setIsShrunk: (isShrunk: boolean) => void;
};

const useStore = create<StoreT>((set) => ({
  isShrunk: false,
  setIsShrunk: (isShrunk: boolean) => set({ isShrunk }),
}));

export { useStore };
