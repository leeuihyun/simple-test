import React from "react";
import FullPage, {
    FullPageSections,
    FullpageSection,
    FullPageNavigation,
} from "@ap.cx/react-fullpage";
import Header from "./components/Header";

const FullPageScroll = () => {
    const sectionStyle = {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div>
            <Header />
            <FullPage>
                <FullPageSections>
                    <FullpageSection style={sectionStyle}>
                        <h1>screen 1</h1>
                    </FullpageSection>
                    <FullpageSection style={sectionStyle}>
                        <h1>screen 2</h1>
                    </FullpageSection>
                    <FullpageSection style={sectionStyle}>
                        <h1>screen 3</h1>
                    </FullpageSection>
                </FullPageSections>
            </FullPage>
        </div>
    );
};

export default FullPageScroll;
