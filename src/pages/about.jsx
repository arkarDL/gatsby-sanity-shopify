import React from "react"
import { Link } from "gatsby"
const About = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div>
        <h2 className="text-3xl font-bold my-6">Nothing to see here !</h2>

        <Link href="/">
          <button className="border-l-2  border-blue-500 max-w-max mt-4 px-4 text-md uppercase py-2 shadow-md rounded-full text-blue-500">
            Go back and buy our products
          </button>
        </Link>
      </div>
    </div>
  )
}
export default About
