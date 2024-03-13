// src/components/Checkbox.js
import React from "react";
import styled from "styled-components";

interface CheckboxProps {
    checked?: boolean;
    onChange?: () => void;
    text?: string;
}

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div<CheckboxProps>`
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  background-color: ${(props) => (props.checked ? "#66bb6a" : "transparent")};
  border-radius: 4px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
`;

const CheckboxText = styled.span`
  font-size: 16px;
  color: #333;
`;

const Checkbox = ({ checked, onChange, text }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked}>
        {checked && <span>✔</span>}
      </StyledCheckbox>
      <CheckboxText>{text}</CheckboxText>
    </CheckboxContainer>
  );
};

export default Checkbox;