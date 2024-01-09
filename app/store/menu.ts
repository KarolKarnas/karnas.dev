import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

import { create } from "zustand"

export interface MenuState {
  menu: {
    isOpen: boolean
  }

  updateMenu: () => void
}

export const menuStore = create<MenuState>((set) => ({
  menu: {
    isOpen: false,
  },
  updateMenu: () =>
    set((state) => ({
      menu: { ...state.menu, isOpen: !state.menu.isOpen },
    })),
}))
