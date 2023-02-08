/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import router from './app/routers/router';
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/v1', router);

app.use((req, res) => {
  console.log("asd")
})

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
