import { db } from './router.js'
import shortid from 'shortid'

const NO_ITEM_MSG = 'no item in corresponding to sending id'

function getObj(arr, id) {
  return arr.find((p) => String(p.id) === id)
}

export async function getArrayResponse(req, res, next, arr) {
  res.json(arr)
}

export async function getResponse(req, res, next, arr) {
  const obj = getObj(arr, req.params.id)
  if (obj) {
    res.json(obj)
  } else {
    res.send(NO_ITEM_MSG)
  }
}

export async function putResponse(req, res, next, arr) {
  const obj = getObj(arr, req.params.id)
  if (obj) {
    for (let prop in req.body) {
      obj[prop] = req.body[prop]
    }
    db.write()
    res.json(obj)
  } else {
    res.send(NO_ITEM_MSG)
  }
}

export async function deleteResponse(req, res, next, arr) {
  const obj = getObj(arr, req.params.id)
  if (obj) {
    const idx = arr.indexOf(obj)
    arr.splice(idx, 1)
    db.write()
    res.send(`item with id ${req.params.issueid} has been deleted`)
  } else {
    res.send(NO_ITEM_MSG)
  }
}

export async function postResponse(req, res, next, arr) {
  const obj = { 
    id: shortid.generate(),
    ...req.body, 
  }
  arr.push(obj)
  db.write()
  res.json(obj)
}
