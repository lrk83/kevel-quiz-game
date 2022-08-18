import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
`;

const StyledLabel = styled.label`
  width: 80%;
  padding: 10px;
`;

export interface Option {
  value: string | number | undefined;
  label: string;
}

interface DropDownProps {
  label: string;
  value: string | undefined | number;
  options: Option[];
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}

export const DropDown: React.FC<DropDownProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <StyledLabel>
      {label}
      <StyledSelect value={value} onChange={onChange}>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </StyledLabel>
  );
};
