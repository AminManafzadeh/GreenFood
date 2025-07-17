import Link from "next/link";

function Guide() {
  return (
    <div className="flex items-center justify-between mb-[100px]">
      <Link
        className="shadow-green-shadow font-semibold py-4 px-12 rounded-lg cursor-pointer max-[900px]:py-[10px] max-[900px]:px-5"
        href="/menu"
      >
        Menu
      </Link>
      <Link
        className="shadow-green-shadow font-semibold py-4 px-12 rounded-lg cursor-pointer max-[900px]:py-[10px] max-[900px]:px-5"
        href="/categories"
      >
        Categories
      </Link>
      <Link
        className="shadow-green-shadow font-semibold py-4 px-12 rounded-lg cursor-pointer max-[900px]:py-[10px] max-[900px]:px-5"
        href="/"
      >
        Discount
      </Link>
    </div>
  );
}

export default Guide;
