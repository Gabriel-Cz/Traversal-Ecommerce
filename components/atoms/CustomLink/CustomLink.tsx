import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ to, className, children }) => {
  return (
    <Link href={to} passHref>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
}