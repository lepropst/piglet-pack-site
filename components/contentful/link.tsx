import React from 'react';
import { TypePage } from '../../lib/api/types';
import NextLink from 'next/link';
import { useNavigation } from '../../lib/api/useNavigation';

type LinkProps = {
  // one of them needs to be provided, RequireAtLeastOne from type-fest does not work properly
  page?: TypePage;
  path?: string;
  href?: string;

  children: React.ReactNode;
};

export const Link = ({ page, path, href, children }: LinkProps) => {
  const { linkTo, linkToPath } = useNavigation();

  return (
    <NextLink href={path ? linkToPath(path) : page ? linkTo(page) : { href }}>
      {children}
    </NextLink>
  );
};
