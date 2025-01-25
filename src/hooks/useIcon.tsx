import * as icons from "../utils/icons"
import { IconText } from "../utils/types"

export type IconName = keyof typeof icons


const useIcon = (iconNames: IconName[]): (IconText[]) => {
  return iconNames.map((iconName) => icons[iconName])
}

export default useIcon
