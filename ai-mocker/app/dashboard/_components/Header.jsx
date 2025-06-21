'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // hamburger icons

function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log('Current path:', path);
  }, [path]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-blue-400 text-white p-4 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" height={40} width={40} alt="Logo" />
        <span className="font-bold text-lg">AI-MOCKER</span>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      <ul className={`md:flex space-x-4 md:space-x-6 absolute md:static bg-blue-400 w-full left-0 top-16 md:top-auto md:w-auto md:bg-transparent flex-col md:flex-row items-start md:items-center px-6 md:px-0 py-4 md:py-0 transition-all z-50
          ${menuOpen ? 'flex' : 'hidden'}
        `}>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === '/dashboard' ? 'text-primary font-bold' : ''
          }`}
        >
          <Link href="/dashboard">Dashboard</Link>
        </li>
        {/* <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === '/dashboard/Questions' ? 'text-primary font-bold' : ''
          }`}
        >
          <Link href="/dashboard/Questions">Questions</Link>
        </li> */}
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === '/dashboard/contact' ? 'text-primary font-bold' : ''
          }`}
        >
          <Link href="/dashboard/contact">Contact Us</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path === '/dashboard/howit' ? 'text-primary font-bold' : ''
          }`}
        >
          <Link href="/dashboard/howit">How it works?</Link>
        </li>
      </ul>

      <div className="hidden md:block">
        <UserButton />
      </div>

      {/* UserButton shown at bottom in mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-6">
          <UserButton />
        </div>
      )}
    </div>
  );
}

export default Header;
