import React from 'react';

const Videodetail = ({ video }) => {
const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div ClassName="detail">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>


                );
            
            };
            
export default Videodetail;