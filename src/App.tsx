import { type FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Home from '@/pages/Home'

const App: FC = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true
      }
    }
  })
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </div>
  )
}

export default App
