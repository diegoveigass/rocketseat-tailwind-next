export default function Home() {
  return (
    <div className="p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-screen flex flex-col items-center text-center">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-4 dark:text-slate-400">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
        <button className="bg-sky-500 dark:bg-sky-400 text-white dark:text-sky-950 px-4 py-2 rounded-md font-medium mt-4 transition-colors enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed ">Sign In</button>
      </div>
    </div>
  )
}
