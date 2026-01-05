import React from 'react'
import Marquee from 'react-fast-marquee'

export default function LatestNews() {
  return (
    <div className='flex gap-5 items-center bg-base-300 p-2'>
        <p className='text-base-100 bg-secondary p-2'>Latest</p>
        <Marquee pauseOnHover={true}  className='font-bold flex  gap-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta, doloremque sunt, praesentium temporibus porro esse architecto ducimus sequi et numquam nam. Natus perspiciatis quaerat ea pariatur beatae suscipit odit.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta, doloremque sunt, praesentium temporibus porro esse architecto ducimus sequi et numquam nam. Natus perspiciatis quaerat ea pariatur beatae suscipit odit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta, doloremque sunt, praesentium temporibus porro esse architecto ducimus sequi et numquam nam. Natus perspiciatis quaerat ea pariatur beatae suscipit odit.</p>
        </Marquee>
    </div>
  )
}
