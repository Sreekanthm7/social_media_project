import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import React from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../.."

function Login() {
  const navigate = useNavigate()

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      navigate("/home")
    } else {
      navigate("/")
    }
  })
  
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={[]}
      />
    </div>
  )
}

export default Login


