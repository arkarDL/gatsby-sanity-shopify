import React from "react"
import { Link } from "gatsby"
const Header = () => {
  return (
    <header className="flex flex-col gap-4 my-4 border-b pb-6">
      <img
        className="w-[80px] mb-4 aspect-square rounded-full object-cover border-1 shadow-md border-blue-100"
        src="data:image/png;base64,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"
        alt="Shop logo"
      />
      <ul className="flex flex-row gap-4">
        <li>
          <Link
            href="/"
            className="cursor-pointer  hover:border-b-2 border-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="cursor-pointer  hover:border-b-2 border-blue-500"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className="cursor-pointer  hover:border-b-2 border-blue-500"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="cursor-pointer  hover:border-b-2 border-blue-500"
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  )
}
export default Header
