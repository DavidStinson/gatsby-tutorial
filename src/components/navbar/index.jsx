import React from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <h3 id={styles.siteTitle}>my site?!</h3>
      <Link to="/">Go home</Link>
      <Link to="/contact">Contact Me</Link>
      <Link to="/my-random-pic">Get a pic!</Link>
      <Link to="/my-posts">File Info</Link>
    </nav>
  )
}