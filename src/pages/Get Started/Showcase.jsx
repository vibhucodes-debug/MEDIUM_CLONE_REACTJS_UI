
import Postdata from "./Postdata.jsx" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBookmark} from "@fortawesome/free-regular-svg-icons"

export default function Showcase(){

    return(
        <div className="showcase-container">
            <div className="post-container">
            {
                Postdata.map((props)=>{
                    
                    const text = props.body.substring(0,50)
                  return(  
                  
                    
                    <div className="post">
                        <div className="post-body">
                        <span><img src={props.dp}/>{props.name}</span>
                        <h4>{props.title}</h4>
                        <p>{text}...</p>
                        <p className="date-bookmark">{props.date}<FontAwesomeIcon icon={faBookmark} /></p>
                        </div>
                        <div className="post-image">
                            <img src={props.image} />
                        </div>
                    </div>  
                   
                  )

                })
            }
            </div>
            <div className="topics">
                    <h5>Dicover more of what matters to you</h5>
                    <div className="btn-container">
                    <div className="topic-btn"><button>Programming</button><button>Data Science</button><button>Technology</button></div>
                    <div className="topic-btn"><button>Self Improvement</button><button>Writing</button><button>Productivity</button></div>
                    <div className="topic-btn"><button>Machine Learning</button><button>Relationships</button><button>Politics</button></div>
                    <p style={{color:"green",marginTop:"1rem"}}>See more topics</p>
                    </div>
                    <p>Help &nbsp;&nbsp;Status &nbsp;&nbsp; Writers &nbsp;&nbsp;Blog &nbsp;&nbsp;Careers &nbsp;&nbsp;Privacy<br/>
                    Terms &nbsp;&nbsp;About &nbsp;&nbsp;Text to speech</p>
                </div>

        </div>
    )
}