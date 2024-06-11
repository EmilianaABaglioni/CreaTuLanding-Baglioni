import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/products/:categoryId" element={<ItemListContainer />} />
        <Route path="/products/:productId" element= {<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
