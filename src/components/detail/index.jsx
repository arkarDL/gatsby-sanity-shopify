import ReactMarkdown from "react-markdown"
import React from "react"
import Container from "../../layout/container"
const Detail = () => {
  const markdown = `Just a link: https://reactjs.com.`

  return (
    <Container>
      <div className="my-8 ">
        <h1 className="text-4xl font-bold my-4">Lorem is cool</h1>
        <p className="text-sm ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          rerum consequatur aperiam perferendis dignissimos eum quibusdam
          debitis, sed culpa adipisci!
        </p>
        <button className="hover:border-l-2 text-sm border-blue-500 max-w-max px-4 mt-4  uppercase py-1 shadow-sm rounded-full text-blue-500">
          Share
        </button>
      </div>

      <div className="prose">
        <ReactMarkdown children={markdown} />
      </div>
    </Container>
  )
}
export default Detail
