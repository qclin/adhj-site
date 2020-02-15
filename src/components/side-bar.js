import { Link } from "gatsby"
import React, { useState } from "react"

const SideBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div id="sidePanel" className="fixed right-0 top-0">
      <nav className={open ? "sidenav open" : "sidenav"}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          x
        </button>
        <div className="links">
          <Link id="home" className="navigation underline" to="/">
            Anne Duk Hee Jordan
          </Link>
          <Link to="/about/">About</Link>
          <Link to="/drawings/">Drawings</Link>
          <Link to="/press/">Press</Link>
          <Link to="/news/">News</Link>
        </div>
      </nav>
      <button className="navigation" onClick={() => setOpen(true)}>
        M
      </button>
    </div>
  )
}

export default SideBar
