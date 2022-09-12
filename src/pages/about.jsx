import React from "react"
import { Link } from "gatsby-plugin-react-i18next"
const About = () => {
  return (
    <div className="grid w-full h-screen place-items-center">
      <div>
        <h2 className="my-6 text-3xl font-bold">Nothing to see here !</h2>

        <Link to="/">
          <button className="px-4 py-2 mt-4 text-blue-500 uppercase border-l-2 border-blue-500 rounded-full shadow-md max-w-max text-md">
            Go back and buy our products
          </button>
        </Link>
      </div>
    </div>
  )
}
export default About
