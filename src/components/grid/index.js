import React from "react"
const Grid = ({ children }) => {
  return <div className="grid gap-4 grid-cols-1 md:grid-cols-3">{children}</div>
}
export default Grid
