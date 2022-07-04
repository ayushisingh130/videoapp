import React from "react";

const VideoDetail = ({currentvideo}) => {

    if(!currentvideo){
        return <div> Loading.. </div>
    }

    const videosrc = `https://www.youtube.com/embed/${currentvideo.id.videoId}`;
    return(
        <>
        <div className="ui embed" >
             <iframe title="video player" src={videosrc} />
        </div>
        <div className="ui segment" > 
            <h2 className="ui header" > {currentvideo.snippet.title} </h2> 
            <p>  {currentvideo.snippet.description}  </p>
        </div>
        </>
    );
}

export default  VideoDetail;