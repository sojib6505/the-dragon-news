import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'
import LatestNews from '../Components/LatestNews'
import Navbar from '../Components/Navbar'
import LeftAside from '../Components/HomeLayout/LeftAside'
import RightAside from '../Components/HomeLayout/RightAside'

export default function HomeLayout() {
  return (
    <div>
        <header>
            <Header></Header>
            <section className='w-11/12 mx-auto py-2'>
                <LatestNews/>
            </section>
            <nav className='w-11/12 mx-auto py-2'>
                <Navbar/>
            </nav>
        </header>
        <main>
          <aside>
            <LeftAside/>
          </aside>
            <section className='main'>
                <Outlet></Outlet>
            </section>
            <aside>
                <RightAside/>
            </aside>
        </main>
    </div>
  )
}
