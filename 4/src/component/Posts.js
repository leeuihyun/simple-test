import React from "react";

function Posts({ data }) {
    return (
        <div>
            {data.map((v) => (
                <div key={v.id}>{v.title}</div>
            ))}
        </div>
    );
}

export default Posts;
