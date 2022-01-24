import express from 'express'
import { Low, JSONFile } from 'lowdb'

const app = express()
app.use(express.json())

const adapter = new JSONFile('db.json')
const db = new Low(adapter)
await db.read()
// db.data ||= { posts: [] }

const { posts } = db.data

app.get('/posts/:id', async (req, res) => {
  const post = posts.find((p) => String(p.id) === req.params.id)
  res.send(post)
})

app.post('/posts', async (req, res, next) => {
  const post = posts.push(req.body).toString()
  await db.write()
  res.send(post)
})

app.listen(3001, () => {
  console.log('listening on port 3001')
})