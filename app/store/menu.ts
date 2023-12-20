import { create } from "zustand"

export interface MenuState {
  menu: {
    isOpen: boolean
    links: string[]
    openTabs: string[]
    activeTab: string
  }

  updateMenu: () => void
  updateOpenTabs: (newTab: string) => void
  removeTab: (tabName: string) => void
}

export const menuStore = create<MenuState>((set) => ({
  menu: {
    isOpen: true,
    links: ["home", "contact", "about-me"],
    openTabs: ["home"],
    activeTab: "home",
  },
  updateMenu: () =>
    set((state) => ({
      menu: { ...state.menu, isOpen: !state.menu.isOpen },
    })),
  updateOpenTabs: (newTab) =>
    set((state) => {
      if (state.menu.openTabs.indexOf(newTab) > -1) {
        console.log("tab already open")
        return {
          menu: { ...state.menu, activeTab: newTab },
        }
      } else {
        return {
          menu: {
            ...state.menu,
            openTabs: [...state.menu.openTabs, newTab],
            activeTab: newTab,
          },
        }
      }
    }),
  removeTab: (tabName) =>
    set((state) => {
      if (tabName === state.menu.activeTab) {
        console.log('active')
      }

      return ({
        menu: {
          ...state.menu,
          openTabs: state.menu.openTabs.filter((tab) => tab !== tabName),
        },
      })
    }),
}))

// removeTab: (tabName) => {
//   set((state) => {
//     const tabIndex = state.menu.openTabs.indexOf(tabName)
//     if (tabIndex > -1) {
//       console.log("i can remove you sir")
//       const openTabs = state.menu.openTabs
//       console.log(openTabs)
//       openTabs.splice(tabIndex, 1)
//       console.log(openTabs)
//       return {
//         menu: { ...state.menu, openTabs: openTabs },
//       }
//     } else {
//       return {
//         menu: { ...state.menu },
//       }
//     }
//   })
// },
