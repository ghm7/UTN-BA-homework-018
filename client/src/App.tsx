import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './pages/layouts/MainLayout.layout';
import Home from './pages/Home/Home.component';
import Carousel from './pages/Carousel/Carousel.component';
import carouselDataLoader from './pages/Carousel/carouselDataLoader';
import GalleryGrid from './components/GalleryGrid/GalleryGrid.component';
import About from './pages/About/About.component';
import Contact from './pages/Contact/Contact.component';
import NotFound from './pages/NotFound/NotFound.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gallery',
        element: <GalleryGrid />,
      },
      {
        path: 'gallery/:id',
        element: <Carousel />,
        // @ts-expect-error: It's not assignable to type FunctionLoader<any>
        loader: carouselDataLoader,
      },

      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App(): ReactElement {
  return <RouterProvider router={router} />;
}

export default App;
