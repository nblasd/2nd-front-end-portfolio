import { create } from "zustand";

interface isClickedType {
  isClicked: boolean;
  setIsClicked: () => void;
}

export const useStore = create<isClickedType>((set) => ({
  isClicked: false,
  setIsClicked: () => set((state) => ({ isClicked: true })),
}));
