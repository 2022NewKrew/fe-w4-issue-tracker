import { Low, JSONFile } from 'lowdb'
import express from 'express'

export const router = express.Router();

const adapter = new JSONFile('db.json')
const db = new Low(adapter)
await db.read()
// db.data ||= { posts: [] }

const issues = db.data

router.route('/issues/:issue-id')
  .all(function (req, res, next) {
    next()
  })
  .get(function (req, res, next) {
    res.json(req.title)
  })
  .put(function (req, res, next) {
    // just an example of maybe updating the user
    const issue = 
    req.issues.find() = req.params.title
    // save user ... etc
    res.json(req.user)
  })
  .delete(function (req, res, next) {
    next(new Error('not implemented'))
  })

router.route('/issues')
  .all(function (req, res, next) {
    res.send('checked')
  })

// module.exports = router