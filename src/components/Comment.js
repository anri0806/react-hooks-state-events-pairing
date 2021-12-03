import React, { useState } from "react";

function Comment({ commentData, onClickDelete }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function handleLike() {
    setLike(like + 1);
  }

  function handleDislike() {
    setDislike(dislike + 1);
  }

  const comments = commentData.map((comment) => {
    function handleDelete() {
      onClickDelete(comment.id)
    }

    return (
      <div key={comment.id}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
        <button onClick={handleLike}>{like} 👍</button>
        <button onClick={handleDislike}>{dislike} 👎</button>
        <button onClick={handleDelete}>Remove</button>
      </div>
    );
  });

  return <div>{comments}</div>;
}

export default Comment;

//1. Create function to remove matching (pass id) element
//2. pass function to child
//3. onClick.  create function to pass id that was clicked to
//function in parent
