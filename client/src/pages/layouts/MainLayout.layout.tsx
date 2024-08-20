import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar.component';

export default function MainLayout(): ReactElement {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
