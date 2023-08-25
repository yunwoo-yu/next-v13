'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import NavItem from './NavItem';

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const onClickMenuHandler = () => {};

  return (
    <nav className="relative z-10 w-full bg-orange-500 text-white">
      <div className="mx-5 flex items-center justify-between sm:mx-10 lg:mx-20">
        <div className="flex h-14 items-center text-2xl">
          <Link href="/">Logo</Link>
        </div>
        <div className=" text-2xl sm:hidden">
          {!isMenu ? (
            <button onClick={onClickMenuHandler}>+</button>
          ) : (
            <button onClick={onClickMenuHandler}>-</button>
          )}
        </div>
        <div className=" block sm:block">
          <NavItem />
        </div>
      </div>
      <div className="block sm:hidden">{!isMenu ? null : <NavItem mobile />}</div>
    </nav>
  );
};

export default NavBar;
