import React from "react"
import NavBar from "../navbar"
import Footer from "../footer"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div id="page-container">
      <NavBar />
			<main>
	      {children}
			</main>
      <Footer />
    </div>
  )
}