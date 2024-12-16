import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import { NashrDetail, NashrAll, NashrLayout } from "./pages/Nashr"
import Home from "./pages/Home"
import { JurnalHaqida, TahririyatJamoasi } from "./pages/Jurnal"
import Talabnoma from "./pages/Talabnoma"
import { YangilikDetails, Yangiliklar } from "./pages/Yangiliklar"

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
              index:true,
              element: <NashrAll/>
            },
            {
              path: ":id",
              element: <NashrDetail/>
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
        },
        {
          path: "talabnoma",
          element: <Talabnoma/>
        },
        {
          path: "yangiliklar",
          element: <Yangiliklar/>
        },
        {
          path: "yangiliklar/:id",
          element: <YangilikDetails/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
