import moment from 'moment'
import { Bill } from '../App'

class Model {
  static transformToBillType (result: any): Bill[] {
    return result[0].map((item: any) => {
      return {
        bill_id: item.MaHD,
        customer_id: item.MaKH,
        total_cost: item.TongTien,
        created_date: moment(item.NgayLap).format('DD/MM/YYYY'),
      }
    })
  }
}

export default Model