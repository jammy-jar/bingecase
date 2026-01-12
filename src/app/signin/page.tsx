"use client"

import Link from "next/link"
import SignIn from "@/app/signin"

export default function Page() {
  return (
    <main>
      <div className="ml-3 mt-3">
        <Link className="hover:border-teal-300 hover:text-teal-300 transition-colors duration-200 ease-in-out" href="./">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
        </Link>
      </div>
      <div className="flex mt-32 justify-center">
        <SignIn />
      </div>
    </main>
  )
}