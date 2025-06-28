import styled from "styled-components";
import React from "react";

const StyledTextArea = styled.textarea`
    width:90%;
    height:100px;
    margin:10px;
    resize:none;
`;

const TextInput = React.forwardRef((props, ref) => {
    return <StyledTextArea ref={ref} {...props} />;
});

export default TextInput;

