import { Link } from 'react-router-dom';

export default function PagePlaceholder({ title, description = 'Content for this page.' }) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-2xl font-bold text-primary">{title}</h1>
      <p className="mt-4 text-gray-600">{description}</p>
      <Link to="/" className="inline-block mt-6 text-brand font-medium hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
