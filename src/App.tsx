import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Consent from './pages/Consent';
import MainLayout from './pages/MainLayout';
import './styles/main.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/LandingPage'} replace/>} />
        <Route path={'/LandingPage'} element={<MainLayout> <LandingPage /> </MainLayout>} />
        <Route path={'/DriverConsentPage'} element={<MainLayout> <Consent /> </MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
