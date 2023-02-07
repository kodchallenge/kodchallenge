/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors'
import bodyParser from 'body-parser'
import { getAllProblems } from './app/db/problem.db';
import { getCategories } from './app/db/category.db';
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get("/api/problems", async (req, res) => {
  res.json(await getAllProblems())
})

app.get("/api/categories", async (req, res) => {
  res.json(await getCategories())
})


const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
