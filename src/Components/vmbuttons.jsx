import React from 'react'
import Warning from './infonotification'

const Vmbutton = ({btnData, notificator}) => {
  const startInstances = 'http://localhost:4000/startInstance/'
  const rebootInstances = 'http://localhost:4000/rebootInstance/'
  const stopInstances = 'http://localhost:4000/stopInstance/'
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
                    })
                    notificator({context: 'Starting Instance'})
                  }
                    }>
                    Run
                  </button>

                  <button 
                  type="button" 
                  class="px-2 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200"
                  onClick={()=>{fetch(rebootInstances, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ID: btnData})
                    });
                    notificator({context: 'Rebooting Instance'})
                  }
                }
                  >
                    Redeploy
                  </button>
                  <button 
                  type="button" 
                  class="px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-1005"
                  onClick={()=>{fetch(stopInstances, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ID: btnData})
                    })
                    notificator({context: 'Stopping Instance'})
                  }}
                  >
                    Stop
                  </button>
                </div>
  )
}

export default Vmbutton