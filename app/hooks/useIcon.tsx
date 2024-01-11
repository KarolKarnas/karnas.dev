import {
  chevronDown,
  xMark,
  newFile,
  folderOpen,
  nodeJs,
  html,
  htmlAlt,
  react,
  git,
  nextJs,
  typeScript,
  typeScriptAlt,
  vsc,
} from '../utils/icons';

const icons = {
  chevronDown,
  xMark,
  newFile,
  folderOpen,
  nodeJs,
  html,
  htmlAlt,
  react,
  git,
  nextJs,
  typeScript,
  typeScriptAlt,
  vsc,
};

export type IconName = keyof typeof icons;

const useIcon = (iconNames: IconName[]): JSX.Element[] => {
  return iconNames.map((iconName) => icons[iconName]);
};

export default useIcon;