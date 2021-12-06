import { CalendarIcon, CashIcon } from '@heroicons/react/solid'
import { Bill } from '../../App'

const BillList = (props: any) => {
  const list: Bill[] = props.list
  return (
    list ? <div className='bg-white h-screen overflow-scroll shadow sm:rounded-md'>
      <ul role='list' className='divide-y divide-gray-200'>
        {list.map((position) => (
          <li key={position.bill_id}>
            <a href='#' className='block hover:bg-gray-50'>
              <div className='px-4 py-4 sm:px-6'>
                <div className='flex items-center justify-between'>
                  <p className='text-sm font-medium text-indigo-600 truncate'>{position.bill_id}</p>
                  <div className='ml-2 flex-shrink-0 flex'>
                    <p
                      className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      {position.customer_id}
                    </p>
                  </div>
                </div>
                <div className='mt-2 sm:flex sm:justify-between'>
                  <div className='sm:flex'>
                    <p className='flex items-center text-sm text-gray-500'>
                      <CashIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
                      {position.total_cost}
                    </p>
                  </div>
                  <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                    <CalendarIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
                    <p>
                      Created on {position.created_date}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div> : <div>Loading</div>
  )
}

export default BillList