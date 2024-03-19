import React from 'react'
import MenuList from '../Components/Menu/MenuList'
import Category from '../Components/Menu/Category'
import SearchBar from '../Components/SearchBar'

function Products() {
  return (
    <div>
      <SearchBar/>
      <Category/>
      <MenuList/>
    </div>
  )
}

export default Products

