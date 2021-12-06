const sql = require('mssql')
const moment = require('moment')

class Database {
  connectDB = async () => {
    try {
      await sql.connect({
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        server: process.env.DATABASE_SERVER,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        },
        options: {
          encrypt: false, // for azure, set to true
          trustServerCertificate: false, // change to true for local dev / self-signed certs
        },
      })

      console.log('Database connected')
    } catch (err) {
      throw new Error(err)
    }
  }

  getListCustomers = async () => {
    try {
      const result = await sql.query`select MakH from KhachHang`
      return result.recordset
    } catch (err) {
      throw new Error(err)
    }
  }

  getBill = async () => {
    return sql.query`select * from HOADON order by NgayLap desc`
  }

  addBill = async (BillId, CustomerId, TolCost) => {
    console.log(BillId, CustomerId, TolCost)
    return sql.query`insert into HoaDon values (${BillId}, ${CustomerId}, ${moment().format('YYYY-MM-DD')}, ${TolCost})`
  }

  getRevenue = async (startMonth, endMonth, year) => {
    return sql.query`select SUM(TongTien) as revenue from HoaDon where month(NgayLap) >= ${startMonth} and month(NgayLap) <= ${endMonth} and year(NgayLap) = ${year}`
  }
}

module.exports = Database