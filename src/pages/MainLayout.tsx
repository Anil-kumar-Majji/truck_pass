import React from 'react';
import NavBar from '../components/NavBar';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full font-inter">
      <NavBar />
      {children}
      <footer className='text-sm text-[#717171] place-self-center pb-5'>
        © 2025 TruckPass. All rights reserved.
      </footer>
    </div>
  )
}

interface MainLayoutProps {
  children: any;
}

export default MainLayout
