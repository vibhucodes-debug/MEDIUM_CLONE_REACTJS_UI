import {useState,useEffect} from "react"    
import { NavLink } from "react-router-dom"
import logo from "../../images/Get started/logo.png"
import wordArt from "../../images/Get started/word_art.png"
import "./Getstarted.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowTrendUp} from "@fortawesome/free-solid-svg-icons"
import TrendingPost from "./TrendindPost"
import Showcase from "./Showcase"

export default function Getstarted(){

    const [isWhite,setisWhite] = useState(false);

    useEffect(()=>{

        const onScroll = ()=>{
            if(window.scrollY>443){
                setisWhite(true);
                console.log(isWhite);
            }else{
                setisWhite(false);
                console.log(isWhite);   
            }
        }

        window.addEventListener("scroll",onScroll);

        return ()=>window.removeEventListener("scroll",onScroll);
    })

    return(
        <>
        <div className="get-started">
                    <div className={`get-started-nav ${isWhite? "white":""}`}>
                    <div className="get-started-nav-container">

                    <div className="get-started-nav-left">
                    <span className="logo"><img src={logo}/></span>
                    </div>
                    <div className="get-started-nav-right">

                    <span>Our Story</span>
                    <span>Membership</span>
                    <span>Write</span>  
                    <span>Sign in</span>
                    <NavLink className="link" to="/home"><button className="btn">Get Started</button></NavLink>
                    </div>
                    </div>
                </div>
            <div className="get-started-container">

                <div className="stay-curious">
                    <div className="stay-curious-text">
                    <div className="stay-curious-heading">Stay Curious.</div>
                    <p>Discover stories, thinking, and expertise<br/> from writers on any topic.</p>
                    <NavLink className="link" to="/home"> <button className="btn">Start reading</button></NavLink>
                    </div>
                    <img src={wordArt}/>
                </div>
            </div>
        </div>
            <div className="trending">

                <div className="trending-container">
                    <h5><FontAwesomeIcon icon={faArrowTrendUp} />Trending on Medium</h5>
                    <div className="post-grid">
                    <TrendingPost/>
                    </div>
                </div> 

            </div>

            <div className="showcase">
                <Showcase/>
                
            </div>
        </>
    )
}