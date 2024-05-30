import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Clothing Brand</h2>
          </div>
          
        </div>
        <div className="flex justify-center space-x-6 mb-4">
         
        </div>
        <div className="text-sm">
          <p>© 2024 Clothing Brand. All rights reserved.</p>
          <p>Appweave Assesment</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
