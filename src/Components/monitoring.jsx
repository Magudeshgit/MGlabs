import React, { useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts';

const Monitoring = () => {
    const cpugraphref = useRef(null)
    const memgraphref = useRef(null)
    var status = true;

    useEffect(()=>{
      if (status===true)
      {
        new ApexCharts(cpugraphref.current, options).render();
        new ApexCharts(memgraphref.current, options).render();
        status=false
      }
    },[])
    function graphcolor(){
      const clrarray = ['#1C64F2', '#978FED', '#56EA91','#C48FED']
      const color = Math.floor(Math.random()*clrarray.length)
      const colorcode = clrarray[color]
      return colorcode
    }
    let options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: graphcolor(),
          gradientToColors: graphcolor(),
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "New users",
          data: [5900, 6418, 6456, 6526, 6356, 6456],
          color: graphcolor(),
        },
      ],
      xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
      },
    }

  return (
    <div className='bg-[#FBFBFB] rounded-sm shadow-md p-4 mt-6 lg:mt-0'>
        <div>
            <p className='font-poppins font-medium text-base underline'>Monitoring</p>
            <p className=' mt-2 font-inter font-medium tex-base'>Windows lab</p>
        </div>
        <div className="CPU-wrap">
          <div>
            <p className='font-inter font-normal text-xs'>CPU Optimization</p>
          </div>
        <div id="area-chart" ref={cpugraphref}></div>
        </div>

        <div className="MEM-wrap">
          <div>
            <p className='font-inter font-normal text-xs'>Memory Usage</p>
          </div>
        <div id="area-chart" ref={memgraphref}></div>
        </div>
    </div>
  )
}

export default Monitoring