import { RoutesMain } from './routes/RoutesMain'
import { UserProvider } from './providers/UserContext'

export const App = () => {

  return (
    <>
      <UserProvider>
        <RoutesMain/>
      </UserProvider>
    </>
  )
}


