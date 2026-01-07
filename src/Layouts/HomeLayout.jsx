import React, { use } from 'react'
import { Outlet,  useNavigation} from 'react-router'
import Header from '../Components/Header'
import LatestNews from '../Components/LatestNews'
import Navbar from '../Components/Navbar'
import LeftAside from '../Components/HomeLayout/LeftAside'
import RightAside from '../Components/HomeLayout/RightAside'
import Loading from '../Components/Loading'
export default function HomeLayout() {
  const {state} = useNavigation()
  return (
    <div>
      <header>
        <Header></Header>
        <section className='w-11/12 mx-auto py-2 '>
         <LatestNews/>
        </section>
        <nav className='w-11/12 mx-auto py-2'>
          <Navbar />
        </nav>
      </header>
      <main className='w-11/12 mx-auto  md:py-8  grid md:grid-cols-12 gap-5'>
        <aside className='md:col-span-3 sticky top-0 h-fit'>
          <LeftAside />
        </aside>
        <section className='md:col-span-6'>
         {state == 'loading'?<Loading></Loading>:<Outlet></Outlet>}
        </section>
        <aside className={`md:col-span-3  sticky top-0 h-fit`}>
          <RightAside />
        </aside>
      </main>
    </div>
  )
}
