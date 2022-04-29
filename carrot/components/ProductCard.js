import React from "react";
import styled from "styled-components";

const ProductBox = styled.div`
    display: flex;
    padding: 10px;
    .thumbnail {
        max-width: 200px;
        width: 100%;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
    }
    .product {
        .name {
            font-size: 17px;
            font-weight: 700;
            margin: 10px;
        }
        .price {
            margin: 10px;
            font-size: 16px;
            font-weight: 600;
        }
        .date {
            margin: 10px;
            color: gray;
            font-size: 13px;
        }
    }
`;
function ProductCard({ data }) {
    return (
        <ProductBox>
            <div>
                <img
                    className="thumbnail"
                    src="https://via.placeholder.com/350"
                />
            </div>
            <div className="product">
                <div className="name">{data.name}</div>
                <div className="date">2020년 4월 29일</div>
                <div className="price">{data.price}</div>
            </div>
        </ProductBox>
    );
}

export default ProductCard;
