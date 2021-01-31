import express from 'express'
import bodyParser from 'body-parser'
import { songSearch } from './songs/songSearch';

const app = express()

app.use(bodyParser.json())
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/:text?', (req, res) => {
  try {
    if (!req.params.text) throw new Error('unregular or empty param');
    return res.status(200).json(songSearch(req.params.text));
  } catch (e) {
    return res.status(400).end();
  }
});

export default app
