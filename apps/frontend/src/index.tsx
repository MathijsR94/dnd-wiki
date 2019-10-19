import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

if (process.env.NODE_ENV !== 'production') {
    import('react-axe').then((axe) => {
        axe.default(React, ReactDOM, 1000);
    });
}

ReactDOM.render(<App />, document.getElementById('root'));
