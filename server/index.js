const fs = require('fs');
const path = require('path');
import express from 'express';
import React from 'react'; 
import App from "../src/App.tsx";
import { renderToString } from 'react-dom/server';

const app = express();
const PORT = 9000;

app.use(express.static(path.resolve(__dirname, '../dist/client')));

app.get('*', (req, res) => {
  const appHTML = renderToString(<App />);

  const indexFile = path.resolve(__dirname, '../dist/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Could not read index.html:', err);
      return res.status(500).send('An error occurred');
    }

    // HTMLファイルにレンダリングしたReactコンポーネントを挿入
    const html = data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);

    // クライアントにHTMLを送信
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
