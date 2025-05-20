import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { useMediaPreloader } from './componets/util/useMediaPreloader';

function App() {
  // Initialize media preloading
  useMediaPreloader();

  return (
    <RouterProvider router={router} />
  )
}

export default App
