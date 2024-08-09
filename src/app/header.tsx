import Image from "next/image";
import Link from 'next/link';
import { zain } from './font';

export default function Header() {
  return (
  <header className="sticky top-0">
    <nav className="flex items-center justify-between flex-wrap py-3 px-6 border-b border-zinc-600">
      <div className="flex items-center flex-shrink-0 mr-12">
        <Link className="flex items-center" href="./">
          <Image
            src="/logo-dark.png"
            width={38}
            height={38}
            alt="BingeCase Logo"
          />
          <h1 className={`${zain.className} antialiased tracking-tighter text-4xl ml-3 mt-1`}>BingeCase</h1>
        </Link>
      </div>
      <div className="block sm:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-slate-900/20 hover:text-slate-900 hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="hidden w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="sm:flex-grow text-zinc-300 font-light">
          <Link href="./library" className="block mt-4 sm:inline-block sm:mt-0 hover:text-slate-600 mr-12">
            Library
          </Link>
          <Link href="./find" className="block mt-4 sm:inline-block sm:mt-0 hover:text-slate-600 mr-12">
            Search
          </Link>
          <Link href="./bracket" className="block mt-4 sm:inline-block sm:mt-0 hover:text-slate-600 mr-12">
            Bracket
          </Link>
        </div>
        <div>
          <button className="block mt-4 sm:inline-block sm:mt-0 border px-3 py-1 rounded-2xl text-zinc-300 border-zinc-300">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  </header>
  );
}