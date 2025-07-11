import { Route, Routes } from "react-router-dom"
import { Home, Pricing } from "../pages"


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
    </Routes>
  )
}

export default Main