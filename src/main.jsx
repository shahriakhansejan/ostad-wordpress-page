import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './Pages/WordpressPage/Home/Home.jsx';
import Blog from './Pages/TestPage/Blog.jsx';
import FreeCourses from './Pages/TestPage/FreeCourses.jsx';
import CodeMama from './Pages/TestPage/CodeMama.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/courses',
        element: <FreeCourses></FreeCourses>
      },
      {
        path: '/codeMama',
        element: <CodeMama></CodeMama>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)



