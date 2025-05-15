import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/homepage/HomePage'

import TeamPage from '../pages/about/team'
import NotFound from '../pages/error/NotFound'
import AboutPage from '../pages/about/About'
import Architecture from '../pages/services/architecture/Architecture'
import UrbanDesign from '../pages/services/urban-design/UrbanDesign'
import Construction from '../pages/services/construction/Construction'
import DigitalFabrication from '../pages/services/digital-fabrication/DigitalFabrication'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'About-us',
        element: <AboutPage />,
      },
      {
        path: 'team',
        element: <TeamPage />,
      },
      {
        path: 'architecture',
        element: <Architecture />,
      },
      {
        path: 'urban-design',
        element: <UrbanDesign />,
      },
      {
        path: 'construction',
        element: <Construction />,
      },
      {
        path: 'digital-fabrication',
        element: <DigitalFabrication />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
