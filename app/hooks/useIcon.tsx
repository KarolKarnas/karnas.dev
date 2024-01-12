import * as icons from '../utils/icons';

// const icons = {
//   chevronDown,
//   xMark,
//   newFile,
//   folderOpen,
//   nodeJs,
//   html,
//   htmlAlt,
//   react,
//   git,
//   nextJs,
//   typeScript,
//   typeScriptAlt,
//   vsc,
//   jest,
//   mongo,
//   redux,
//   tailwind,
//   postgres,
//   rtl,
//   cypress,
//   postman,
//   sass,
//   cssModules,
//   express,
//   playWright,
//   jira,
//   confluence,
//   figma
// };

export type IconName = keyof typeof icons;

const useIcon = (iconNames: IconName[]): JSX.Element[] => {
  return iconNames.map((iconName) => icons[iconName]);
};

export default useIcon;