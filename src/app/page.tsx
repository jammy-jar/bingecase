import Image from "next/image";
import Container from "postcss/lib/container";
import { metadata } from "./layout";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="container mx-32 mt-40 mb-64 flex w-1/3 items-center">
        <div>
          <h2 className="font-bold text-4xl tracking-tight">Compare your favourite Books, Movies, TV Shows and Music!</h2>
          <p className="mt-10 font-light text-zinc-300 text-lg">Create a Bracket and pick a winner,<br />
          Or click Search to start make a list or rating!</p>
          <div className="flex mt-10">
            <button className="text-lg block border px-5 py-1 rounded-3xl bg-zinc-300 text-zinc-800 border-zinc-800">Bracket Creator</button>
            <button className="ml-10 text-lg block border px-5 py-1 rounded-3xl text-zinc-300 border-zinc-300">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg> <p className="ml-3 font-light">Search</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
    );
  }
  