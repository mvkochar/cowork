import { Route, Routes } from "react-router-dom"
import { Contact, Home, Pricing } from "../pages"


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
    </Routes>
  )
}

export default Main