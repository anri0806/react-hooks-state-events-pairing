import React, { useState } from "react";
import Comment from "./Comment";
import Search from "./Search";

function CommentList({ videoData }) {
  const [isHide, setIsHide] = useState(false);
  const [text, setText] = useState("");
  const [comData, setComData] = useState(videoData.comments);

  function handleToggle() {
    setIsHide((isHide) => !isHide);
  }

  function handleClickDelete(id) {
    const newArray = comData.filter((com) => com.id !== id);
    setComData(newArray);
  }

  const commentToDisplay = comData.filter((com) => com.user.includes(text));

  return (
    <div>
      <Search onChangeFilter={setText} text={text} />
      <button onClick={handleToggle}>
        {isHide ? "Show Comments" : "Hide Comments"}
      </button>
      {isHide === true ? null : <Comment onClickDelete={handleClickDelete} commentData={commentToDisplay} />}
    </div>
  );
}

export default CommentList;
