import React from 'react'
import "./NavbarStyle.css"

export const Navbar = ({brand}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href='/'>{brand}</a>
      </div>
    </nav>
  )
}
