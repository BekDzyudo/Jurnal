import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import { Home, Nashr, NashrLayout } from "./pages"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "nashrlar",
          element: <NashrLayout/>,
          children : [
            {
              index: true,
              element: <Nashr/>
            }

          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
