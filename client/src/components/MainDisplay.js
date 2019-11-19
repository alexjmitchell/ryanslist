import React from "react"
import "../styles/MainDisplay.css"
import { useCategories } from "../hooks"

const MainDisplay = props => {
  const { categories } = useCategories()
  return (
    <div>
      {categories.map(cat => (
        <a href="#">{cat.name}</a>
      ))}
    </div>
  )
}

export default MainDisplay
