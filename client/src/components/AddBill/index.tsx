import React from 'react'

class AddBill extends React.Component<any, any> {
  state = {
    billCode: '',
    customerId: '',
    totalCost: '',
  }

  render () {
    return (
      <>
        <div className='bg-white'>
          <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
            <div>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>Add Bill</h3>
                <p className='mt-1 text-sm text-gray-500'>
                  Please select the customer ID to add bill
                </p>
              </div>
            </div>
            <div className='pt-2'>
              <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-12'>
                  <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                    Bill Code
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      value={this.state.billCode}
                      onChange={(e) => this.setState({
                        billCode: e.target.value,
                      })}
                      id='first-name'
                      autoComplete='given-name'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div className='sm:col-span-12'>
                  <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                    Customer ID
                  </label>
                  <div className='mt-1'>
                    <select
                      id='country'
                      onChange={(e) => {
                        this.setState({
                          customerId: e.target.value,
                        })
                      }}
                      name='country'
                      defaultValue={''}
                      autoComplete='country'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    >
                      <option value='' disabled hidden>Choose here</option>
                    </select>
                  </div>
                </div>

                <div className='sm:col-span-12'>
                  <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                    Total Cost
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      value={this.state.totalCost}
                      onChange={(e) => this.setState({
                        totalCost: e.target.value,
                      })}
                      id='first-name'
                      autoComplete='given-name'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-5'>
              <div className='flex justify-end'>
                <button
                  className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Add Bill
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AddBill