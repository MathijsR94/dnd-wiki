import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;

    figure {
        margin: 0;
    }

    figcaption {
        text-align: center;
        font-size: 0.875em;
        padding: ${(props) => props.theme.spacing(1, 4)};
        position: relative;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            height: 1px;
            width: calc(100% - ${(props) => props.theme.spacing(4)});
            background-color: ${(props) => props.theme.colors.separator};
            left: 50%;
            transform: translateX(-50%);
        }
    }

    img {
        max-width: 100%;
    }
`;

type Props = {
    imageSrc?: string;
    characterName?: string;
};

export default ({imageSrc = '', characterName = ''}: Props) => (
    <Container>
        {imageSrc ? (
            <figure>
                <img src={imageSrc} alt={characterName} />
                <figcaption>{characterName}</figcaption>
            </figure>
        ) : null}
    </Container>
);
