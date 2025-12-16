import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectsPage from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/projects', element: <ProjectsPage /> },
        { path: '/experience', element: <Experience /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ],
  {
    basename: '/portfolio',   // 👈 this is the key for GitHub Pages
  }
);

export default router;
