import Nav from "../../components/Nav/Nav";
import Video from "../../components/Video/Video";
import "./Videos.css"

const Videos = (props) => {
    
    const videos = props.videos;
    return (
        <div className="videos-page">
            <Nav />
            <h3 className="video-title">I nostri video</h3>
            <div className="videos-container">
            {videos.map((video, i) => {
                return <Video video={video} key={i} />
            })}
            </div>
        </div>
    )
}

export default Videos;