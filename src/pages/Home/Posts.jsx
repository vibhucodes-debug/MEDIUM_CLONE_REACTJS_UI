import Postdata from "../Get Started/Postdata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBookmark} from "@fortawesome/free-regular-svg-icons"

export default function Posts(){
   
    // let i = [0,1]

    return(

        <div className="showcase-container">
            <div className="post-container">
            
            
            {
                
                    Postdata.map((props)=>{
                        
                        const text = props.body.substring(0,50)
                      return(  
                        
                        <div className="post" key={props.id}>
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

        </div>
    )
}