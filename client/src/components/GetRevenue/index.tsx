import React from 'react'
import moment from 'moment'

class GetRevenue extends React.Component<any, any> {
  state = {
    startMonth: '',
    endMonth: '',
    year: '',
  }

  render () {
    const { customerList, getRevenue } = this.props

    return (
      <>
        <div className='space-y-8 divide-y divide-gray-200'>
          <div>
            <div>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>Get Revenue</h3>
            </div>
          </div>
          <div className='pt-2'>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-12'>
                <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                  From Month
                </label>
                <div className='mt-1'>
                  <select
                    id='country'
                    onChange={(e) => {
                      this.setState({
                        startMonth: e.target.value,
                      })
                    }}
                    name='country'
                    defaultValue={''}
                    autoComplete='country'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  >
                    <option value='' disabled hidden>Choose here</option>
                    {Array.from(Array(12).keys()).map((month: any) => (
                      <option key={month + 1} value={month + 1}>
                        {month + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='sm:col-span-12'>
                <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                  To Month
                </label>
                <div className='mt-1'>
                  <select
                    id='country'
                    onChange={(e) => {
                      this.setState({
                        endMonth: e.target.value,
                      })
                    }}
                    name='country'
                    defaultValue={''}
                    autoComplete='country'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  >
                    <option value='' disabled hidden>Choose here</option>
                    {Array.from(Array(12).keys()).map((month: any) => (
                      <option key={month + 1} value={month + 1}>
                        {month + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='sm:col-span-12'>
                <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                  Year
                </label>
                <div className='mt-1'>
                  <select
                    id='country'
                    onChange={(e) => {
                      this.setState({
                        year: e.target.value,
                      })
                    }}
                    name='country'
                    defaultValue={''}
                    autoComplete='country'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  >
                    <option value='' disabled hidden>Choose here</option>
                    {Array.from(Array(20).keys()).map((month: any) => (
                      <option key={moment().year() - month} value={moment().year() - month}>
                        {moment().year() - month}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-5'>
          <div className='flex justify-end'>
            <button
              onClick={() => {
                getRevenue(this.state.startMonth, this.state.endMonth, this.state.year)
              }}
              className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Get Revenue
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default GetRevenue