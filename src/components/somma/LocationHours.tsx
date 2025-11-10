import React, { useState } from 'react';
import { GlassBookNow } from './GlassBookNow';

export function LocationHours() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    preferredContact: 'email',
    partySize: '',
    preferredDate: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.enquiryType) newErrors.enquiryType = 'Please select enquiry type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStatus('Thank you for your enquiry! We\'ll get back to you within 24 hours.');
      setTimeout(() => setFormStatus(''), 5000);
      setFormData({
        name: '', email: '', phone: '', enquiryType: '', preferredContact: 'email',
        partySize: '', preferredDate: '', message: ''
      });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-cover bg-center" style={{
      backgroundImage: "url('https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762720472602_0d38a5bf.png')",
    }}>
      <div className="relative mx-auto max-w-7xl px-6 flex flex-col md:grid md:grid-cols-2 gap-12">
        <div className="space-y-6 animate-fade-in order-2 md:order-1">
          <h2 className="font-display text-4xl md:text-5xl transition-all duration-300 hover:text-[var(--somma)]" style={{ color: '#696958' }}>Visit Us</h2>
          <div className="mt-6 font-sans space-y-4">
            <div className="rounded-lg overflow-hidden border-2 border-[#696958]/20 shadow-lg relative">
              {/* Color overlay with SOMMA brand colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#696958]/30 via-[#8B7355]/20 to-[#696958]/25 pointer-events-none z-10 mix-blend-multiply"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.4896842177844!2d138.63187631521!3d-34.91891098037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced9e6a8f6e5%3A0x5e5e5e5e5e5e5e5e!2s125A%20The%20Parade%2C%20Norwood%20SA%205067!5e0!3m2!1sen!2sau!4v1699999999999!5m2!1sen!2sau&zoom=16&markers=color:0xC4A57B%7C-34.918911,138.631876"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative"
              />
            </div>
          </div>
        </div>

        <div className="animate-fade-in order-1 md:order-2">

          <h3 className="font-display text-3xl transition-all duration-300 hover:text-[var(--somma)]" style={{ color: '#696958' }}>Get in Touch</h3>

          <form onSubmit={handleSubmit} className="mt-4 bg-white/40 backdrop-blur-xl border border-somma-ink/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block text-sm font-sans" style={{ color: '#696958' }}>
                Name *
                <input 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className="mt-1 w-full rounded-xl border border-somma-ink/10 bg-white/60 px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--somma)] hover:bg-white/80"
                />
                {errors.name && <span className="text-xs text-red-600 mt-1">{errors.name}</span>}
              </label>
              <label className="block text-sm font-sans" style={{ color: '#696958' }}>
                Email *
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  className="mt-1 w-full rounded-xl border border-somma-ink/10 bg-white/60 px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--somma)] hover:bg-white/80"
                />
                {errors.email && <span className="text-xs text-red-600 mt-1">{errors.email}</span>}
              </label>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <label className="block text-sm font-sans" style={{ color: '#696958' }}>
                Phone
                <input 
                  type="tel" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  className="mt-1 w-full rounded-xl border border-somma-ink/10 bg-white/60 px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--somma)] hover:bg-white/80"
                />
              </label>
              <label className="block text-sm font-sans" style={{ color: '#696958' }}>
                Enquiry Type *
                <select 
                  value={formData.enquiryType} 
                  onChange={(e) => setFormData({...formData, enquiryType: e.target.value})} 
                  className="mt-1 w-full rounded-xl border border-somma-ink/10 bg-white/60 px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--somma)] hover:bg-white/80"
                >
                  <option value="">Select...</option>
                  <option value="general">General Enquiry</option>
                  <option value="private-events">Private Events</option>
                  <option value="catering">Catering</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                {errors.enquiryType && <span className="text-xs text-red-600 mt-1">{errors.enquiryType}</span>}
              </label>
            </div>
            {(formData.enquiryType === 'private-events' || formData.enquiryType === 'catering') && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <label className="block text-sm font-sans" style={{ color: '#696958' }}>
                  Party Size
                  <input 
                    type="number" 
                    min="1"
                    value={formData.partySize} 
                    onChange={(e) => setFormData({...formData, partySize: e.target.value})} 
                    className="mt-1 w-full rounded-xl border border-somma-ink/10 bg-white/60 px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--somma)] hover:bg-white/80"
                  />
                </label>
                <label className="block text-sm font-sans" style={{ color: '#696958' }}>
                  Preferred Date
                  <input 
                    type="date" 
                    value={formData.preferredDate} 
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})} 
                    className="mt-1 w-full rounded-xl border border-somma-ink/10 bg-white/60 px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--somma)] hover:bg-white/80"
                  />
                </label>
              </div>
            )}
            <label className="block text-sm font-sans mt-4" style={{ color: '#696958' }}>
              Preferred Contact Method
              <div className="mt-2 flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="preferredContact" 
                    value="email" 
                    checked={formData.preferredContact === 'email'} 
                    onChange={(e) => setFormData({...formData, preferredContact: e.target.value})} 
                    className="accent-[var(--somma)]"
                  />
                  <span>Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="preferredContact" 
                    value="phone" 
                    checked={formData.preferredContact === 'phone'} 
                    onChange={(e) => setFormData({...formData, preferredContact: e.target.value})} 
                    className="accent-[var(--somma)]"
                  />
                  <span>Phone</span>
                </label>
              </div>
            </label>
            <label className="block text-sm font-sans mt-4" style={{ color: '#696958' }}>
              Message *
              <textarea 
                rows={4} 
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})} 
                className="mt-1 w-full rounded-xl border border-somma-ink/10 bg-white/60 px-3 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--somma)] hover:bg-white/80"
                placeholder="Tell us more about your enquiry..."
              />
              {errors.message && <span className="text-xs text-red-600 mt-1">{errors.message}</span>}
            </label>
            <button 
              type="submit" 
              className="mt-5 w-full inline-flex items-center justify-center rounded-xl border border-somma-ink/20 bg-white/30 px-4 py-3 font-sans backdrop-blur-md hover:bg-[var(--somma)] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold"
            >
              Send Enquiry
            </button>
            {formStatus && (
              <div className="mt-3 p-3 rounded-xl bg-green-100 border border-green-300 animate-fade-in">
                <p className="text-sm text-green-800 font-sans">{formStatus}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
