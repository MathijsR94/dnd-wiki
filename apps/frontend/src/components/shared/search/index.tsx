import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
    width: 100%;
`;

const SearchBar = styled.input`
    width: 100%;
    padding: ${(props) => props.theme.spacing(0.5)};
    background-color: ${(props) => props.theme.colors.searchBar.background}
    border: none;
    padding: ${(props) => props.theme.spacing(1.5)}
    color: #fff;

    ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: ${(props) => props.theme.colors.searchBar.placeholder};
    }
    ::-moz-placeholder {
        /* Firefox 19+ */
        color: ${(props) => props.theme.colors.searchBar.placeholder};
    }
    :-ms-input-placeholder {
        /* IE 10+ */
        color: ${(props) => props.theme.colors.searchBar.placeholder};
    }
    :-moz-placeholder {
        /* Firefox 18- */
        color: ${(props) => props.theme.colors.searchBar.placeholder};
    }
`;

export default () => {
    const {t} = useTranslation();

    return (
        <Container>
            <SearchBar type="text" placeholder={t('searchBar.placeholder')} />
        </Container>
    );
};
