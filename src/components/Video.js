import React from "react";

function Video({ videoData }) {
    console.log(videoData.embedUrl)

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
}

export default Video;

/*
<iframe
width="919"
height="525"
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
frameBorder="0"
allowFullScreen
title="Thinking in React"/>
*/
