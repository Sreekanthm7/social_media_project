import { ReactNode } from "react"
import { NavigationBar } from "../components/navbar/NavigationBar"

type LayoutProps = {
   children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
   return (

      <div>
         <NavigationBar />
         {children}
      </div>


   )
}

export default Layout