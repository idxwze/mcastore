import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-8 md:py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-3">Contact Us</h1>
        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
          Have a question or need assistance? We're here to help!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Get in Touch</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D32F2F] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827] mb-1">Visit Us</h3>
                <p className="text-[#6B7280]">
                  123 Stadium Road<br />
                  Algiers, Algeria 16000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D32F2F] rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827] mb-1">Call Us</h3>
                <p className="text-[#6B7280]">
                  +213 (0) 21 XX XX XX<br />
                  +213 (0) 770 XX XX XX
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D32F2F] rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827] mb-1">Email Us</h3>
                <p className="text-[#6B7280]">
                  support@mcastore.dz<br />
                  info@mcastore.dz
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D32F2F] rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827] mb-1">Opening Hours</h3>
                <p className="text-[#6B7280]">
                  Sunday - Thursday: 9:00 AM - 8:00 PM<br />
                  Friday - Saturday: 10:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-[#111827] mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#F9FAFB] hover:bg-[#D32F2F] hover:text-white rounded-xl flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#F9FAFB] hover:bg-[#D32F2F] hover:text-white rounded-xl flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#F9FAFB] hover:bg-[#D32F2F] hover:text-white rounded-xl flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#F9FAFB] hover:bg-[#D32F2F] hover:text-white rounded-xl flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#D32F2F]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#D32F2F]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#D32F2F] resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-xl font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div>
        <h2 className="text-2xl font-bold text-[#111827] mb-6 text-center">Our Location</h2>
        <div className="bg-[#F9FAFB] rounded-xl overflow-hidden border border-[#E5E7EB]">
          <div className="aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#D32F2F] mx-auto mb-4" />
              <p className="text-lg font-semibold text-[#111827]">123 Stadium Road</p>
              <p className="text-[#6B7280]">Algiers, Algeria 16000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
