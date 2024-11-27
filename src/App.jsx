import './App.css'
import Header from './components/Header'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

const App = () => {
  return (
    <Authenticator>
      {({ user, signOut }) => <div> <h1> Hello {user.username} </h1>
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={signOut}>Sign out</button>
      </div>}
    </Authenticator>
  )
}

export default App
