import { Popover } from "@headlessui/react";
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = {
  pages: [
    { name: "Comic", href: "#" },
    { name: "Roman", href: "#" },
    { name: "Horror", href: "#" },
    { name: "Action and Adventure", href: "#" }
  ]
};

export default function Header() {
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
                        {navigation.pages.map(page => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
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
                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    <img src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt=""
                         className="h-8 w-auto" />
                  </a>

                  <div className="flex-1 flex items-center justify-end">
                    <Link to={"/add-book"}>
                      <a className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        Add book
                      </a>
                    </Link>
                    <a href="#"
                       className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block lg:ml-8">
                      Search
                    </a>

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
