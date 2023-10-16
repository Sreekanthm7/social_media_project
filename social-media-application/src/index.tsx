import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./app/App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { createClient } from "@supabase/supabase-js"

const client = new ApolloClient({
  uri: "https://jtufzitlmgfxgsawjmxc.supabase.co/graphql/v1",
  headers: {
    apiKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0dWZ6aXRsbWdmeGdzYXdqbXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMjY2ODQsImV4cCI6MjAxMjcwMjY4NH0.wPNnnNd2OrV3ARpadCs4qlsTgNEHnQHNc7raEME_GOQ",
  },
  cache: new InMemoryCache(),
})

const supabase = createClient(
  "https://jtufzitlmgfxgsawjmxc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0dWZ6aXRsbWdmeGdzYXdqbXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMjY2ODQsImV4cCI6MjAxMjcwMjY4NH0.wPNnnNd2OrV3ARpadCs4qlsTgNEHnQHNc7raEME_GOQ"
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <SessionContextProvider supabaseClient={supabase}>
          <App />
        </SessionContextProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
