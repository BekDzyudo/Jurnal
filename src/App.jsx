import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import { Nashr, NashrLayout } from "./pages/Nashr"
import Home from "./pages/Home"
import { JurnalHaqida, TahririyatJamoasi } from "./pages/Jurnal"

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
        },
        {
          path: "jurnal-haqida",
          element: <JurnalHaqida/>
        },
        {
          path: "tahririyat-jamoasi",
          element: <TahririyatJamoasi/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
