import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Dashboard from '../components/Dashboard/Dashboard'

const Home = () => {
  return (
    <>
      <Dashboard>
        <ItemListContainer />
      </Dashboard>
    </>
  )
}

export default Home
