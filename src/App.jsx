import { RoutesMain } from './routes/RoutesMain'
import { UserProvider } from './providers/userContext'

export const App = () => {

  return (
    <>
      <UserProvider>
        <RoutesMain/>
      </UserProvider>
    </>
  )
}


