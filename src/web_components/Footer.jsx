import React from 'react';

function Footer() {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Quick links configuration
  const quickLinks = [
    { name: 'About us', sectionId: 'about' },
    { name: 'Products', sectionId: 'products' },
    { name: 'Contact us', sectionId: 'contact' }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="font-bold text-3xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TECHNO MECH INDIA
              </h1>
              <p className="text-gray-400 text-lg mb-2">
                Mfrs. of : Rolling Mill Plants & Allied Machinary
              </p>
              <p className="text-gray-400">
                Defance Bandh, Bassi Road, SIRHlND-140406 (Pb.)
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-300">Phone</h3>
                </div>
                <p className="text-white font-medium ml-2">+91-8504000069</p>
              </div>

              <div className="group">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-300">Email</h3>
                </div>
                <p className="text-white font-medium ml-2">Tmindia.pb@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white mt-2"></div>
            </h2>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button 
                  key={index}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="block text-gray-400 hover:text-white transition-colors transform cursor-pointer text-left w-full"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-6 relative">
              Follow Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white mt-2"></div>
            </h2>
            <div className="space-y-3">
              {[
                { name: 'Instagram', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>, link: "#" },
                { name: 'Facebook', icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, link: "#" },
                { name: 'Twitter', icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>, link: "#" },
                { name: 'LinkedIn', icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>, link: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="mr-3 text-lg">
                    {social.icon}
                  </span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Techno Mech India. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;