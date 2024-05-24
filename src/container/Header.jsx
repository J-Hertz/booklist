import Searchbar from "../components/Searchbar/Searchbar"
import logo from "../../public/book.svg"

import "./header.css"


function Header() {
  return (
    <div className="header-container">
    <div className="header">
      <img src={logo} alt="Logo" />
      <Searchbar/>
    </div>
    <div className="divider div-transparent"></div>
    </div>
  )
}

export default Header