import { Route, BrowserRouter, Routes as RouterRoutes } from "react-router-dom"
import Home from "./pages/home"

export default function Routes() {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/inscrição" element={<Home />} />
            </RouterRoutes>
        </BrowserRouter>
    )
}
