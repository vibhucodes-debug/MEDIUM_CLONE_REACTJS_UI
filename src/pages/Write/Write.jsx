import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedium } from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faBell, faUser,faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { NavLink } from "react-router-dom"
import ReactQuill from "react-quill"
import { useState } from "react"
import 'react-quill/dist/quill.bubble.css';
import "./Write.scss"


const Write = () => {
    const [value, setValue] = useState('');
    return (
        <div className="write">
            <div className="nav-write">
            <div className="nav-write-container">
                <div className="nav-write-left">
                    
                 <NavLink className="link" to="/home"><span className="logo"><FontAwesomeIcon icon={faMedium} size="2xl" style={{ color: "#000000", }} /></span></NavLink>
                    <span className="search"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "gray" }} /><input type="text" placeholder="Search Medium" /></span>
                </div>
                <div className="nav-write-right">
                            <NavLink className="link" to="/write"><span><FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color:"gray"}}/>Write</span></NavLink>   
                            <span><FontAwesomeIcon icon={faBell} size="xl" style={{ color: "gray", }} /></span>
                            <span><FontAwesomeIcon icon={faUser} size="xl" style={{ color: "gray", }} /></span>
                </div>
            </div>

        </div>

            <div className="write-container">
                <div className="editor-container">
                    <h2><input className="input" type="text" style={{border:"None",outline:"None",color:"gray",width:"100%"}} placeholder="Title"/></h2>
                    <ReactQuill theme="bubble" value={value} onChange={setValue} /> 
                </div>
            </div>

        </div>
    )
}


export default Write