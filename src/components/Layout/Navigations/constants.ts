import { NavItemProps } from "./types";
import { FiHome, FiLink, FiUser } from "react-icons/fi";

export const navs: NavItemProps[] = [
   {
      href: "/",
      label: "Inicio",
      icon: FiHome,
   },
   {
      href: "/about",
      label: "Sobre mi",
      icon: FiUser,
   },
   /*{
      href: "/projects",
      label: "Projects",
      icon: FaRocket,
   },
   {
      href: "/blog",
      label: "Blog",
      icon: FaFeatherAlt,
   },
   {
      href: "/snippets",
      label: "Snippets",
      icon: FaCode,
   },
   {
      href: "/about",
      label: "About",
      icon: FiUser,
   },*/
   {
      href: "/contact",
      label: "Redes sociales",
      icon: FiLink,
   },
];