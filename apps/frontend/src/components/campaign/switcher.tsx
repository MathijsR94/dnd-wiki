import React, {ReactText} from 'react';
import Select from '../shared/select';

const options = [
    {
        label: "Orcus's Dragon",
        value: '40c97483-8c68-4263-8040-2f78f366434f',
    },
    {
        label: 'The Crown of Bahamut',
        value: '961ad25c-80e0-48b1-94bb-c5a9068b4213',
    },
];

export default () => {
    function handleOnChange(value: ReactText) {
        localStorage.setItem('campaign', JSON.stringify(value));
    }

    return (
        <Select
            options={options}
            selected={options[1].value}
            onChange={handleOnChange}
        />
    );
};
