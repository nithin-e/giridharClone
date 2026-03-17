import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
      <p className="mt-2 text-gray-600">
        Get in touch for appointments and enquiries.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-4">Phone</h2>
          <a href="tel:+914844170000" className="block text-gray-700 hover:text-primary">
            +91-484-4170000
          </a>
          <a href="tel:+914843102929" className="block mt-2 text-gray-700 hover:text-primary">
            +91-484-3102929
          </a>
          <h2 className="text-lg font-semibold text-primary mt-6 mb-4">Our Centers</h2>
          <p className="text-gray-600">
            Visit our branches in Kochi. <Link to="/our-centers" className="text-brand hover:underline">View locations</Link>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-white bg-accent hover:bg-accentHover transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
