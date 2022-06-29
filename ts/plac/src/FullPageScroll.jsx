import React from "react";
import FullPage, {
    FullPageSections,
    FullpageSection,
    FullPageNavigation,
} from "@ap.cx/react-fullpage";

const FullPageScroll = () => {
    return (
        <FullPage>
            <FullPageSections>
                <FullpageSection style={{ height: "100vh" }}>
                    <h1>screen 1</h1>
                </FullpageSection>
                <FullpageSection style={{ height: "100vh" }}>
                    <h1>screen 2</h1>
                </FullpageSection>
                <FullpageSection style={{ height: "100vh" }}>
                    <h1>screen 3</h1>
                </FullpageSection>
            </FullPageSections>
        </FullPage>
    );
};

export default FullPageScroll;
