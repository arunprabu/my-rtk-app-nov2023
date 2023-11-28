import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./features/home/Home"
import { Counter } from "./features/counter/Counter"
import Users from "./features/users/Users"
import Products from "./features/products/Products"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>

      <footer className="text-center">
        <hr />
        <p>Copyright 2023 | Arun</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
