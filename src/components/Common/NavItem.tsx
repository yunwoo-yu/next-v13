import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  mobile?: boolean;
}

const NavItem = ({ mobile }: NavItemProps) => {
  return (
    <ul className={`flex w-full items-center justify-center gap-4 ${mobile && 'flex-col'}`}>
      <li className="cursor-pointer border-b-4 py-2 text-center">
        <Link href="/admin">Amdin</Link>
      </li>
      <li className="cursor-pointer border-b-4 py-2 text-center">
        <Link href="/user">User</Link>
      </li>
      <li className="cursor-pointer border-b-4 py-2 text-center">
        <button>SignOut</button>
      </li>
      <li className="cursor-pointer border-b-4 py-2 text-center">
        <button>SignIn</button>
      </li>
    </ul>
  );
};

export default NavItem;
