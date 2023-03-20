import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./Navbar"


export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="login" element={ <LoginPage /> } />
                <Route path="about" element={ <AboutPage /> } />

                {/*This route allows you to send to a specific component when there is no existing route. */}
                {/* <Route path="/*" element={ <LoginPage /> } /> */}

                <Route path="/*" element={ <Navigate to="/about" /> } />
            </Routes>
            
        </UserProvider>
    )
}
