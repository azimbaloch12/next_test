import Header from '@/components/Header'
import React from 'react'

export default function add() {
  return (
    <>
      <Header />

      <div className="max-w-screen-xl ml-72 p-4">
        <form>
          <div className="mb-6">
            <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-300">First Name</label>
            <input type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
          </div>
          <div className="mb-6">
            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-300">Last Name</label>
            <input type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </>
  )
}