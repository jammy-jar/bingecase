import Image from "next/image";
import Container from "postcss/lib/container";

export default function Home() {
  return (
    <main className="bg-blue-200">
      <nav className="sticky flex items-center justify-between flex-wrap bg-blue-500 py-2 px-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6`">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight">Test</span>
        </div>
        <div className="block sm:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="sm:flex-grow">
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-blue-200 hover:text-white mr-4">
              List
            </a>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-blue-200 hover:text-white mr-4">
              Library
            </a>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-blue-200 hover:text-white mr-4">
              Bracket
            </a>
          </div>
          <div>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-blue-100">
              Sign in
            </a>
          </div>
        </div>
      </nav>

      <section className="flex container mx-auto my-5">
        <input type="text" placeholder="Search..." className="block sm:inline-block mt-4 sm:mt-0 px-1 py-2 leading-none border rounded text-black"></input>

      </section>

      <footer className="flex justify-between items-center flex-wrap py-2 px-6 bg-blue-500">
        <div className="w-full block flex-grow">
          <div><p className="block">test</p></div>
          <div>
            <p className="block">James Rose</p>
          </div>
        </div>
      </footer>
    
    </main>
    );
  }
  