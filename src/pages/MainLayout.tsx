import React from 'react';
import NavBar from '../components/NavBar';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full font-inter">
      <NavBar />
      {children} 
    </div>
  )
}

interface MainLayoutProps {
  children: any;
}

export default MainLayout
