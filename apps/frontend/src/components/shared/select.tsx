import React, {useState, ReactText} from 'react';
import styled, {FlattenInterpolation, ThemeProps} from 'styled-components';

const Select = styled.select`
    width: 100%;
    height: 35px;
    background: ${(props) => props.theme.colors.select.background};
    padding-left: 5px;
    font-size: 0.875em;
    border: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    color: ${(props) => props.theme.colors.select.text};

    option {
        color: ${(props) => props.theme.colors.select.text};
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

export type Option = {
    label: string;
    value: ReactText;
};

type Props = {
    options?: Array<Option>;
    selected?: Option['value'];
    onChange: (value: ReactText) => void;
};

export default ({options = [], selected = -1, onChange}: Props) => {
    const [selectedOption, setSelectedOption] = useState(selected);

    function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setSelectedOption(value);
        if (onChange) {
            onChange(value);
        }
    }

    return (
        <Select onChange={handleOnChange} value={selectedOption}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    );
};
