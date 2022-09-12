import React from "react"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
const Card = ({ data }) => {
  const { language } = useI18next()
  return (
    <div className="p-4 border rounded-md shadow-sm hover:border-blue-200 ">
      <h2 className="mb-4 text-xl font-bold ">{data.title[language]}</h2>
      {data.description && (
        <p className="line-clamp-3">{data?.description[language]}</p>
      )}
      <button className="px-4 py-1 mt-4 text-blue-500 uppercase border-blue-500 rounded-full shadow-sm hover:border-l-2 max-w-max text-md">
        Check Out
      </button>
    </div>
  )
}
export default Card
