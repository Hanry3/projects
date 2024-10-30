import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white py-3 mt-10 overflow-hidden border border- ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-lg font-bold text-black">TaskFlow</h1>
          <p className="text-sm text-black font-extrabold"> Organize your day, conquer your tasks.</p>
        </div>

        {/* Center Section - Links */}
        <div className="flex space-x-4">
          <a target='_blank' href="https://www.linkedin.com/in/shubham-shukla-62095032a/" className="text-sm hover:underline text-black font-extrabold">About Us</a>
          <a target='_blank' href="https://www.linkedin.com/in/shubham-shukla-62095032a/" className="text-sm hover:underline text-black font-extrabold">Privacy Policy</a>
          <a target='_blank' href="https://www.linkedin.com/in/shubham-shukla-62095032a/" className="text-sm hover:underline text-black font-extrabold">Terms of Service</a>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/shubham-shukla-62095032a/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/24/000000/linkedin.png" alt="LinkedIn"/>
          </a>
          <a className='size-7 flex ' href="https://www.instagram.com/shbhm.exe/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/instagram.png" alt="LinkedIn"/>
          </a>
          <a href="https://github.com/shbhmexe" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/24/000000/github.png" alt="GitHub"/>
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-sm font-extrabold text-black">
        &copy; 2024 TaskFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
