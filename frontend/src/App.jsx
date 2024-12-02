import Homepage from "./components/HomePage"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import CanvasPage from "./components/CanvasPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="canvas" element={<CanvasPage/>}/>
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App
