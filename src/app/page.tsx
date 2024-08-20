export default function Home() {
  return (
    <div>
      <section className="mx-16 sm:mx-32 mt-40 mb-64 flex w-auto sm:w-96 items-center text-center sm:text-left">
        <div>
          <h2 className="font-bold text-4xl tracking-tight">Compare your favourite Books, Movies, TV Shows and Music!</h2>
          <p className="mt-10 font-light text-zinc-300 text-lg">Create a Bracket and pick a winner,<br />
          Or click Search to start make a list or rating!</p>
          <div className="flex mt-10 justify-center sm:justify-normal">
            <button className="text-lg whitespace-nowrap block border px-5 py-1 rounded-3xl bg-zinc-200 text-zinc-800 border-none">Bracket Creator</button>
            <button className="ml-10 text-lg block border px-5 py-1 rounded-3xl text-zinc-200 border-zinc-200">
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
  