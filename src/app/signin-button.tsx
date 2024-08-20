import { useRef, useState } from "react";
import { useClickOutside } from "./lib/ClickOutside";
import clsx from "clsx";
import Image from "next/image";

export default function SignIn() {
  const [hideLoginDisplay, setHideloginDisplay] = useState(true);
  const toggleLoginDisplay = () => {
    setHideloginDisplay(!hideLoginDisplay);
  }
  const [makeNewAccount, setMakeNewAccount] = useState(false);

  const handleClickOutside = () => {
    setHideloginDisplay(true)
  };

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setHideloginDisplay(true));
  return (
  <div ref={ref}>
    <button  className="block mt-4 sm:inline-block sm:mt-0 border px-3 py-1 rounded-2xl text-zinc-300 border-zinc-300" onClick={toggleLoginDisplay}>
      Sign in
    </button>
    <section className={clsx("fixed bg-zinc-600 right-6 mt-3 w-64 rounded-2xl text-center justify-center", {"hidden" : hideLoginDisplay})}>
      <div className="flex">
        <button className={clsx("py-3 border-b text-sm hover:border-teal-300 hover:text-teal-300 transition-colors duration-300 ease-in-out border-zinc-300 text-zinc-300 w-1/2", {"border-teal-300 text-teal-300" : !makeNewAccount})} onClick={() => setMakeNewAccount(false)}>
          <p>Sign in</p>
        </button>
        <button className={clsx("py-0.5 border-b text-sm hover:border-teal-300 hover:text-teal-300 transition-colors duration-300 ease-in-out border-zinc-300 text-zinc-300 w-1/2", {"border-teal-300 text-teal-300" : makeNewAccount})} onClick={() => setMakeNewAccount(true)}>
          <p>I don&#39;t have an account</p>
        </button>
      </div>
      <button className="flex m-auto mt-6 mb-6 bg-sky-600 py-2 px-5 rounded-2xl">
        <Image
          src="/google.png"
          width={24}
          height={24}
          className="bg-white rounded-md p-1 mr-3"
          alt="Google Icon"
        />
        Sign in with Google</button>
      <p className="mb-6">or</p>
      <form className={clsx("", {"hidden" : makeNewAccount})} action="" id="signin-form">
        <input className="mb-5 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Username / Email" type="text" name="email" id="email" />
        <input className="mb-7 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Password" type="password" name="password" id="password" />
        <br/>
        <button className="mb-6 bg-sky-600 py-1 px-4 rounded-2xl">Continue</button>
      </form>
      <form className={clsx("", {"hidden" : !makeNewAccount})} action="" id="new-account-form">
        <input className="mb-5 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Create Username" type="text" name="text" id="text" />
        <input className="mb-5 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Email" type="email" name="email" id="email" />
        <input className="mb-5 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="New Password" type="password" name="new-password" id="new-password" />
        <input className="mb-7 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Confirm Password" type="password" name="confirm-password" id="confirm-password" />
        <br/>
        <button className="mb-6 bg-sky-600 py-1 px-4 rounded-2xl">Continue</button>
      </form>
    </section>
  </div>
  )
}
