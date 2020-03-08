import { Link } from "gatsby"
import React, { useState } from "react"

const SideBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div id="sidePanel" className="fixed right-0">
      <nav className={open ? "sidenav open" : "sidenav"}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          x
        </button>
        <div className="links">
          <Link id="home" className="navigation underline" to="/">
            Anne Duk Hee Jordan
          </Link>
          <Link to="/about/" activeStyle={{ color: "#f7e338" }}>
            About
          </Link>
          <Link to="/drawings/" activeStyle={{ color: "#f7e338" }}>
            Drawings
          </Link>
          <Link to="/press/" activeStyle={{ color: "#f7e338" }}>
            Press
          </Link>
          <Link to="/news/" activeStyle={{ color: "#f7e338" }}>
            News
          </Link>
          <Link to="/contact/" activeStyle={{ color: "#f7e338" }}>
            Contact
          </Link>
        </div>
      </nav>
      <button className="navigation" onClick={() => setOpen(true)}>
        M
      </button>
    </div>
  )
}

export default SideBar
