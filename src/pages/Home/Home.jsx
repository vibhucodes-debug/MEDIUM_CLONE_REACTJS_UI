import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import { faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Postdata from "../Get Started/Postdata.jsx"
import Users from "./Users.jsx"
import Posts from "./Posts.jsx"
import "./Home.scss"

export default function Home() {

    return (
        <div className="home">
            <div className="home-container">
                <div className="home-left">
                    <div className="for-you">
                        <button><FontAwesomeIcon icon={faPlus} style={{ color: "gray" }} /></button>
                        <span>For You</span>
                        <span>Following</span>
                    </div>

                    <Posts />

                </div>
                <div className="home-right">
                    <div className="staff-picks">

                        <h3>Staff picks</h3>

                        {

                            Postdata.map((props) => {


                                if (props.id > 4) {
                                    return (
                                        <div className="staff-posts" key={props.id}>
                                            <p><img src={props.dp} /> {props.name}</p>
                                            <h4>{props.title}</h4>
                                        </div>
                                    )
                                }
                            })
                        }

                        <p className="see-more">See the full list</p>

                    </div>

                    <div className="connect">
                        <div className="connect-container">
                            <span><FontAwesomeIcon icon={faMedium} size="2xl" style={{ color: "#000000", }} /> + <FontAwesomeIcon size="xl" icon={faTwitter} style={{ color: "#3881ff", }} /></span>
                            <p>Discover medium writers you already follow on twitter</p>
                            <button className="btn"><FontAwesomeIcon size="xl" icon={faTwitter} style={{ color: "#3881ff", }} /> Connect to twitter</button>
                            <p style={{ fontSize: "14px", textDecoration: "underline" }}>May be later</p>

                        </div>

                    </div>

                    <div className="topics">
                        <h3>Recommended topics</h3>
                        <div className="topics-container">
                            <button className="btn">Programming</button><button className="btn">Data Science</button><button className="btn">Technology</button>
                            <button className="btn">Self improvement</button><button className="btn">Writing</button><button className="btn">Relationships</button>
                            <button className="btn">Machine learning</button><button className="btn">Data Science</button><button className="btn">Technology</button>
                        </div>
                        <p className="see-more">See more topics</p>
                    </div>

                    <div className="who-to-follow">
                        <div className="who-to-container">
                            <h4>Who to follow</h4>
                            {
                                Users.map((props) => {

                                    if (props.id > 1 && props.id < 5) {
                                        return (

                                            <div className="who-to-profile" key={props.id}>
                                                <div className="profile-left">
                                                    <img src={props.dp} />
                                                    <div className="profile-text">
                                                        <h4> {props.Name}</h4>
                                                        <p>{props.Desc}</p>
                                                    </div>
                                                </div>
                                                <div className="btn-div"><button>Follow</button></div>
                                            </div>
                                        )
                                    }
                                })
                            }

                            <p className="see-more">See more suggestions</p>
                        </div>

                    </div>

                    <div className="reading-list">
                        <h4>Reading list</h4>
                        <p>Click the &nbsp;<FontAwesomeIcon icon={faBookmark} />&nbsp; on any story to easily add it to your reading list or a custom list that you can share.</p>
                        <p>Help &nbsp;&nbsp;Status &nbsp;&nbsp; Writers &nbsp;&nbsp;Blog &nbsp;&nbsp;Careers &nbsp;&nbsp;Privacy<br />
                            Terms &nbsp;&nbsp;About &nbsp;&nbsp;Text to speech</p>
                    </div>
                </div>
            </div>
        </div>
    )
}