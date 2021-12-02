import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface NavLinkProps {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = () => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.includes(path);
  };

  return (
    <NavLinkContainer isActive={isActive()}>
      <Link href={path}>
        <a href="/">{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
