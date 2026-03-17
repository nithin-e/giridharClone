import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';

const specialities = [
  { title: 'Vitreo Retina', path: '/specialities/retina', desc: 'Retina care & surgery' },
  { title: 'Cataract', path: '/specialities/cataract', desc: 'Cataract surgery in Kochi' },
  { title: 'Cornea & Laser', path: '/specialities/cornea', desc: 'LASIK & corneal care' },
  { title: 'Paediatric & Squint', path: '/specialities/paediatric', desc: 'Child eye care' },
  { title: 'Orbit & Oculoplasty', path: '/specialities/oculoplasty', desc: 'Oculoplasty services' },
  { title: 'Glaucoma', path: '/specialities/glaucoma', desc: 'Glaucoma treatment' },
];

const services = [
  { title: 'In-Patient Services', path: '/services/in-patient' },
  { title: 'Out-Patient Services', path: '/services/out-patient' },
  { title: 'Ocular Trauma Clinic', path: '/services/ocular-trauma' },
  { title: 'Precision Imaging', path: '/services/precision-imaging' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#eff7f9] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Best Eye Hospital in Kochi, Kerala
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-xl">
                Giridhar Eye Institute offers comprehensive eye care: Cataract, Retina, Glaucoma,
                Cornea, Pediatric, Oculoplasty, Uvea, Neuro, Oncology & Low Vision services.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-accent hover:bg-accentHover transition-colors"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/doctors"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Our Doctors
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={heroImg}
                alt="Giridhar Eye Institute"
                className="max-h-80 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">About Giridhar Eye Institute</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              NABH accredited eye hospital in Kochi, Ernakulam. We provide expert care across
              all subspecialties with advanced technology and a dedicated team of ophthalmologists.
            </p>
            <Link
              to="/about-us"
              className="inline-block mt-6 text-brand font-medium hover:underline"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section className="py-16 bg-[#eff7f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
            Our Specialities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialities.map(({ title, path, desc }) => (
              <Link
                key={path}
                to={path}
                className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 border border-transparent transition-all"
              >
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/specialities"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-brand hover:opacity-90 transition-opacity"
            >
              View all specialities
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
            Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ title, path }) => (
              <Link
                key={path}
                to={path}
                className="block p-4 rounded-lg bg-gray-50 hover:bg-accent/10 text-gray-700 hover:text-primary font-medium transition-colors text-center"
              >
                {title}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="text-brand font-medium hover:underline">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Expert Eye Care Near You</h2>
          <p className="mt-4 opacity-90">
            Visit us in Kochi or get in touch for appointments and enquiries.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+914844170000"
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-white text-primary hover:bg-gray-100"
            >
              +91-484-4170000
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium border-2 border-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
