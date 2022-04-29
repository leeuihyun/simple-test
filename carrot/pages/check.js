import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function check() {
    const { product } = useSelector((state) => state.product);
    useEffect(() => {
        console.log(product);
        {
            product.forEach((v) => {
                console.log(v.name);
            });
        }
    }, []);
    return (
        <div>
            check
            {product && product.map((v) => <div>{v.name}</div>)}
        </div>
    );
}

export default check;
