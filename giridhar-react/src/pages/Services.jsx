import { Link } from 'react-router-dom';

const services = [
  { title: 'In-Patient Services', path: '/services/in-patient', desc: 'Round-the-clock care for surgical and medical patients.' },
  { title: 'Out-Patient Services', path: '/services/out-patient', desc: 'OPD consultations and day care.' },
  { title: 'Ocular Trauma Clinic', path: '/services/ocular-trauma', desc: 'Emergency eye trauma care.' },
  { title: 'Orthoptic Evaluation', path: '/services/orthoptic-evaluation', desc: 'Assessment of eye alignment and binocular vision.' },
  { title: 'Precision Scanning & Imaging', path: '/services/precision-imaging', desc: 'Advanced imaging and diagnostics.' },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-primary">Services</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">
        Comprehensive eye care services at Giridhar Eye Institute.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {services.map(({ title, path, desc }) => (
          <Link
            key={path}
            to={path}
            className="block p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
