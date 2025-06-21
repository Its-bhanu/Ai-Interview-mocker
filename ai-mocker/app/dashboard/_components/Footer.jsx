
'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t mt-10 bg-gray-100 text-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left Side */}
        <p className="mb-4 md:mb-0">
          Crafted by <strong>Bhanu Sharma</strong> &copy; {new Date().getFullYear()}
        </p>

        {/* Right Side Links */}
        <div className="flex flex-wrap gap-6 justify-center">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          {/* <Link href="/profile" className="hover:underline">Profile</Link> */}
          {/* <Link href="/settings" className="hover:underline">Settings</Link> */}
          
          <Link href='/dashboard/contact' className='hover:underline'>Contact US</Link>
          <Link href="/dashboard/howit" className="hover:underline">How It</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
