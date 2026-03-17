import { Link } from 'react-router-dom';

const specialities = [
  { title: 'Vitreo Retina', path: '/specialities/retina' },
  { title: 'Cataract', path: '/specialities/cataract' },
  { title: 'Cornea & Laser Correction', path: '/specialities/cornea' },
  { title: 'Paediatric, Squint & Neuro Ophthal', path: '/specialities/paediatric' },
  { title: 'Orbit & Oculoplasty', path: '/specialities/oculoplasty' },
  { title: 'Glaucoma', path: '/specialities/glaucoma' },
  { title: 'Uvea Services', path: '/specialities/uvea' },
  { title: 'Community Ophthalmology', path: '/specialities/community' },
  { title: 'General Ophthalmology', path: '/specialities/general' },
];

export default function Specialities() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-primary">Specialities</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">
        Our subspecialty services for comprehensive eye care.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {specialities.map(({ title, path }) => (
          <Link
            key={path}
            to={path}
            className="block p-4 rounded-lg bg-[#eff7f9] hover:bg-primary hover:text-white font-medium transition-colors"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
