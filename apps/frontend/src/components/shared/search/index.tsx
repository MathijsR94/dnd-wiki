import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const SearchBar = styled.input`
    width: 100%;
    padding: ${(props) => props.theme.spacing(0.5)};
    background-color: ${(props) => props.theme.colors.searchBar.background}
    border: none;
    padding: ${(props) => props.theme.spacing(1)}
    color: ${(props) => props.theme.colors.searchBar.text};
    margin-left: 1em;
    border-bottom: 2px solid transparent;
    margin: ${(props) => props.theme.spacing([1, 0, 1, 1])};

    &:focus {
        outline: none;
        border-bottom: 2px solid ${(props) => props.theme.colors.link};
    }
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

const Label = styled.label`
    font-size: 0.875em;
    color: ${(props) => props.theme.colors.main.text};
`

export default () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Label htmlFor="topbar-search">{t('searchBar.label')}</Label>
            <SearchBar type="text" id="topbar-search" placeholder={t('searchBar.placeholder')} />
        </Container>
    );
};
