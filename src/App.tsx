import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <h1>Success!</h1>
      </main>

      <footer className="text-center">
        <hr />
        <p>Copyright 2023 | Arun</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
