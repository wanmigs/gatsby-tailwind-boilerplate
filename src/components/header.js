import React from "react"

const Header = () => {
  return (
    <header className="bg-white border-b-2 flex px-6 py-3">
      <div className={`flex items-center justify-center`}>
        <div className="relative w-64">
          <span className="absolute flex inset-y-0 items-center left-0 pl-2 text-gray-600 ">
            <i className="fa fa-search"></i>
          </span>
          <input
            className="block w-full rounded-lg border border-gray-400 outline-none pl-10 pr-4 py-1 text-gray-900"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
