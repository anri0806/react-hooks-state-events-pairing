import React, {useState} from "react";
import Title from "./Title";
import Info from "./Info";
import Like from "./Like";
import CommentList from "./CommentList";

function Detail({ videoData}) {
    const [like, setLike] = useState(9210)
    const [dislike, setDislike] = useState(185)

    function increaseLike() {
        setLike(like + 1)
    }

    function decreaseLike() {
        setDislike(dislike + 1)
    }

  return (
    <div>
      <Title title={videoData.title} />
      <Info view={videoData.views} date={videoData.createdAt} />
      <Like onClickDislike={decreaseLike} onClickLike={increaseLike} like={like} dislike={dislike} />
      <CommentList videoData={videoData} />
    </div>
  );
}

export default Detail;
