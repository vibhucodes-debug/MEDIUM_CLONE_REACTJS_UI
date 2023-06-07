import Postdata from "./Postdata"

export default function TrendingPost(){

    return(
        <>
        {
            
        Postdata.map((props)=>{ 
        if(props.id<7){
        return(
            <div className="trending-post">
                
                <p><img src={props.dp}></img>{props.name}</p>
                <h6>{props.title}</h6>
                <span>{props.date}</span>
            </div>  
        )
        }
        })

        }
        </>
    )
    
}