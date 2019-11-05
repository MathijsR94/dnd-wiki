import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

type Row = {
    label: string;
    content: string | ReactElement;
};
type Props = {
    rows: Array<Row>;
};

const Table = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-flow: row wrap;
    font-size: 0.875em;
    box-sizing: border-box;
    padding: ${(props) => props.theme.spacing(1)};
`;

const Row = styled.div`
    width: 100%;
    margin-bottom: ${(props) => props.theme.spacing(0.5)};
`;

const Column = styled.div`
    display: inline-flex;
    width: 55%;
    padding: ${(props) => props.theme.spacing([0.5, 1])};
    box-sizing: border-box;
    word-break: break-word;

    &:first-of-type {
        font-weight: 600;
        width: 45%;
        color: ${(props) => props.theme.colors.aside.heading};
    }
`;

export default ({rows}: Props) => {
    const {t} = useTranslation();

    return (
        <Table>
            {rows.map((row) => (
                <Row key={row.label}>
                    <Column>
                        <span>{t(row.label)}</span>
                    </Column>
                    <Column>
                        <span>{row.content}</span>
                    </Column>
                </Row>
            ))}
        </Table>
    );
};
