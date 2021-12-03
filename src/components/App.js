import React from "react";
import video from "../data/video.js";
import Detail from "./Detail.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video videoData={video} />
      <Detail videoData={video} />
    </div>
  );
}

export default App;
