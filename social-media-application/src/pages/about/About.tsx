import { ChangeEvent, useEffect, useState } from "react"
import "./About.css"
import { NavigationBar } from "../../components/navbar/NavigationBar"
import { supabase } from "../.."
import { useNavigate } from "react-router-dom"

export function About() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUserDate() {
      await supabase.auth.getUser().then((value) => {
        if (value?.data?.user) {
          console.log(value.data.user)
          setUser(value.data.user)
        }
      })
    }
    getUserDate()
  }, [])

  async function signOutUser() {
    const { error } = await supabase.auth.signOut()
    navigate("/")
  }

  return (
    <div className="about-main">
      <NavigationBar />
      <button onClick={() => signOutUser()}>Sign Out</button>
    </div>
  )
}
