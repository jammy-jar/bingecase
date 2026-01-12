'use client';

import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import {useFormState} from 'react-dom'
import { authenticate } from '@/app/lib/actions';

export default function SignIn() {
  const [makeNewAccount, setMakeNewAccount] = useState(false);

  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined,
  );

  return (
    <section className="text-center justify-center">
      <div className="flex">
        <button className={clsx("py-3 border-b text-sm hover:border-teal-300 hover:text-teal-300 transition-colors duration-300 ease-in-out w-1/2", {"border-zinc-300 text-zinc-300" : makeNewAccount}, {"border-teal-300 text-teal-300" : !makeNewAccount})} onClick={() => setMakeNewAccount(false)}>
          Sign in
        </button>
        <button className={clsx("py-0.5 border-b text-sm hover:border-teal-300 hover:text-teal-300 transition-colors duration-300 ease-in-out w-1/2", {"border-zinc-300 text-zinc-300" : !makeNewAccount}, {"border-teal-300 text-teal-300" : makeNewAccount})} onClick={() => setMakeNewAccount(true)}>
          I don&#39;t have an account
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
      <form className={clsx("", {"hidden" : makeNewAccount})} action={formAction} id="signin-form">
        <input className="mb-5 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Username / Email" type="text" name="email" id="email" required />
        <br />
        <input className="mb-7 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Password" type="password" name="password" id="password" required />
        <br/>
        <button className="mb-6 bg-sky-600 py-1 px-4 rounded-2xl">Continue</button>
      </form>
      <form className={clsx("", {"hidden" : !makeNewAccount})} action={formAction} id="new-account-form">
        <input className="mb-5 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Create Username" type="text" name="text" id="text" required />
        <br />
        <input className="mb-5 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Email" type="email" name="email" id="email" required />
        <br />
        <input className="mb-5 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="New Password" type="password" name="new-password" id="new-password" required minLength={6} />
        <br />
        <input className="mb-7 px-3 w-48 py-1 text-zinc-900 bg-zinc-300 rounded-md placeholder-zinc-500" placeholder="Confirm Password" type="password" name="confirm-password" id="confirm-password" required />
        <br/>
        <button className="mb-6 bg-sky-600 py-1 px-4 rounded-2xl" aria-disabled={isPending}>Continue</button>
      </form>
      <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
    </section>
  )
}