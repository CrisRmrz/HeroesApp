import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage } from "../heroes/pages/DcPage"
import { MarvelPage } from "../heroes/pages/MarvelPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { Navbar } from "../ui/components/Navbar"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>

            <Routes>

                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}
