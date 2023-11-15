export function Header() {
  return (
    <header className="w-full bg-white px-4 drop-shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6">
        <strong className="text-2xl text-blue-500">BCM</strong>
        <a
          href="#form"
          className="rounded-md bg-blue-500 px-4 py-2 font-bold uppercase text-white"
        >
          Login
        </a>
      </div>
    </header>
  )
}
