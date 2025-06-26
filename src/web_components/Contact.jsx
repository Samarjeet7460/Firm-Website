import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('Sending message...');

    // Create a hidden iframe for form submission
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden_iframe';
    document.body.appendChild(iframe);

    // Set form target to the hidden iframe
    const form = document.getElementById('contact-form');
    form.target = 'hidden_iframe';
    
    // Handle successful submission
    iframe.onload = () => {
      setSubmitStatus('Message sent successfully! We\'ll get back to you soon.');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clean up
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    };

    // Submit the form
    form.submit();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12" id='contact'>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-20">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Contact Info */}
            <div className="lg:w-2/5 bg-amber-500 text-white p-8 lg:p-12">
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's get in touch</h2>
                  <p className="text-green-100 text-lg">
                    We're open for any suggestion or just to have a chat
                  </p>
                </div>

                <div className="space-y-8 flex-grow">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 border-2 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address:</h3>
                      <p className="text-green-100 leading-relaxed">
                        Defance Bandh, Bassi Road,<br/> SIRHIND-140406 (Pb.)
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 border-2 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone:</h3>
                      <p className="text-green-100">+91-9811388298</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 border-2 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email:</h3>
                      <p className="text-green-100"> Tmindia.pb@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <div className="max-w-lg">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Get in touch</h2>
                
                <form 
                  id="contact-form" 
                  action="https://formsubmit.co/Tmindia.pb@gmail.com" 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {/* Hidden FormSubmit Configuration Fields */}
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission from Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_autoresponse" value="Thank you for contacting us! We'll get back to you soon." />

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        FULL NAME
                      </label>
                      <Input
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        EMAIL ADDRESS
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SUBJECT
                    </label>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full h-12"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      MESSAGE
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus && (
                    <div className={`p-3 rounded-md text-sm ${
                      submitStatus.includes('successfully') 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                      {submitStatus}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;