import express from 'express'
import { router } from './router.js'

const app = express()
app.use(express.json())

// app.get('/posts/:id', async (req, res) => {
//   const post = posts.find((p) => String(p.id) === req.params.id)
//   res.send(post)
// })

// app.post('/posts', async (req, res, next) => {
//   const post = posts.push(req.body).toString()
//   await db.write()
//   res.send(post)
// })

app.use('/', router)

const port = 3001
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})