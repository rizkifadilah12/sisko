import { Route, Routes } from "react-router-dom";
import Home from './pages/mainPages/Home'
import Detail from "./pages/detail/Detail";
import Blog from "./pages/blog/Blog";

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
      
    </>
  )
}

export default App
