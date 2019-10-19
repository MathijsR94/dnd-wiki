import React, {useState} from 'react';
import Main from '../main';
import CharacterSidebarLeft from './sidebarLeft';
import CharacterSidebarRight from './sidebarRight';
import ContentEditor from '../contentEditor';

export default () => {
    const [editMode, setEditMode] = useState(false);
    const body = localStorage.getItem('contentState');
    return (
        <Main
            sidebarLeft={<CharacterSidebarLeft />}
            sidebarRight={<CharacterSidebarRight />}
        >
            <button onClick={() => setEditMode(!editMode)}>Edit</button>
            <ContentEditor
                body={body ? JSON.parse(body) : null}
                editMode={editMode}
            />
        </Main>
    );
};
