import { create } from "zustand";

interface NavbarStore {
  isOpen: boolean;
  toggle: () => void;
}

export const useNavbar = create<NavbarStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
