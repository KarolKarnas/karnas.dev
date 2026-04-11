import * as icons from "@/icons"
import { IconText } from "./types"

export type IconName = keyof typeof icons

const getIcons = (iconNames: IconName[]): IconText[] => {
  return iconNames.map((iconName) => icons[iconName])
}

export default getIcons
