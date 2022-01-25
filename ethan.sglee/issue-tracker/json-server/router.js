import { Low, JSONFile } from 'lowdb'
import express from 'express'

import { getResponse, getArrayResponse, putResponse, deleteResponse, postResponse } from './util.js'

export const router = express.Router();

const adapter = new JSONFile('db.json')
export const db = new Low(adapter)
await db.read()
// db.data ||= { posts: [] }

const issues = db.data.issues
const labels = db.data.labels
const milestones = db.data.milestones

router.route('/issues/:id')
.all(async function (req, res, next) {
  next()
  })
  .get(async function (req, res, next) {
    getResponse(req, res, next, issues)
  })
  .put(async function (req, res, next) {
    putResponse(req, res, next, issues)
  })
  .delete(async function (req, res, next) {
    deleteResponse(req, res, next, issues)
  })

router.route('/issues')
  .all(async function (req, res, next) {
    next()
  })
  .get(async function (req, res, next) {
    getArrayResponse(req, res, next, issues)
  })
  .post(async function (req, res, next) {
    postResponse(req, res, next, issues)
  })

router.route('/labels/:id')
.all(async function (req, res, next) {
  next()
  })
  .get(async function (req, res, next) {
    getResponse(req, res, next, labels)
  })
  .put(async function (req, res, next) {
    putResponse(req, res, next, labels)
  })
  .delete(async function (req, res, next) {
    deleteResponse(req, res, next, labels)
  })

router.route('/labels')
  .all(async function (req, res, next) {
    next()
  })
  .get(async function (req, res, next) {
    getArrayResponse(req, res, next, labels)
  })
  .post(async function (req, res, next) {
    postResponse(req, res, next, labels)
  })

router.route('/milestones/:id')
.all(async function (req, res, next) {
  next()
  })
  .get(async function (req, res, next) {
    getResponse(req, res, next, milestones)
  })
  .put(async function (req, res, next) {
    putResponse(req, res, next, milestones)
  })
  .delete(async function (req, res, next) {
    deleteResponse(req, res, next, milestones)
  })

router.route('/milestones')
  .all(async function (req, res, next) {
    next()
  })
  .get(async function (req, res, next) {
    getArrayResponse(req, res, next, milestones)
  })
  .post(async function (req, res, next) {
    postResponse(req, res, next, milestones)
  })