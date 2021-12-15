import React from "react";

const products = [
  {
    id: 1,
    name: 'The Chronicles of Narnia',
    price: '$36.00',
    description: 'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
    address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
    email: 'f•••@example.com',
    phone: '1•••••••••40',
    href: '#',
    status: 'Processing',
    step: 1,
    date: 'March 24, 2021',
    datetime: '2021-03-24',
    imageSrc: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
    imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
  },
  {
    id: 2,
    name: 'The Chronicles of Narnia',
    price: '$36.00',
    description: 'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
    address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
    email: 'f•••@example.com',
    phone: '1•••••••••40',
    href: '#',
    status: 'Processing',
    step: 1,
    date: 'March 24, 2021',
    datetime: '2021-03-24',
    imageSrc: 'https://images.unsplash.com/photo-1531587426902-6ca0653fabf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Queue() {
  return (
    <div className="bg-white bg">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Queue List</h1>

        <div className="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
          <dl className="flex">
            <dt className="text-gray-500">Employee needs to accept to change status</dt>
            <dt>
              <span className="sr-only">Created Date</span>
              <span className="text-gray-400 mx-2" aria-hidden="true">
                &middot;
              </span>
            </dt>
          </dl>
        </div>

        <div className="mt-8">
          <h2 className="sr-only">Products purchased</h2>

          <div className="space-y-24">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8 border-b-2 border-gray-200 pb-5"
              >
                <div className="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden">
                    <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                  </div>
                </div>
                <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="font-medium text-gray-900 mt-1">{product.price}</p>
                  <p className="text-gray-500 mt-3">{product.description}</p>
                </div>
                <div className="sm:col-span-12 md:col-span-7">
                  <dl className="grid grid-cols-1 gap-y-8 border-b py-8 border-gray-200 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                    <div>
                      <dt className="font-medium text-gray-900">Delivery address</dt>
                      <dd className="mt-3 text-gray-500">
                        <span className="block">{product.address[0]}</span>
                        <span className="block">{product.address[1]}</span>
                        <span className="block">{product.address[2]}</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-900">Shipping updates</dt>
                      <dd className="mt-3 text-gray-500 space-y-3">
                        <p>{product.email}</p>
                        <p>{product.phone}</p>
                      </dd>
                    </div>
                  </dl>
                  <p className="font-medium text-gray-900 mt-6 md:mt-10">
                    {product.status} on <time dateTime={product.datetime}>{product.date}</time>
                  </p>
                  <div className="mt-6">
                    <div className="bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-indigo-600 rounded-full"
                        style={{ width: `calc((${product.step} * 2 + 1) / 8 * 100%)` }}
                      />
                    </div>
                    <div className="hidden sm:grid grid-cols-4 font-medium text-gray-600 mt-6">
                      <div className="text-indigo-600">Order placed</div>
                      <div className={classNames(product.step > 0 ? 'text-indigo-600' : '', 'text-center')}>
                        Processing
                      </div>
                      <div className={classNames(product.step > 1 ? 'text-indigo-600' : '', 'text-center')}>
                        Shipped
                      </div>
                      <div className={classNames(product.step > 2 ? 'text-indigo-600' : '', 'text-right')}>
                        Delivered
                      </div>
                    </div>
                    <div className="mt-4">
                      <h2 className="sr-only">Billing Summary</h2>

                      <div className="bg-gray-50 rounded-lg py-6 px-6 lg:px-0 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                        <dl className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:pl-8 lg:col-span-5">
                          <div>
                            <dt className="font-medium text-gray-900">Billing address</dt>
                            <dd className="mt-3 text-gray-500">
                              <span className="block">Floyd Miles</span>
                              <span className="block">7363 Cynthia Pass</span>
                              <span className="block">Toronto, ON N3Y 4H8</span>
                            </dd>
                          </div>
                        </dl>

                        <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:pr-8 lg:col-span-7">
                          <div className="pb-4 flex items-center justify-between">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd className="font-medium text-gray-900">$72</dd>
                          </div>
                          <div className="py-4 flex items-center justify-between">
                            <dt className="text-gray-600">Shipping</dt>
                            <dd className="font-medium text-gray-900">$5</dd>
                          </div>
                          <div className="py-4 flex items-center justify-between">
                            <dt className="text-gray-600">Tax</dt>
                            <dd className="font-medium text-gray-900">$6.16</dd>
                          </div>
                          <div className="pt-4 flex items-center justify-between">
                            <dt className="font-medium text-gray-900">Order total</dt>
                            <dd className="font-medium text-indigo-600">$83.16</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div className={"mt-5 float-right"}>
                      <button className={"bg-blue-500 text-white px-3 py-2 rounded"}>
                        Accept
                      </button>
                      <button className={"ml-4 bg-red-500 text-white px-3 py-2 rounded"}>
                        Deny
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              ))}
          </div>
        </div>

        {/* Billing */}
      </div>
    </div>
  )
}