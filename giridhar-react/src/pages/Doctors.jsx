import { Link } from 'react-router-dom';

export default function Doctors() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-primary">Our Doctors</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">
        Meet our team of experienced ophthalmologists and specialists at Giridhar Eye Institute.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200" />
            <div className="p-4">
              <h3 className="font-semibold text-primary">Doctor Name</h3>
              <p className="text-sm text-gray-600">Speciality</p>
              <Link to={`/doctors/doctor-${i}`} className="mt-2 inline-block text-brand text-sm font-medium hover:underline">
                View profile →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
