import { Link } from "gatsby"
import React, { useState } from "react"

const SideBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div id="sidePanel">
      <nav className={open ? "sidenav open" : "sidenav"}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          &times;
        </button>
        <Link to="/about/">About</Link>
        <Link to="/drawings/">DRAWINGS</Link>
        <Link to="/press/">PRESS</Link>
        <Link to="/news/">NEWS</Link>
      </nav>
      <button className="navigation" onClick={() => setOpen(true)}>
        M
      </button>
    </div>
  )
}

export default SideBar
