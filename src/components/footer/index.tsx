
export function Footer() {
  return (
    <footer className='bg-blue-500 w-full px-4 drop-shadow-md'>
      <div className='max-w-7xl mx-auto flex py-12 justify-between items-center text-white'>
        <p>BCM © {new Date().getFullYear()}</p>
        <a href="https://slideworks.cc" target="_blank">Slideworks</a>
      </div>
    </footer>
  )
}