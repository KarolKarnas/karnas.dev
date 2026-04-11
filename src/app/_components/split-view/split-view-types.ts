export type PaneTab = {
  url: string
  title: string
}

export type SplitViewState = {
  isActive: boolean
  splitRatio: number
  paneTabs: PaneTab[]
  activeTabIndex: number
}

export type SplitViewContextValue = SplitViewState & {
  openSplitPane: (url: string, title: string) => void
  closePaneTab: (index: number) => void
  setActivePaneTab: (index: number) => void
  setSplitRatio: (ratio: number) => void
  toggleSplitView: () => void
}

export const SPLIT_VIEW_STORAGE_KEY = "split-view-state"

export const DEFAULT_SPLIT_RATIO = 0.5

export const DEFAULT_STATE: SplitViewState = {
  isActive: false,
  splitRatio: DEFAULT_SPLIT_RATIO,
  paneTabs: [],
  activeTabIndex: 0,
}
