import React, {ReactElement} from 'react';
import styled from 'styled-components';

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
`;

const Row = styled.div`
    margin-bottom: ${(props) => props.theme.spacing(1)};
`;

const Column = styled.div`
    display: inline-flex;
`;
export default ({rows}: Props) => (
    <Table>
        {rows.map((row) => (
            <Row>
                <Column>{row.label}</Column>
                <Column>{row.content}</Column>
            </Row>
        ))}
    </Table>
);
