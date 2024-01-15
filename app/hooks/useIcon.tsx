import * as icons from '../utils/icons';

export type IconName = keyof typeof icons;

const useIcon = (iconNames: IconName[]): JSX.Element[] => {
  return iconNames.map((iconName) => icons[iconName]);
};

export default useIcon;