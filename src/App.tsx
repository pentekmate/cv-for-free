import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import PDFPreviewPage from "./Pages/PDFPreviewPage";
import './index.css'
import { AppProvider } from "./Context/AppContext";
import TemplatePage from "./Pages/TemplatePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/createCV/edit",
      element: <PDFPreviewPage></PDFPreviewPage>
    },
    {
      path: "/createCV/templates",
      element: <TemplatePage></TemplatePage>
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  )
}

export default App
