import { FaInstagram, FaSteam, FaTiktok } from "react-icons/fa";
import { SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";
import { FiGithub, FiTwitch } from "react-icons/fi";
import { RxDiscordLogo, RxTwitterLogo } from "react-icons/rx";
import { ImReddit } from "react-icons/im";
import { TbBrandPaypal } from "react-icons/tb";

import type { ContactProps } from "./types";

export const links: ContactProps[] = [
   {
      title: "Discord",
      href: "https://discord.gg/2V8Y8Yj",
      icon: RxDiscordLogo,
   },
   {
      title: "Instagram",
      href: "https://www.instagram.com/crishanbr",
      icon: FaInstagram,
   },
   {
      title: "Twitch",
      href: "https://www.twitch.tv/crishanbr",
      icon: FiTwitch,
   },
   {
      title: "TikTok",
      href: "https://www.tiktok.com/@crishanbr",
      icon: FaTiktok,
   },
   {
      title: "YouTube",
      href: "https://www.youtube.com/@crishanbr",
      icon: SlSocialYoutube,
   },
   {
      title: "Facebook",
      href: "https://www.facebook.com/crishanbr",
      icon: SlSocialFacebook,
   },
   {
      title: "Twitter",
      href: "https://www.twitter.com/crishanbr",
      icon: RxTwitterLogo,
   },
   {
      title: "Steam",
      href: "https://www.steamcommunity.com/id/crishanbr",
      icon: FaSteam,
   },
   {
      title: "Reddit",
      href: "https://www.reddit.com/user/crishanbr",
      icon: ImReddit,
   },
   {
      title: "PayPal",
      href: "https://www.paypal.me/crishanbr",
      icon: TbBrandPaypal,
   },
   {
      title: "GitHub",
      href: "https://github.com/crishanbr",
      icon: FiGithub,
   }
];