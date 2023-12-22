import Image from "next/image"
import { SideNavItem } from "./types"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home.tsx",
    path: "/home",
    icon: <Image src="/react.svg" alt="JS logo" width={24} height={24} />,
  },
  {
    title: "Projects.tsx",
    path: "/projects",
    icon: <Image src="/react.svg" alt="JS logo" width={24} height={24} />,
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
            width={24}
            height={24}
            style={{ marginLeft: "1rem" }}
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
            width={24}
            height={24}
            style={{ marginLeft: "1rem" }}
          />
        ),
      },
    ],
  },
  {
    title: "Contact.jsx",
    path: "/contact",
    icon: <Image src="/react.svg" alt="JS logo" width={24} height={24} />,
  },

  {
    title: "About.scss",
    path: "/about",
    icon: <Image src="/sass.svg" alt="JS logo" width={24} height={24} />,
  },
]
