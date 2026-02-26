import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import Home from './pages/users/Home';
import Checkout from './pages/users/Checkout';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Booking from './pages/admin/Booking';
import SportsManagement from './pages/management/SportsManagement';
import CourtsManagement from './pages/management/CourtsManagement';
import OperatingHours from './pages/management/OperatingHours';
import Settings from './pages/admin/Settings';
import Analytic from './pages/admin/Analytic';
import Customers from './pages/admin/Customers';
import UserLp from './pages/landing/UserLp';
import Court from './pages/users/Court';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING PAGE (NO LAYOUT) */}
        <Route path="/" element={<UserLp />} />
        <Route path='/court-slot' element={<Court />} />

        {/* USER */}
        <Route element={<UserLayout />}>
          <Route path="/home" element={<Home />} />

        </Route>


        <Route path="/checkout" element={
          <UserLayout>
            <Checkout />
          </UserLayout>
        } />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='booking' element={<Booking />} />
          <Route path="customer" element={<Customers />} />
          <Route path="analytics" element={<Analytic />} />
          <Route path="settings" element={<Settings />} />
          {/* sub menu  */}
          <Route path='sport' element={<SportsManagement />} />
          <Route path='court' element={<CourtsManagement />} />
          <Route path='operating-hours' element={<OperatingHours />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
