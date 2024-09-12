import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar/'

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={'Esta es nuestra lista de productos. [¡Coming soon!]'}/>
    </>
  )
}

export default App
