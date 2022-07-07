export const pages = [
  "Home",
  "About",
  "Services",
  "Contact",
  "Policies",
] as const;
export const routes = {
  home: "/home",
  about: "/about",
  services: "/services",
  contact: "/contact",
  policies: "/policies",
};

export enum StateActionsEnum {
  setActive = "SET_ACTIVE",
  setAboutPage = "SET_ABOUT_PAGE",
}
