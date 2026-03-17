import { Link } from 'react-router-dom';

const footerLinks = {
  specialities: [
    { label: 'Vitreo Retina', path: '/specialities/retina' },
    { label: 'Cataract', path: '/specialities/cataract' },
    { label: 'Cornea & Laser', path: '/specialities/cornea' },
    { label: 'Glaucoma', path: '/specialities/glaucoma' },
  ],
  about: [
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Centers', path: '/our-centers' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Careers', path: '/careers' },
  ],
  support: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Resources', path: '/resources' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Giridhar Eye Institute</h3>
            <p className="text-sm leading-relaxed">
              Best Eye Hospital in Kochi, Kerala. NABH accredited. Comprehensive eye care in
              Cataract, Retina, Glaucoma, Cornea, Pediatric, Oculoplasty & more.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Specialities</h4>
            <ul className="space-y-2">
              {footerLinks.specialities.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Giridhar Eye Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="tel:+914844170000" className="text-sm hover:text-white">
              +91-484-4170000
            </a>
            <a href="tel:+914843102929" className="text-sm hover:text-white">
              +91-484-3102929
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
