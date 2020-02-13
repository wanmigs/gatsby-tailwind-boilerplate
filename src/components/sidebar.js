import React from "react"
import Pages from './Pages'

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 overflow-auto">
      <div className="bg-gray-300 border-b-2 border-gray-300 flex items-center px-8 py-3">
        <span className="font-bold text-lg">Flig</span>
        <span className="text-lg">Book</span>
      </div>

      <nav className="px-8 py-4">
        <Pages />
      </nav>
    </div>
  )
}

export default Sidebar
