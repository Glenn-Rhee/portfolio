import { create } from "zustand";

interface NavbarStore {
  isOpen: boolean;
  gapFromTop: number;
  setGapFromTop: (v: number) => void;
  toggle: () => void;
  setIsOpen: (v: boolean) => void;
}

export const useNavbar = create<NavbarStore>((set) => ({
  isOpen: false,
  gapFromTop: 0,
  setGapFromTop: (v) => set({ gapFromTop: v }),
  setIsOpen: (v) => set({ isOpen: v }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
