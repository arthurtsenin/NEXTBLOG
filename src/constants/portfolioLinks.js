import { LINKS } from "./links";
import IllustrationImg from "public/illustration.png";
import WebsitesImg from "public/websites.jpg";
import AppsImg from "public/apps.jpg";

export const PORTFOLIO_LINKS = {
  illustrations: {
    id: 1,
    title: "Illustrations",
    url: `${LINKS.portfolio.url}/illustrations`,
    img: IllustrationImg,
  },
  websites: {
    id: 2,
    title: "Websites",
    url: `${LINKS.portfolio.url}/websites`,
    img: WebsitesImg,
  },
  applications: {
    id: 3,
    title: "Applications",
    url: `${LINKS.portfolio.url}/applications`,
    img: AppsImg,
  },
};
