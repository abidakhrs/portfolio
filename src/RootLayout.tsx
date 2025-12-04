import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white dark:bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;