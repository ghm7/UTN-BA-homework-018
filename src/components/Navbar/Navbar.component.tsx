import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface INavLink {
  linkName: string;
  href: string;
}

const links: Array<INavLink> = [
  {
    linkName: 'Inicio',
    href: '/',
  },
  {
    linkName: 'Galería',
    href: '/gallery',
  },
  {
    linkName: 'Acerca de mi',
    href: '/about',
  },
  {
    linkName: 'Contacto',
    href: '/contact',
  },
];

export default function Navbar(): ReactElement {
  return (
    <nav className="flex justify-between items-center p-8 bg-primaryDarker">
      <div>
        <NavLink to={'/'}>
          <p className="text-4xl">a</p>
        </NavLink>
      </div>
      <ul className="flex h-full justify-end">
        {links.map(({ linkName, href }, index) => (
          <NavLink
            key={index}
            to={href}
            className={({ isActive }) =>
              isActive ? 'text-indigo-600 font-semibold px-4 py-2' : 'px-4 py-2'
            }
          >
            {linkName}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
