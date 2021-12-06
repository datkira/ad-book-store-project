import axios from 'axios'

class ApiService {
  API_URL: string

  constructor () {
    this.API_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000'
  }

  async getBillList () {
    return await axios.get(`${this.API_URL}/bill_list`)
  }

  async getCustomerList () {
    return await axios.get(`${this.API_URL}/customer_list`)
  }

  async addBill (billCode: any, customerId: any, totalCost: any) {
    return await axios.post(`${this.API_URL}/add_bill`, {
      bill_id: billCode,
      customer_id: customerId,
      total_cost: totalCost,
    })
  }

  async getRevenue (startMonth: any, endMonth: any, year: any) {
    return await axios.get(`${this.API_URL}/revenue`, {
      params: {
        start_month: startMonth,
        end_month: endMonth,
        year: year,
      },
    })
  }
}

export default ApiService