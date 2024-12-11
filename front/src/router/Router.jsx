import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from '../pages/HomePage/index.js';
import { routerPaths } from './routerPaths.js';
import { ProfilePage } from '../pages/ProfilePage/index.js';
import { LoginPage } from '../pages/LoginPage/index.js';
import { RegistrationPage } from '../pages/RegistrationPage/index.js';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routerPaths.home} element={<HomePage />} />
        <Route path={routerPaths.profile} element={<ProfilePage />} />
        <Route path={routerPaths.login} element={<LoginPage />} />
        <Route path={routerPaths.register} element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
};
