import { ReactNode } from "react"
import { NavigationBar } from "../components/navbar/NavigationBar"

type LayoutProps = {
   children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
   return (

      <div>
         {children}
      </div>


   )
}

export default Layout