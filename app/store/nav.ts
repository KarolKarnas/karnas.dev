import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { SIDENAV_ITEMS } from "../utils/constants"
import { SideNavItem } from "../utils/types"
import { create } from "zustand"

export interface NavState {
  menu: {
    navLinks: SideNavItem[]
    openTabs: SideNavItem[]
    activeTab?: SideNavItem
  }

  updateOpenTabs: (newTab: SideNavItem) => void
  removeTab: (tabRemove: SideNavItem, router: AppRouterInstance) => void
  updateNavLinks: (blogTabs: SideNavItem[]) => void
  // removeAllTabs: () => void
}

export const navStore = create<NavState>((set) => ({
  menu: {
    navLinks: SIDENAV_ITEMS,
    openTabs: [SIDENAV_ITEMS[0]],
  },

  updateNavLinks: (blogTabs) => set((state) => {
    const updatedNavLinks = [...state.menu.navLinks];
    updatedNavLinks[4] = {
      ...updatedNavLinks[4],
      subMenuItems: blogTabs,
    };
  
    return {
      menu: {
        ...state.menu,
        navLinks: updatedNavLinks,
      },
    };
  }),

  updateOpenTabs: (newTab) =>
    set((state) => {
      // console.log(newTab)
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

  // removeAllTabs: () =>
  //   set((state) => {
  //     return {
  //       menu: {
  //         ...state.menu,
  //         openTabs: []
  //       },
  //     }
  //   }),

  removeTab: (tabRemove, router) =>
    set((state) => {
      const tabQty = state.menu.openTabs.length
      //if only one tab left
      if (tabQty === 1) {
        router.push("/")
        return {
          menu: {
            ...state.menu,
            openTabs: state.menu.openTabs.filter(
              (tab) => tab.title !== tabRemove.title
            ),
          },
        }
      }

      // more than one tab
      if (
        state.menu.activeTab &&
        tabRemove.title === state.menu.activeTab.title &&
        tabQty > 1
      ) {
        const activeIndex = state.menu.openTabs.indexOf(tabRemove)

        //right
        if (activeIndex === 0) {
          const nextRight = state.menu.openTabs.indexOf(tabRemove) + 1
          const activeRightTab = state.menu.openTabs[nextRight]
          router.push(activeRightTab.path)
          return {
            menu: {
              ...state.menu,
              openTabs: state.menu.openTabs.filter(
                (tab) => tab.title !== tabRemove.title
              ),
              activeTab: activeRightTab,
            },
          }
          //left
        } else {
          const nextLeft = state.menu.openTabs.indexOf(tabRemove) - 1
          const activeLeftTab = state.menu.openTabs[nextLeft]
          router.push(activeLeftTab.path)

          return {
            menu: {
              ...state.menu,
              openTabs: state.menu.openTabs.filter(
                (tab) => tab.title !== tabRemove.title
              ),
              activeTab: activeLeftTab,
            },
          }
        }
        //error
      } else {
        return {
          menu: {
            ...state.menu,
            openTabs: state.menu.openTabs.filter(
              (tab) => tab.title !== tabRemove.title
            ),
          },
        }
      }
    }),
}))
