import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'The Chronicles of Narnia',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20.000 VND',
    category: 'Comic',
  },
  {
    id: 1,
    name: 'The Chronicles of Narnia',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20.000 VND',
    category: 'Comic',
  },
  {
    id: 1,
    name: 'The Chronicles of Narnia',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20.000 VND',
    category: 'Comic',
  },
  {
    id: 1,
    name: 'The Chronicles of Narnia',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20.000 VND',
    category: 'Comic',
  },
  {
    id: 1,
    name: 'The Chronicles of Narnia',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20.000 VND',
    category: 'Comic',
  },
  {
    id: 1,
    name: 'The Chronicles of Narnia',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20.000 VND',
    category: 'Comic',
  },
  {
    id: 1,
    name: 'The Chronicles of Narnia',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20.000 VND',
    category: 'Comic',
  },
  {
    id: 1,
    name: 'The Chronicles of Narnia',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20.000 VND',
    category: 'Comic',
  },
]

export default function StoreList({books}) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 pt-10 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">New Books</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {books.map((book) => (
            <div key={book.BOOK_ID} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={book.COVER_URL}
                  alt={book.B_NAME}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={"/book/" + book.BOOK_ID}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {book.B_NAME}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Demo Category</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{book.B_PRICE}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}