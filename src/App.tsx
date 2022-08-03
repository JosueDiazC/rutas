import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Detalle from "./pages/Detalle"
import Error from "./pages/Error"
import Home from "./pages/Home"
import TeamDetalle from "./pages/TeamDetalle"
import Teams from "./pages/Teams"
import Test from "./pages/Test"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="team">
          <Route path="details" element={<Detalle />} />
          <Route path="details/:obj" element={<TeamDetalle />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
