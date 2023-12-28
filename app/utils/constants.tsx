import Image from "next/image"
import { SideNavItem } from "./types"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home.json",
    path: "/home",
    icon: <Image src="/nodejs.svg" alt="JS logo" width={18} height={18} />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <Image src="/folder.svg" alt="JS logo" width={18} height={18} />,
    submenu: true,
    subMenuItems: [
      // { title: "All", path: "/projects" },
      {
        title: "Ilustrografia.com",
        path: "/projects/ilustrografia",
        icon: (
          <Image
            src="/react.svg"
            alt="JS logo"
            width={18}
            height={18}
            // style={{ marginLeft: "1rem" }}
          />
        ),
      },
      {
        title: "Karnas.dev",
        path: "/projects/karnas",
        icon: (
          <Image
            src="/react.svg"
            alt="JS logo"
            width={18}
            height={18}
            // style={{ marginLeft: "1rem" }}
          />
        ),
      },
    ],
  },
  {
    title: "Contact.tsx",
    path: "/contact",
    icon: <Image src="/react.svg" alt="JS logo" width={18} height={18} />,
  },

  {
    title: "About.scss",
    path: "/about",
    icon: <Image src="/sass.svg" alt="JS logo" width={18} height={18} />,
  },
]
