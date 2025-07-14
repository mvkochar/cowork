import { Route, Routes } from "react-router-dom"
import { About, Blog, Contact, Home, Post, Pricing } from "../pages"


const Main = () => {
  return (
    <Routes>
        <Route
            path="/"
            element={<Home/>}
        />
        <Route
          path="pricing"
          element={<Pricing/>}
        />
        <Route
          path="contact"
          element={<Contact/>}
        />
        <Route
          path="blog"
          element={<Blog/>}
        />
        <Route
          path="about"
          element={<About/>}
        />
        <Route 
          path="post"
          element={<Post/>}
        />
    </Routes>
  )
}

export default Main