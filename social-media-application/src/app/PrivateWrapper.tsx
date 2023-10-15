import { Outlet } from "react-router-dom"
import Layout from "../containers/Layout"

export const PrivateWrapper = () => {
   return (
      <Layout>
         <Outlet />
      </Layout>
   )
}