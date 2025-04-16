import Homepage from "./components/HomePage"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import CanvasLayout from "./components/canvasLayout"
import Blogs from "./components/blogs"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
        </Route>        
        <Route path="/canvas" element={<CanvasLayout/>}>
          <Route index element={<Blogs/>}/>
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App
