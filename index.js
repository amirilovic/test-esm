import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Title from './title.js';

const html = ReactDOMServer.renderToString(React.createElement(Title, {text: 'Hello ESM!'}));

console.log(html);
