import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"
import ItemList from "./components/ItemList"
import Item from "./components/Item"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemDetail from "./components/ItemDetail"

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer/>
    <ItemDetailContainer/>
    <ItemCount stock={10}/>
    </>
  )
}

export default App
