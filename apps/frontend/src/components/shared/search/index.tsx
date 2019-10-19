import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {lighten} from 'polished';
import FeatherIcon from 'feather-icons-react';

const Container = styled.div`
    flex: 1;
    position: relative;
`;

const SearchBar = styled.input`
    padding: ${(props) => props.theme.spacing(0.5)};
    background-color: ${(props) => props.theme.colors.topbar.background}
    border: none;
    padding: ${(props) => props.theme.spacing(1.5)}
    color: #222;
    text-indent: ${(props) => props.theme.spacing(1.5)};
    display: flex;
    flex: 1;

    &:focus {
        background-color: ${(props) =>
            lighten(0.05, props.theme.colors.topbar.background)}
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

const SearchIcon = styled.span`
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    left: 7px;
    color: ${(props) => props.theme.colors.aside.text};
`;
export default () => {
    const {t} = useTranslation();

    return (
        <Container>
            <SearchIcon>
                <FeatherIcon icon="search" size={16} />
            </SearchIcon>
            <SearchBar type="text" placeholder={t('searchBar.placeholder')} />
        </Container>
    );
};
