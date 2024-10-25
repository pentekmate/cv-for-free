import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import PDFPreviewPage from "./Components/PDFPreviewPage";
import './index.css'
import { AppProvider } from "./Context/AppContext";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/createCV",
      element: <PDFPreviewPage></PDFPreviewPage>
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  )
}

export default App
