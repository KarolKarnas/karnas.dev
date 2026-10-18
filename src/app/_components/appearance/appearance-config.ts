export const THEMES = [
  {
    id: "monokai",
    name: "Monokai",
    description: "Warm charcoal. Familiar syntax.",
    colors: ["#272822", "#a6e22e", "#66d9ef", "#f92672"],
  },
  {
    id: "dark-modern",
    name: "Dark Modern",
    description: "Deep slate. A cooler perspective.",
    colors: ["#181b20", "#94c9ff", "#89dbe5", "#c8b2f5"],
  },
  {
    id: "light",
    name: "Light",
    description: "A little more daylight.",
    colors: ["#f7f8f5", "#386522", "#186575", "#a23b66"],
  },
] as const
export type Theme = (typeof THEMES)[number]["id"]
export type Appearance = {
  theme: Theme
  textSize: "small" | "default" | "large"
  reducedMotion: boolean
  backgroundEnabled: boolean
  backgroundCursor: boolean
  backgroundAddPoints: boolean
}
export const DEFAULT_APPEARANCE: Appearance = {
  theme: "monokai",
  textSize: "default",
  reducedMotion: false,
  backgroundEnabled: false,
  backgroundCursor: false,
  backgroundAddPoints: false,
}

export function parseAppearance(raw: string): Appearance {
  try {
    const value = JSON.parse(raw)
    return {
      theme: THEMES.some((t) => t.id === value?.theme)
        ? value.theme
        : "monokai",
      textSize: ["small", "default", "large"].includes(value?.textSize)
        ? value.textSize
        : "default",
      reducedMotion: value?.reducedMotion === true,
      backgroundEnabled: value?.backgroundEnabled === true,
      backgroundCursor: value?.backgroundCursor === true,
      backgroundAddPoints: value?.backgroundAddPoints === true,
    }
  } catch {
    return DEFAULT_APPEARANCE
  }
}

// Runs before paint, including in embedded documents. Only whitelisted values become attributes.
export const APPEARANCE_SCRIPT = `(function(){try{var p=JSON.parse(localStorage.getItem("karnas-appearance")||"{}"),d=document.documentElement;d.dataset.theme=["monokai","dark-modern","light"].includes(p.theme)?p.theme:"monokai";d.dataset.textSize=["small","default","large"].includes(p.textSize)?p.textSize:"default";d.dataset.motion=p.reducedMotion===true?"reduced":"auto"}catch(e){}})()`
