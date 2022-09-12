import React from "react"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { GatsbyImage } from "gatsby-plugin-image"
const Card = ({ data }) => {
  const { language } = useI18next()
  console.log(data)
  return (
    <div className="p-4 px-6 border rounded-md shadow-sm hover:border-blue-200 ">
      <h2 className="mb-2 text-2xl font-bold capitalize">
        {data.title[language]}
      </h2>
      <GatsbyImage
        image={data.mainImage.asset.gatsbyImageData}
        className="my-6"
      />
      {data.description && (
        <p className="line-clamp-3 mb-4">{data?.description[language]}</p>
      )}
      <a
        href={`/${language == "ja" ? "ja/" : ""}${data?.slug?.current}`}
        className="px-4 py-1 mt-4 text-blue-500 uppercase border-blue-500 rounded-full shadow-sm hover:border-l-2 max-w-max text-md"
      >
        Check Out
      </a>
    </div>
  )
}
export default Card
