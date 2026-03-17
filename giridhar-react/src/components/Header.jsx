import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobileMenu } from '../hooks/useMobileMenu';

const mainNav = [
  { label: 'Home', path: '/' },
  {
    label: 'Specialities',
    path: '/specialities',
    children: [
      { label: 'Vitreo Retina', path: '/specialities/retina' },
      { label: 'Cataract', path: '/specialities/cataract' },
      { label: 'Cornea & Laser', path: '/specialities/cornea' },
      { label: 'Paediatric & Squint', path: '/specialities/paediatric' },
      { label: 'Orbit & Oculoplasty', path: '/specialities/oculoplasty' },
      { label: 'Glaucoma', path: '/specialities/glaucoma' },
      { label: 'Uvea Services', path: '/specialities/uvea' },
    ],
  },
  { label: 'Doctors', path: '/doctors' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about-us' },
      { label: 'History', path: '/history' },
      { label: 'Mission & Vision', path: '/mission-vision' },
      { label: 'Our Centers', path: '/our-centers' },
    ],
  },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const { isOpen, toggle, close } = useMobileMenu(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[#eff7f9] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
            <div className="flex items-center gap-4">
              <a
                href="tel:+914844170000"
                className="text-primary hover:text-brand font-medium flex items-center gap-1"
              >
                <span className="sr-only">Phone</span>
                +91-484-4170000
              </a>
              <a
                href="tel:+914843102929"
                className="text-primary hover:text-brand font-medium flex items-center gap-1"
              >
                +91-484-3102929
              </a>
            </div>
            <Link
              to="/our-centers"
              className="text-primary hover:text-brand font-medium flex items-center gap-1"
            >
              Our Branches
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2" onClick={close}>
            <span className="text-xl font-bold text-primary">Giridhar Eye Institute</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <span
                      className={`block px-4 py-2 rounded font-medium ${
                        isActive(item.path)
                          ? 'text-black bg-gray-100'
                          : 'text-gray-700 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </span>
                    {openDropdown === item.path && (
                      <div className="absolute left-0 top-full pt-1 min-w-[200px]">
                        <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`block px-4 py-2 text-sm ${
                                location.pathname === child.path
                                  ? 'bg-primary text-white'
                                  : 'text-gray-700 hover:bg-primary hover:text-white'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={close}
                    className={`block px-4 py-2 rounded font-medium ${
                      isActive(item.path)
                        ? 'text-black bg-gray-100'
                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggle}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.path}>
                  <span className="block px-4 py-2 font-medium text-gray-500">{item.label}</span>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={close}
                      className={`block py-2 pl-8 text-sm ${
                        location.pathname === child.path ? 'text-primary font-medium' : 'text-gray-600'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={close}
                  className={`block px-4 py-2 rounded font-medium ${
                    isActive(item.path) ? 'bg-gray-100 text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
