export const pages = [
  'Home',
  'About',
  'Services',
  'Contact',
  'Policies',
  'Blog',
] as const;
export const routes = {
  home: '/home',
  about: '/about',
  services: '/services',
  contact: '/contact',
  policies: '/policies',
  blog: '/blog',
};

export enum StateActionsEnum {
  setActive = 'SET_ACTIVE',
  setAboutPage = 'SET_ABOUT_PAGE',
}
