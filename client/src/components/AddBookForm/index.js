import React, { useEffect, useState } from 'react'
import { Formik, Field } from 'formik'
import ApiService from '../../services'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddBookForm = () => {
  const service = new ApiService()
  const [dependencies, setDependencies] = useState([])
  const history = useHistory()

  useEffect(() => {
    service.getAllDependencies().then(data => {
      console.log('data dependencies', data)
      if (data?.data) {
        setDependencies(data.data)
      } else {
        history.push('/')
      }
    })
  }, [])
  return (
    <>
      <div className='bg-white'>
        <div className='max-w-2xl mx-auto pb-16 pt-10 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='md:col-span-1'>
              <div className='px-4 sm:px-0'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Add book to Shop</h3>
                <p className='mt-1 text-sm text-gray-600'>
                  This feature is for admins only.
                </p>
              </div>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-2'>
              <Formik
                initialValues={
                  {
                    title: '',
                    description: '',
                    price: '',
                    sale_price: '',
                    cover_url: '',
                    stock: '',
                    author: '',
                    category: '',
                    publisher: '',
                    warehouse: '',
                  }
                }
                onSubmit={async (values, { setSubmitting }) => {
                  console.log(values)
                  await service.createBook(values)
                  toast.success('Book added successfully!')
                  setSubmitting(false)
                }}
              >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                  <form onSubmit={handleSubmit}>
                    <div className='shadow sm:rounded-md sm:overflow-hidden'>
                      <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Title
                          </label>
                          <div className='mt-1'>
                            <input type='text'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.title}
                                   name='title'
                                   className={'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'} />
                          </div>
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Description
                          </label>
                          <div className='mt-1'>
                      <textarea
                        id='description'
                        name='description'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        rows={3}
                        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                        defaultValue={''}
                      />
                          </div>
                          <p className='mt-2 text-sm text-gray-500'>
                            Brief description for your profile. URLs are hyperlinked.
                          </p>
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            URL Cover
                          </label>
                          <div className='mt-1'>
                            <input type='text'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.cover_url}
                                   name='cover_url'
                                   className={'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'} />
                          </div>
                          <p className='mt-2 text-sm text-gray-500'>
                            Cover URL for the image.
                          </p>
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Price (VND)
                          </label>
                          <div className='mt-1'>
                            <input type='number'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.price}
                                   name={'price'}
                                   className={'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'} />
                          </div>
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Sale Price (VND)
                          </label>
                          <div className='mt-1'>
                            <input type='number'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.sale_price}
                                   name={'sale_price'}
                                   className={'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'} />
                          </div>
                        </div>
                        <div>
                          <div>
                            <label className='block text-sm font-medium text-gray-700'>
                              Author
                            </label>
                            <div className='mt-1'>
                              <Field as='select' name='author'
                                     className={'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'}>
                                >
                                {
                                  dependencies?.authors?.map(author => (
                                    <option key={author.AUTHOR_ID} value={author.AUTHOR_ID}>{author.A_NAME}</option>
                                  ))
                                }
                              </Field>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <label className='block text-sm font-medium text-gray-700'>
                              Category
                            </label>
                            <div className='mt-1'>
                              <Field as='select' name='category'
                                     className={'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'}>
                                >
                                {
                                  dependencies?.categories?.map(category => (
                                    <option key={category.CATEGORY_ID}
                                            value={category.CATEGORY_ID}>{category.C_DESCRIPTION}</option>
                                  ))
                                }
                              </Field>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <label className='block text-sm font-medium text-gray-700'>
                              Warehouse
                            </label>
                            <div className='mt-1'>
                              <Field as='select' name='warehouse'
                                     className={'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'}>
                                >
                                {
                                  dependencies?.ware_houses?.map(ware_house => (
                                    <option key={ware_house.WAREHOUSE_ID}
                                            value={ware_house.WAREHOUSE_ID}>{ware_house.W_NAME}</option>
                                  ))
                                }
                              </Field>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <label className='block text-sm font-medium text-gray-700'>
                              Publisher
                            </label>
                            <div className='mt-1'>
                              <Field as='select' name='publisher'
                                     className={'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'}>
                                >
                                {
                                  dependencies?.publishers?.map(publisher => (
                                    <option key={publisher.PUBLISHER_ID}
                                            value={publisher.PUBLISHER_ID}>{publisher.P_NAME}</option>
                                  ))
                                }
                              </Field>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <label className='block text-sm font-medium text-gray-700'>
                              Stock
                            </label>
                            <div className='mt-1'>
                              <input type='number'
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.stock}
                                     name={'stock'}
                                     className={'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'} />
                            </div>
                          </div>
                        </div>
                        <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                          <button
                            type='submit'
                            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          >
                            Create Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>)}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBookForm