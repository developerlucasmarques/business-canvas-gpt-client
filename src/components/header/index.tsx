import Image from "next/image";

export function Header() {
  return (
    <header className='bg-white w-full px-4 drop-shadow-md'>
      <div className='max-w-7xl mx-auto flex py-6 items-center justify-between'>
        <strong className="text-blue-500 text-2xl">BCM</strong>
        <a href="#form" className="text-white font-bold bg-blue-500 py-2 px-4 rounded-md uppercase">
          Login
        </a>
      </div>
    </header>
  )
}