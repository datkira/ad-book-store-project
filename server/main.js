const express = require('express')
const app = express()
const dotenv = require('dotenv')
const Database = require('./config/db')
const db = new Database()
const cors = require('cors')
const port = process.env.APP_PORT || 5000
const bodyParser = require('body-parser')

dotenv.config({ path: './config/config.env' })
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// enable cors
app.use(cors())

async function bootstrap () {

  await db.connectDB()

  app.get('/bill_list', async (req, res) => {
    try {
      const result = await db.getBill()

      res.json({
        result: result.recordsets,
        message: 'Success',
      })
    } catch (e) {
      res.json({
        result: e.message,
        message: 'Error',
      })
      throw new Error(e)
    }
  })

  app.get('/customer_list', async (req, res) => {
    try {
      const result = await db.getListCustomers()

      res.json({
        result: result,
        message: 'Success',
      })
    } catch (e) {
      res.json({
        result: e.message,
        message: 'Error',
      })
      throw new Error(e)
    }
  })

  app.get('/revenue', async (req, res) => {
    try {
      const params = req.query
      console.log(params)
      const result = await db.getRevenue(params.start_month, params.end_month, params.year)

      res.json({
        revenue: result.recordsets[0][0].revenue,
        success: true,
      })
    } catch (e) {
      res.json({
        message: e.message,
        success: false,
      })
      throw new Error(e)
    }
  })

  app.post('/add_bill', async (req, res) => {
    try {
      const params = req.body
      const result = await db.addBill(params.bill_id, params.customer_id, params.total_cost)

      res.json({
        result: result,
        success: true,
      })
    } catch (e) {
      res.json({
        result: e.message,
        message: 'Error',
        success: false,
      })
      throw new Error(e)
    }
  })

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
}

bootstrap()