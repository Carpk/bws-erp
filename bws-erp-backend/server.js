import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Orders from './orders-model.js'
import Tasks from './tasks-model.js'
import { faker } from '@faker-js/faker';

//App Config
const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://shawnklein202:hvZAMlKPGz5PihTt@cluster0.kgv0lbb.mongodb.net/?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
// app.use(Cors())

//DB Config
mongoose.connect(connection_url, {})


// function random_item(items) {return items[Math.floor(Math.random()*items.length)];}
function fakeDates(start, end) {
  return faker.date.between({from:'2023-'+start+'T00:00:00.000Z',to:'2023-'+end+'T00:00:00.000Z'});
}

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Testing ERP..."))

app.post('/orders/create', async (req, res) => {
  const randStat = Math.floor(Math.random()*5)
  const status = ["requested", "on hold", "ordered", "delayed", "recieved"]

  const dbOrder = [
    { "item": faker.commerce.productName(),
      "name": faker.person.firstName(),
      "quantity": faker.number.int(7) + 1,
      "project": faker.company.buzzNoun(),
      "link": faker.internet.url(),
      "date": fakeDates('02-01', '02-18'),
      "status": status[randStat],
      "ordered": randStat > 1 ? fakeDates('02-19', '03-01') : null,
      "recieved": randStat > 3 ? fakeDates('03-02', '03-10') : null
    }
  ]

  Orders.create(dbOrder).then((data) => {
    res.status(201).send(data)
  }).catch( err => {
    res.status(500).send(err)
  })
})

app.get('/orders/all', async (req, res) => {
  Orders.find().then((data) => {
    res.status(200).send(data)
  }).catch(err => {
    res.status(500).send(err)
  })
})

app.post('/tasks/create', async (req, res) => {
  const start = faker.number.int(7)

  const dbTask = [{
    "name": faker.commerce.productName(),
    "date": fakeDates('02-01', '02-18'),
    "date": fakeDates('02-01', '02-18')
  }]

  Tasks.create(dbTask).then((data) => {
    res.status(201).send(data)
  }).catch( err => {
    res.status(500).send(err)
  })
})

app.get('/tasks/all', async (req, res) => {
  Tasks.find().then((data) => {
    res.status(200).send(data)
  }).catch(err => {
    res.status(500).send(err)
  })
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))