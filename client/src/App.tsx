import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import Footer from './components/Footer'
import ApiService from './service'
import Model from './service/model'
import { CheckIcon } from '@heroicons/react/solid'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import Cart from './components/Cart'
import OrderDetail from './components/OrderDetail'
import AddBill from './components/AddBill'
import Layout from './components/Layout'

export interface Bill {
  bill_id: string,
  customer_id: string,
  total_cost: string,
  created_date: number
}

const App = () => {
  const [list, setList] = useState<Bill[]>([])
  const [revenue, setRevenue] = useState<any>(0)
  const [customerList, setCustomerList] = useState<any>([])
  const [open, setOpen] = useState(false)
  const apiService = new ApiService()

  useEffect(() => {
    getAllBill()
    getCustomerList()
  }, [])

  const getAllBill = () => {
    apiService.getBillList().then(
      (res) => {
        const listBillType = Model.transformToBillType(res.data.result)
        setList(listBillType)
      },
    ).catch((err) => {
      console.error(err)
    })
  }

  const getCustomerList = () => {
    apiService.getCustomerList().then(
      (res) => {
        setCustomerList(res.data.result)
      },
    ).catch((err) => {
      console.error(err)
    })
  }

  const addBill = async (billCode: any, customerId: any, totalCost: any) => {
    const result = await apiService.addBill(billCode, customerId, totalCost)

    if (result.data.success !== true) {
      toast.error("Error, press F12 to view the error from the console")
      console.error(result.data.result)
    } else {
      toast.success("Add successfully, reload page to update the table")
    }
  }

  const getRevenue = async (startMonth: any, endMonth: any, year: any) => {
    const result = await apiService.getRevenue(startMonth, endMonth, year)
    if (result.data.success !== true) {
      console.error(result.data.result)
    } else {
      setOpen(true)
      if (result.data.revenue) {
        setRevenue(result.data.revenue)
      } else {
        setRevenue(0)
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <Layout>
        <main className='-mt-24 pb-8'>
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <Cart/>
            <OrderDetail/>
            <AddBill />
          </div>
        </main>
        <Footer />
      </Layout>
      {/*<Transition.Root show={open} as={Fragment}>*/}
      {/*  <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen}>*/}
      {/*    <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>*/}
      {/*      <Transition.Child*/}
      {/*        as={Fragment}*/}
      {/*        enter='ease-out duration-300'*/}
      {/*        enterFrom='opacity-0'*/}
      {/*        enterTo='opacity-100'*/}
      {/*        leave='ease-in duration-200'*/}
      {/*        leaveFrom='opacity-100'*/}
      {/*        leaveTo='opacity-0'*/}
      {/*      >*/}
      {/*        <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />*/}
      {/*      </Transition.Child>*/}

      {/*      /!* This element is to trick the browser into centering the modal contents. *!/*/}
      {/*      <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>*/}
      {/*      &#8203;*/}
      {/*    </span>*/}
      {/*      <Transition.Child*/}
      {/*        as={Fragment}*/}
      {/*        enter='ease-out duration-300'*/}
      {/*        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'*/}
      {/*        enterTo='opacity-100 translate-y-0 sm:scale-100'*/}
      {/*        leave='ease-in duration-200'*/}
      {/*        leaveFrom='opacity-100 translate-y-0 sm:scale-100'*/}
      {/*        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'*/}
      {/*      >*/}
      {/*        <div*/}
      {/*          className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>*/}
      {/*          <div>*/}
      {/*            <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>*/}
      {/*              <CheckIcon className='h-6 w-6 text-green-600' aria-hidden='true' />*/}
      {/*            </div>*/}
      {/*            <div className='mt-3 text-center sm:mt-5'>*/}
      {/*              <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>*/}
      {/*                Get revenue successfully*/}
      {/*              </Dialog.Title>*/}
      {/*              <div className='mt-2'>*/}
      {/*                <p className='text-gray-500'>*/}
      {/*                  Revenue: <span className='font-bold'>{revenue}</span>*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className='mt-5 sm:mt-6'>*/}
      {/*            <button*/}
      {/*              type='button'*/}
      {/*              className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'*/}
      {/*              onClick={() => setOpen(false)}*/}
      {/*            >*/}
      {/*              Go back to dashboard*/}
      {/*            </button>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </Transition.Child>*/}
      {/*    </div>*/}
      {/*  </Dialog>*/}
      {/*</Transition.Root>*/}
    </>
  )
}

export default App