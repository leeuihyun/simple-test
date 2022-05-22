import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import imagesSaga from "../../sagas/images";

const Container = styled.div`
    display: flex;
    margin-top: "3rem";
`;

const Img = styled.div`
    display: block;
    width: auto;
    height: 30px;
`;
function Dropzone({ setFile }) {
    const [check, setCheck] = useState([]);
    const onDrop = useCallback((acceptedFiles) => {
        setCheck(
            acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        );
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });
    useEffect(() => {
        check.forEach((file) => setFile(file));
        // Make sure to revoke the data uris to avoid memory leaks
        //check.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [check]);
    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {check.length >= 1 ? (
                    <div>
                        {check.map((file) => (
                            <Container key={file.name}>
                                <img
                                    src={file.preview}
                                    alt="preview"
                                    width="100"
                                    height="100"
                                />
                            </Container>
                        ))}
                    </div>
                ) : (
                    <p>
                        Drag 'n' drop some files here, or click to select files
                    </p>
                )}
            </div>
        </>
    );
}

export default Dropzone;
