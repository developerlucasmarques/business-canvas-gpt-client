export function Footer() {
  return (
    <footer className="w-full bg-blue-500 px-4 drop-shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-12 text-white">
        <p>BCM © {new Date().getFullYear()}</p>
        <a href="https://slideworks.cc" target="_blank" rel="noreferrer">
          Slideworks
        </a>
      </div>
    </footer>
  )
}
