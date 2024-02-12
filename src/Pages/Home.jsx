import React from 'react'
import Banner from '../Components/Navbar/Banner'
import Products from './Products'
import QuoteCard from '../Components/card'

function Home() {
  return (
    <div className=''>
        <Banner/>
        <div class="container-fluid mt-3">
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="cyan-btn" type="submit">Search</button>
      </form>
      <QuoteCard/>
      </div>
        <Products/>
        <Banner/>
        <div className="mx-3">
        <QuoteCard/>
        </div>
        <Products/>
    </div>
  )
}

export default Home
