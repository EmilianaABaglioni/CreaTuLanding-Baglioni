import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <>
      <NavBar />
      <Dashboard>
        <ItemListContainer title='PRODUCTOS' />
      </Dashboard>
    </>
  )
}

export default App
