import { Popover } from "@headlessui/react";
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiService from "../../services";

export default function Header() {
  const [categories, setCategories] = useState([])
  const service = new ApiService()
  const history = useHistory()

  useEffect(() => {
    service.getAllCategories().then(data => {
      if (data.length > 0) {
        console.log(data)
        setCategories(data)
      } else {
        history.push('/')
      }
    })
  }, [])
  return (
    <div className="bg-white">
      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="h-16 flex items-center justify-between">
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <Link to={"/"}>
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto"
                           src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" />
                    </Link>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="px-4 bottom-0 inset-x-0">
                      <div className="h-full flex justify-center space-x-8">
                        {categories.map(category => (
                          <Link to={"/category/" + category.CATEGORY_ID}
                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {category.TITLE}
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex-1 flex items-center lg:hidden">
                    <button type="button" className="-ml-2 bg-white p-2 rounded-md text-gray-400">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <Link to={"/search"}>
                      <a className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Search</span>
                        <SearchIcon className="w-6 h-6" aria-hidden="true" />
                      </a>
                    </Link>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    <img src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt=""
                         className="h-8 w-auto" />
                  </a>

                  <div className="flex-1 flex items-center justify-end">
                    <Link to={"/queue"}>
                      <a className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        Queue
                      </a>
                    </Link>
                    <Link to={"/add-book"}>
                      <a className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block lg:ml-8">
                        Add book
                      </a>
                    </Link>
                    <Link to={"/search"}>
                      <a className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block lg:ml-8">
                        Search
                      </a>
                    </Link>

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      <a className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                        <span className="sr-only">Help</span>
                        <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
                      </a>
                      <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        Help
                      </a>

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <Link to={"/cart"}>
                          <a className="group -m-2 p-2 flex items-center">
                            <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                             aria-hidden="true" />
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                            <span className="sr-only">items in cart, view bag</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
