import React from "react";

interface ButtonType {
    children?: React.ReactNode;
    width: number;
    onClick?: () => void;
}

const Button: React.FC<ButtonType> = (props) => {
    const { width, children, onClick } = props;
    return (
        <button
            onClick={onClick}
            style={{
                width: `${width}px`,
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {children}
        </button>
    );
};

export default Button;
