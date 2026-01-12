import { useRef, useState } from "react";
import { useClickOutside } from "@/app/lib/ClickOutside";
import clsx from 'clsx';
import SignIn from "@/app/signin";

export default function SignInButton() {
  const [hideLoginDisplay, setHideLoginDisplay] = useState(true);
  const toggleLoginDisplay = () => {
    setHideLoginDisplay(!hideLoginDisplay);
  }

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setHideLoginDisplay(true));

  return (
  <div ref={ref}>
    <button  className="block mt-4 sm:inline-block sm:mt-0 border px-3 py-1 rounded-2xl text-zinc-300 border-zinc-300" onClick={toggleLoginDisplay}>
      Sign in
    </button>
    <div className={clsx({"hidden" : hideLoginDisplay})}>
      <div className="fixed right-6 mt-3 bg-zinc-600 w-64 rounded-2xl">
        <SignIn />
      </div>
    </div>
  </div>
  )
}
