import React from "react"
const Card = () => {
  return (
    <div className="p-4 border hover:border-blue-200 shadow-sm rounded-md  my-4 ">
      <h2 className="font-bold mb-4 text-xl">Addidas is colalie</h2>
      <div className="aspect-video bg-blue-100 rounded-md mb-4"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
        veritatis repellendus voluptatem.
      </p>
      <button className="hover:border-l-2  border-blue-500 max-w-max mt-4 px-4 text-md uppercase py-1 shadow-sm rounded-full text-blue-500">
        Check Out
      </button>
    </div>
  )
}
export default Card
