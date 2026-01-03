import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 text-sm">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600">
            Have a project in mind? We'd love to hear about it and explore how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-100">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:nexgensolutions@gmail.com" className="text-purple-700 hover:text-purple-800">
                  nexgensolutions@gmail.com
                </a>
                <p className="text-sm text-gray-600 mt-2">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border-2 border-teal-100">
                <div className="bg-gradient-to-br from-teal-600 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+1234567890" className="text-teal-700 hover:text-teal-800">
                  +60 12-345 6789
                </a>
                <p className="text-sm text-gray-600 mt-2">Mon-Fri 8AM-5PM GMT+8</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-2 border-orange-100">
                <div className="bg-gradient-to-br from-orange-600 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-700">
                  Universiti Sains Malaysia<br />
                  11800 USM Penang, Malaysia
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl blur-xl opacity-10"></div>
              <div className="relative bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl text-gray-900">Send a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2 text-sm">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 text-sm">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none resize-none transition-all"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}