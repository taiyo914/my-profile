import express from 'express';
import React from 'react'; 
import App from "../src/App.tsx";
import { renderToString } from 'react-dom/server';

const app = express();
const PORT = 9000;

app.use('/', (request, response) => {
  const html = renderToString(<App />);
  response.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
