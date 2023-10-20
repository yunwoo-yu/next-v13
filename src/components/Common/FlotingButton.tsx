import Link from 'next/link';
import React, { ReactNode } from 'react';

interface FlotingButtonProps {
  children: ReactNode;
  href: string;
}

const FlotingButton = ({ children, href }: FlotingButtonProps) => {
  return (
    <Link
      href={href}
      className="fixed bottom-5 right-5 flex aspect-square w-14 cursor-pointer items-center justify-center rounded-full border-0 border-transparent bg-orange-400 text-white shadow-xl transition-colors hover:bg-orange-500 "
    >
      {children}
    </Link>
  );
};

export default FlotingButton;
