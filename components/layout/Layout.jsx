import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      <header className="flex max-w-[900px] m-auto items-center justify-between py-5 px-0 max-[900px]:p-5 max-[600px]:p-2">
        <div className=" mr-4">
          <Link href="/" className="text-green font-bold text-[1.2rem]">
            Green Food
          </Link>
        </div>

        <div className="flex items-center text-[dimgrey] font-medium">
          <Link
            href="/menu"
            className="hover:text-green transition-all duration-300 ease-in-out"
          >
            Menu
          </Link>
          <Link
            className="ml-4 hover:text-green transition-all duration-300 ease-in-out"
            href="/categories"
          >
            Categories
          </Link>
        </div>
      </header>

      <div className="min-h-[592px]">{children}</div>

      <footer className="bg-green text-center text-white py-[10px] px-0 mt-7">
        <a className="mr-8 font-bold" href="#" target="_blank" rel="noreferrer">
          Green Car
        </a>
        Next.js &copy;
      </footer>
    </div>
  );
}

export default Layout;
