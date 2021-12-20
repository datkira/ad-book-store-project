import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { HeartIcon } from '@heroicons/react/outline'
import { useHistory, useParams } from 'react-router-dom'
import ApiService from '../../services'

export default function BookDetail() {
  const [bookDetail, setBookDetail] = useState([])
  const service = new ApiService()
  const params = useParams()
  const history = useHistory()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    service.getBook(params.id).then(data => {
      if (data?.recordset.length > 0) {
        setBookDetail(data.recordset[0])
      } else {
        history.push('/')
      }
    })
  }, [])
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
          {/* Image gallery */}
          <Tab.Group as='div' className='flex flex-col-reverse'>
            <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
              <img
                src={bookDetail.COVER_URL}
                alt={bookDetail.COVER_URL}
                className='w-full h-full object-center object-cover sm:rounded-lg'
              />
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className='mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0'>
            <h1 className='text-3xl font-extrabold tracking-tight text-blue-800'>{bookDetail.B_NAME}</h1>

            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
              <p className='text-3xl text-gray-900'>{bookDetail.PRICE} VND</p>
            </div>

            <div className='mt-6'>
              <h3 className='sr-only'>Description</h3>

              <div className='text-base text-gray-700 space-y-6' dangerouslySetInnerHTML={{ __html: bookDetail.B_DESCRIPTION }} />
            </div>

            <form className='mt-6'>
              <div className={'mb-2'}>
                <label className='block text-base font-medium text-gray-900'>Category Name: <span className={"text-gray-500"}>{bookDetail.CATEGORY_NAME}</span></label>
              </div>
              <div className={'mb-2'}>
                <label className='block text-base font-medium text-gray-900'>Author: <span className={"text-gray-500"}>{bookDetail.AUTHOR_NAME}</span></label>
              </div>
              <div className={'mb-2'}>
                <label className='block text-base font-medium text-gray-900'>Total Sold Book: <span className={"text-gray-500"}>{bookDetail.TOTAL_SOLD_BOOK}</span></label>
              </div>
              <div>
                <label className='block text-base font-medium text-gray-700'>Quantity</label>
                <div className='mt-1'>
                  {bookDetail.STOCK === 0 ? (
                    <div className={'text-red-400'}>Out of stock</div>
                  ) : (
                    <div>
                      <input
                        type='number'
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        min={bookDetail.STOCK > 0 ? 1 : 0}
                        max={bookDetail.STOCK}
                        className={
                          'my-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-300 rounded-md'
                        }
                      />
                      <div className={'text-green-400 my-2'}>{bookDetail.STOCK} books available to buy</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='mt-10 flex sm:flex-col1'>
                <button
                  type='submit'
                  className='max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full'
                >
                  Add to Cart
                </button>

                <button
                  type='button'
                  className='ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500'
                >
                  <HeartIcon className='h-6 w-6 flex-shrink-0' aria-hidden='true' />
                  <span className='sr-only'>Add to favorites</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
