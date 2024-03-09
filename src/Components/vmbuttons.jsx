import React from 'react'

const Vmbutton = ({btnData}) => {
  const startInstances = 'http://localhost:4000/startInstance/'
  console.log("asdasd", btnData)

  return (
                <div class="flex rounded-xl shadow-sm mt-2" role="group">
                  <button 
                  type="button" 
                  class="px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg"
                  onClick={()=>{fetch(startInstances, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ID: btnData})
                    })}}>
                    Run
                  </button>
                  <button type="button" class="px-2 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200">
                    Redeploy
                  </button>
                  <button type="button" class="px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-1005">
                    Stop
                  </button>
                </div>
  )
}

export default Vmbutton