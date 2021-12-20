import React from "react";
import ApiService from "../../services";
import StoreList from "../StoreList";

const Search = () => {
  const service = new ApiService();
  const [searchString, setSearchString] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const search = async (e) => {
    console.log(searchString);
    e.preventDefault();
    const response = await service.searchBook(searchString);
    setSearchResults(response.recordset);
  };
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pb-16 pt-10 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Search book</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Search book with name (ex: Harry Potter)
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Book name
                      </label>
                      <div className="mt-1">
                        <input type="text"
                               id="search-input"
                               value={searchString}
                               onChange={(e) => setSearchString(e.target.value)}
                               className={"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"} />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      onClick={search}
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {
        searchResults.length > 0 &&
        <div className="bg-white">
          <div className="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Search Result</h2>
            <StoreList books={searchResults} />
          </div>
        </div>}
    </>
  );
};

export default Search;