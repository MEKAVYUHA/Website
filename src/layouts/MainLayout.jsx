import { Outlet } from 'react-router-dom';
import useSmoothScroll from '../hooks/useSmoothScroll';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CustomCursor from '../components/UI/CustomCursor';

const MainLayout = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-[var(--color-primary)] text-[var(--color-text-main)] font-sans relative overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
