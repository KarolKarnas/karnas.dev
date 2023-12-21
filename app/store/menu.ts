import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { create } from "zustand"

export interface MenuState {
  menu: {
    isOpen: boolean
    links: string[]
    subMenuPortfolio: string[]
    openTabs: string[]
    activeTab: string
  }

  updateMenu: () => void
  updateOpenTabs: (newTab: string) => void
  removeTab: (tabName: string, router: AppRouterInstance) => void
}

export const menuStore = create<MenuState>((set) => ({
  menu: {
    isOpen: true,
    links: ["home", "contact", "about-me", "portfolio"],
    subMenuPortfolio: ["ilustrografia", "battleship", "karnas"],
    openTabs: [],
    activeTab: "",
  },
  updateMenu: () =>
    set((state) => ({
      menu: { ...state.menu, isOpen: !state.menu.isOpen },
    })),
  updateOpenTabs: (newTab) =>
    set((state) => {
      if (state.menu.openTabs.indexOf(newTab) > -1) {
        // console.log("tab already open")
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
  removeTab: (tabName, router) =>
    set((state) => {
      const tabQty = state.menu.openTabs.length

      if (tabQty === 1) {
        // console.log("there were only 1 tab")
        router.push("/")
        return {
          menu: {
            ...state.menu,
            openTabs: state.menu.openTabs.filter((tab) => tab !== tabName),
          },
        }
      }
      if (tabName === state.menu.activeTab && tabQty > 1) {
        // console.log(state.menu.openTabs)
        // console.log(state.menu.openTabs.indexOf(tabName))
        const activeIndex = state.menu.openTabs.indexOf(tabName)
        if (activeIndex === 0) {
          // console.log("active 1")
          const nextRight = state.menu.openTabs.indexOf(tabName) + 1
          const activeRightTab = state.menu.openTabs[nextRight]

          return {
            menu: {
              ...state.menu,
              openTabs: state.menu.openTabs.filter((tab) => tab !== tabName),
              activeTab: activeRightTab,
            },
          }
        } else {
          const nextLeft = state.menu.openTabs.indexOf(tabName) - 1
          const activeLeftTab = state.menu.openTabs[nextLeft]
          router.push(`/${activeLeftTab}`)

          return {
            menu: {
              ...state.menu,
              openTabs: state.menu.openTabs.filter((tab) => tab !== tabName),
              activeTab: activeLeftTab,
            },
          }
        }
      } else {
        return {
          menu: {
            ...state.menu,
            openTabs: state.menu.openTabs.filter((tab) => tab !== tabName),
          },
        }
      }
    }),
}))
