import { useContext } from 'react'
import { ContextProvider, AuthContext } from './AppContext'
import Header from './components/Header'
import Login from './components/Login'

function App() {
  const authContext = useContext(AuthContext)
  console.log(authContext)
  return (
    <div className="container">
      <Header />
      {authContext.auth.email ? <p>Welcome</p> : <Login />}
    </div>
  )
}
function AppWithStore() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
}
export default AppWithStore
