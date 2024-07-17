import Image from "next/image";
import Container from "postcss/lib/container";
import { metadata } from "./layout";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      <header>
        <nav className="sticky flex items-center justify-between flex-wrap py-3 px-6 border-b border-slate-900/10">
          <div className="flex items-center flex-shrink-0 mr-12">
            <Link href="/">
              <Image
                src="/bingecase-banner.svg"
                width={160}
                height={48}
                alt="BingeCase Logo"
              />
            </Link>
          </div>
          <div className="block sm:hidden">
            <button className="flex items-center px-3 py-2 border rounded border-slate-900/20 hover:text-slate-900 hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="hidden w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="sm:flex-grow">
              <Link href="#" className="block mt-4 sm:inline-block sm:mt-0 hover:text-slate-600 mr-12">
                List
              </Link>
              <Link href="#" className="block mt-4 sm:inline-block sm:mt-0 hover:text-slate-600 mr-12">
                Library
              </Link>
              <Link href="./bracket" className="block mt-4 sm:inline-block sm:mt-0 hover:text-slate-600 mr-12">
                Bracket
              </Link>
            </div>
            <div>
              <button className="block mt-4 sm:inline-block sm:mt-0">
                Sign in
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="flex container mx-auto py-5">
          <input type="text" placeholder="Search..." className="block sm:inline-block mt-4 sm:mt-0 px-1 py-2 leading-none border rounded text-black"></input>

        </section>
      </main>

      <footer className="flex justify-between items-center flex-wrap py-2 px-6 border-t border-slate-900/10">
        <div className="w-full block flex-grow">
          <div><p className="block">test</p></div>
          <div>
            <p className="block">James Rose</p>
          </div>
        </div>
      </footer>
      
    </div>
    );
  }
  