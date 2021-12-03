import React from "react";

function Like({ like, dislike, onClickLike, onClickDislike }) {
    return (
        <div>
            <button onClick={onClickLike}>{like} 👍</button>
            <button onClick={onClickDislike}>{dislike} 👎</button>
        </div>
    )
}

export default Like