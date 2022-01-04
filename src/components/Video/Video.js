import "./Video.css"
const Video = (props) => {
   
    const video = props.video;
    let src = "";
    let hasLink = video.Link ? true : false;
    if (hasLink){
  src = video.Link
    } else {
   src = video.Video.url
    }
  
    return (
        <div className="video-container">
            {hasLink ? 
        <iframe 
         className="iframe"
        src={src} 
        title={video.Title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
        </iframe>   :
        <video className="video"  controls>
        <source src={src} type="video/mp4" />
      </video> 
        }
        </div>
    )
}

export default Video;