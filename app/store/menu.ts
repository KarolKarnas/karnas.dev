import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

import { create } from "zustand"

export interface MenuState {
  menu: {
    width: number
    isOpen: boolean
  }
  setWidth: (width: number) => void
  updateMenu: () => void
  openMenu: () => void
  closeMenu: () => void
}

export const menuStore = create<MenuState>((set) => ({
  menu: {
    //close menu on mobile
    width: 0,
    isOpen: true,
  },
  setWidth: (width) =>
    set((state) => ({
      menu: { ...state.menu, width: width },
    })),
  updateMenu: () =>
    set((state) => ({
      menu: { ...state.menu, isOpen: !state.menu.isOpen },
    })),
  openMenu: () =>
    set((state) => ({
      menu: { ...state.menu, isOpen: true },
    })),
  closeMenu: () =>
    set((state) => ({
      menu: { ...state.menu, isOpen: false },
    })),
}))
