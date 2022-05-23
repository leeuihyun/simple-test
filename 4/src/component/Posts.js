import React from "react";
import { v4 as uuidv4 } from "uuid";

function Posts({ data }) {
    return (
        <div>
            {data.map((v) => (
                <div key={uuidv4()}>
                    <img
                        src={v.Data.file.preview}
                        alt="preview"
                        width="100"
                        height="100"
                    />
                </div>
            ))}
        </div>
    );
}

export default Posts;
