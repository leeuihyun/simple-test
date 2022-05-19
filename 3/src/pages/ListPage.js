import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ListPage() {
    const item = useSelector((state) => state.item);

    return (
        <div>
            {item.map((v) => (
                <div>
                    <h2>{v.name}</h2>
                    <h2>{v.desp}</h2>
                    <h2>{v.price}</h2>
                    <br />
                </div>
            ))}
            <Link to="/">메인으로!!</Link>
        </div>
    );
}

export default ListPage;
