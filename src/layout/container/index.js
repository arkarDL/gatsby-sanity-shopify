import React from "react"
import Header from "../../components/header"
const Container = ({ children }) => {
  return (
    <div className="w-full mx-auto md:w-[70%] font-mono pb-[96px] ">
      <Header />
      {children}
    </div>
  )
}

export default Container
