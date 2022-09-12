import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Card = ({ data }) => {
  const image = getImage(data?.featuredImage?.localFile)
  return (
    <div className="p-4 my-4 border rounded-md shadow-sm hover:border-blue-200 ">
      <h2 className="mb-4 text-xl font-bold">{data.title}</h2>
      <div className="mb-4 bg-blue-100 rounded-md aspect-video">
        <GatsbyImage
          image={image}
          alt={data.title}
          className="w-full h-full "
        />
      </div>

      <button className="px-4 py-1 mt-4 text-blue-500 uppercase border-blue-500 rounded-full shadow-sm hover:border-l-2 max-w-max text-md">
        Check Out
      </button>
    </div>
  )
}
export default Card
