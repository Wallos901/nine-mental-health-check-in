export type MetaTitle = string;
export type MetaDescription = string;
export type MetaOgType =
  | "website"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other";

export type NavBar = {
  links: NavItem[];
};

export type NavItem = {
  text: string;
  url: string;
};
