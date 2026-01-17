import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { ConsultationFormData, Goal, ContactMethod } from '../types';
import { BUDGET_OPTIONS } from '../constants';
import { submitConsultation } from '../services/api';

const Book: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    companyName: '',
    website: '',
    primaryGoal: '' as Goal | "", // Type cast initial empty state
    description: '',
    budgetRange: '',
    contactMethod: ContactMethod.EMAIL,
    phone: '',
    consent: false,
    honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
       const checked = (e.target as HTMLInputElement).checked;
       setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
       setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.fullName || !formData.email || !formData.companyName || !formData.description || !formData.consent) {
        setErrorMessage("Please fill in all required fields.");
        setStatus('error');
        return;
    }
    
    if (formData.contactMethod === ContactMethod.PHONE && !formData.phone) {
        setErrorMessage("Please provide a phone number.");
        setStatus('error');
        return;
    }

    // Honeypot check
    if (formData.honeypot) {
      // Silently fail spam
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const success = await submitConsultation(formData);
      if (success) {
        setStatus('success');
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  if (status === 'success') {
    return (
      <Layout>
        <div className="max-w-xl mx-auto px-6 py-20 min-h-[60vh] flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Request Received</h2>
          <p className="text-slate-600 mb-8">
            Thank you, {formData.fullName}. We have received your consultation request and will be in touch shortly via {formData.contactMethod === ContactMethod.EMAIL ? 'email' : 'phone'}.
          </p>
          <Button to="/" variant="outline">Back to Home</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Book a Consultation</h1>
          <p className="text-slate-600">
            Tell us about your business needs. We'll get back to you within 24 hours to schedule a discovery call.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Honeypot - Hidden */}
            <div className="hidden" aria-hidden="true">
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={handleChange} 
                tabIndex={-1} 
                autoComplete="off"
              />
            </div>

            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-salmon">*</span></label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-salmon focus:border-salmon outline-none transition-all"
                      placeholder="Jane Doe"
                      required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address <span className="text-salmon">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-salmon focus:border-salmon outline-none transition-all"
                      placeholder="jane@company.com"
                      required
                    />
                </div>
            </div>

            {/* Company & Website */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-slate-700 mb-2">Company Name <span className="text-salmon">*</span></label>
                    <input 
                      type="text" 
                      id="companyName" 
                      name="companyName" 
                      value={formData.companyName} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-salmon focus:border-salmon outline-none transition-all"
                      placeholder="Acme Inc."
                      required
                    />
                </div>
                <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">Website <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input 
                      type="url" 
                      id="website" 
                      name="website" 
                      value={formData.website} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-salmon focus:border-salmon outline-none transition-all"
                      placeholder="https://acme.com"
                    />
                </div>
            </div>

            {/* Goal */}
            <div>
              <label htmlFor="primaryGoal" className="block text-sm font-semibold text-slate-700 mb-2">Primary Goal <span className="text-slate-400 font-normal">(Optional)</span></label>
              <div className="relative">
                <select 
                  id="primaryGoal" 
                  name="primaryGoal" 
                  value={formData.primaryGoal} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-salmon focus:border-salmon outline-none transition-all appearance-none bg-white"
                >
                  <option value="" disabled>Select a goal...</option>
                  {Object.values(Goal).map(goal => (
                    <option key={goal} value={goal}>{goal}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-2">Short Description <span className="text-salmon">*</span></label>
              <textarea 
                id="description" 
                name="description" 
                value={formData.description} 
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-salmon focus:border-salmon outline-none transition-all"
                placeholder="What challenge are you trying to solve? Please be concise."
                required
              ></textarea>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budgetRange" className="block text-sm font-semibold text-slate-700 mb-2">Estimated Budget <span className="text-slate-400 font-normal">(Optional)</span></label>
              <div className="relative">
                <select 
                  id="budgetRange" 
                  name="budgetRange" 
                  value={formData.budgetRange} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-salmon focus:border-salmon outline-none transition-all appearance-none bg-white"
                >
                  <option value="" disabled>Select a range...</option>
                  {BUDGET_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Contact Method */}
            <div>
              <span className="block text-sm font-semibold text-slate-700 mb-3">Preferred Contact Method</span>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="contactMethod" 
                    value={ContactMethod.EMAIL} 
                    checked={formData.contactMethod === ContactMethod.EMAIL} 
                    onChange={handleChange}
                    className="w-4 h-4 text-salmon focus:ring-salmon border-gray-300"
                  />
                  <span>Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="contactMethod" 
                    value={ContactMethod.PHONE} 
                    checked={formData.contactMethod === ContactMethod.PHONE} 
                    onChange={handleChange}
                    className="w-4 h-4 text-salmon focus:ring-salmon border-gray-300"
                  />
                  <span>Phone</span>
                </label>
              </div>
            </div>

            {/* Conditional Phone Field */}
            {formData.contactMethod === ContactMethod.PHONE && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number <span className="text-salmon">*</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-salmon focus:border-salmon outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            )}

            {/* Consent */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="consent" 
                  checked={formData.consent} 
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-salmon rounded border-gray-300 focus:ring-salmon"
                  required
                />
                <span className="text-sm text-slate-600">I agree to be contacted about my request. I understand that my data will be handled securely.</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full md:w-auto min-w-[200px]" 
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Submit Request'}
              </Button>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-md text-sm">
                {errorMessage}
              </div>
            )}
        </form>
      </div>
    </Layout>
  );
};

export default Book;