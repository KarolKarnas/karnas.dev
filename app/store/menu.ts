import { create } from "zustand"

export interface MenuState {
  menu: { isOpen: boolean }
  updateMenu: () => void
}

export const menuStore = create<MenuState>((set) => ({
  menu: {
    isOpen: true,
  },
  updateMenu: () =>
    set((state) => ({
      menu: { ...state.menu, isOpen: !state.menu.isOpen },
    })),
}))
