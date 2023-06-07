import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedium } from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faBell, faUser,faPenToSquare } from "@fortawesome/free-regular-svg-icons"

import "./Navbar.scss"
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className="nav">
            <div className="nav-container">
                <div className="nav-left">
                    
                 <NavLink className="link" to="/home"><span className="logo"><FontAwesomeIcon icon={faMedium} size="2xl" style={{ color: "#000000", }} /></span></NavLink>
                    <span className="search"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "gray" }} /><input type="text" placeholder="Search Medium" /></span>
                </div>
                <div className="nav-right">
                            <NavLink className="link" to="/write"><span><FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color:"gray"}}/>Write</span></NavLink>   
                            <span><FontAwesomeIcon icon={faBell} size="xl" style={{ color: "gray", }} /></span>
                            <span><FontAwesomeIcon icon={faUser} size="xl" style={{ color: "gray", }} /></span>
                </div>
            </div>

        </div>
    )
}

export default NavBar;