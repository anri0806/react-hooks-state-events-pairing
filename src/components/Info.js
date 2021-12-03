import React from "react";

function Info({ view, date }) {
    return (
        <div>
            <p>{view} Views | Uploaded {date}</p>
        </div>
    )
}

//START FROM HERE
export default Info