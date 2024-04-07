import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import FirstPage from './pages/FirstPage.tsx'
import MovieDetails from './pages/MovieDetails.tsx'
import MyTickets from './pages/MyTickets.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "/",
        element: <FirstPage />
      },
      {
        path: "home/:id",
        element: <MovieDetails />
      },
      {
        path: "/:id",
        element: <MovieDetails />
      },
      {
        path: "tickets",
        element: <MyTickets />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
