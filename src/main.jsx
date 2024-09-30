import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ExampleNavigator from './ExampleNavigator.jsx'
import Hello from './hello_react/Hello.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ExampleNavigator />
  },
  {
    path: '/hello_react',
    element: <Hello />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      {router.element}
    </RouterProvider>
  </StrictMode>,
)
