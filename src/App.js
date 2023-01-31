import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home'

const router = createBrowserRouter([
  {path: '/', el ement: <HomePage/>}
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
