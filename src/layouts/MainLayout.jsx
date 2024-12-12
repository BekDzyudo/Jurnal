import React from 'react'
import { Outlet } from 'react-router-dom'
import {Footer, Header} from "../components"

function MainLayout() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default MainLayout