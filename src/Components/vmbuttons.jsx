import React from 'react'

const Vmbutton = () => {
  return (
                <div class="flex rounded-md shadow-sm mt-2" role="group">
                  <button type="button" class="px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-sm hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    Run
                  </button>
                  <button type="button" class="px-2 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    Redeploy
                  </button>
                  <button type="button" class="px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-sm hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    Stop
                  </button>
                </div>
  )
}

export default Vmbutton