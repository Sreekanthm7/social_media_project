import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Users } from "../pages/users/Users"
import { About } from "../pages/about/About"
import { RoutPath } from "../routes/mainRoutes"
import { NavigationBar } from "../components/navbar/NavigationBar"
import { SocialMediaContextProvider } from "../contexts/socialMediaContext"
import { QueryClientProvider, QueryClient } from "react-query"
import { PrivateWrapper } from "./PrivateWrapper"
import Login from "../pages/login/Login"

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SocialMediaContextProvider>
        <Routes>
          <Route element={<PrivateWrapper />}>
            <Route path={RoutPath.login} element={<Login />} />
            <Route path={RoutPath.home} element={<Home />} />
            <Route path={RoutPath.usersPage} element={<Users />} />
            <Route path={RoutPath.aboutPage} element={<About />} />
          </Route>
        </Routes>
      </SocialMediaContextProvider>
    </QueryClientProvider>
  )
}

export default App
