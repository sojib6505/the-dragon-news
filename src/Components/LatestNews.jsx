import React, { use } from 'react'
import Marquee from 'react-fast-marquee'
import BreakingNews from './BreakingNews'
import { AuthContext } from '../Provider/AuthProvider'


export default function LatestNews({}) {
  const {data,newsLoading} = use(AuthContext)
   if (newsLoading) return <span className="loading loading-spinner loading-xl"></span>;
  return (
    <div className='flex gap-5 items-center bg-base-300 p-2'>
        <p className='text-base-100 bg-secondary  p-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={50}  className='font-bold flex gap-5'>
             {data.map(latestNews => <BreakingNews latestNews={latestNews}></BreakingNews> )}
        </Marquee>
    </div>
  
  )
}
