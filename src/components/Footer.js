import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 - About */}
        <div>
        <h2 className="text-lg font-semibold mb-3 bg-[radial-gradient(circle,_#f43f5e,_#3b82f6)] bg-clip-text text-transparent">
  About Us
</h2>

          <p className="text-sm">
            We are a leading online store providing quality products at the best prices. Shop with confidence and convenience.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 bg-[radial-gradient(circle,_#f43f5e,_#3b82f6)] bg-clip-text text-transparent">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/Contact" className="hover:underline">Contact</a></li>
            <li><a href="/Privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3 bg-[radial-gradient(circle,_#f43f5e,_#3b82f6)] bg-clip-text text-transparent">Contact Us</h2>
          <p className="text-sm">Email: support@example.com</p>
          <p className="text-sm">Phone: +91 98765 *****</p>
          <p className="text-sm">Location: Hyderabad, India</p>
        </div>

      </div>

      <div className="border-t border-gray-300 dark:border-gray-600 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
