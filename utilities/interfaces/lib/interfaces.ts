export const pages = ['Home', 'About', 'Examples', 'Contact', 'Blog'] as const;
export const routes = {
  home: '/home',
  about: '/about',
  services: '/examples',
  contact: '/contact',

  blog: '/blog',
};

export enum StateActionsEnum {
  setActive = 'SET_ACTIVE',
  setAboutPage = 'SET_ABOUT_PAGE',
}
