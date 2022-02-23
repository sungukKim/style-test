import React from "react";
import styled from "styled-components/native";

const StyledInput = styled.TextInput`
    width: 200px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 2px;
    border-color: #3498db;
    font-size: 24px;
    `;

const Input = () => {
    return <Input placcholder="Enter a text..." placcholderTextColor="#3498db" />;
};

export default Input;