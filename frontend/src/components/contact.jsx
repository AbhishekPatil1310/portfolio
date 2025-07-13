import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 rounded bg-white/90"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 rounded bg-white/90"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-3 rounded bg-white/90 text-black"
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
        Send
      </button>
      <p className="text-sm mt-2">{status}</p>
    </form>
  );
};

export default ContactForm;
