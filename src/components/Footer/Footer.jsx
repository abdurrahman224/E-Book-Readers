import React from 'react';

const Footer = () => {
    return (
<footer className="bg-neutral text-neutral-content px-16 py-10  rounded-t-2xl mt-6">
  <div className=" flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 rounded-2xl">
    {/* Services */}
    <nav className="flex-1">
      <h6 className="footer-title mb-4 text-lg font-semibold">Services</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover text-gray-300 hover:text-white">Branding</a></li>
        <li><a className="link link-hover text-gray-300 hover:text-white">Design</a></li>
        <li><a className="link link-hover text-gray-300 hover:text-white">Marketing</a></li>
        <li><a className="link link-hover text-gray-300 hover:text-white">Advertisement</a></li>
      </ul>
    </nav>

    {/* Company */}
    <nav className="flex-1">
      <h6 className="footer-title mb-4 text-lg font-semibold">Company</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover text-gray-300 hover:text-white">About us</a></li>
        <li><a className="link link-hover text-gray-300 hover:text-white">Contact</a></li>
        <li><a className="link link-hover text-gray-300 hover:text-white">Jobs</a></li>
        <li><a className="link link-hover text-gray-300 hover:text-white">Press kit</a></li>
      </ul>
    </nav>

    {/* Legal */}
    <nav className="flex-1">
      <h6 className="footer-title mb-4 text-lg font-semibold">Legal</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover text-gray-300 hover:text-white">Terms of use</a></li>
        <li><a className="link link-hover text-gray-300 hover:text-white">Privacy policy</a></li>
        <li><a className="link link-hover text-gray-300 hover:text-white">Cookie policy</a></li>
      </ul>
    </nav>
  </div>

  {/* Footer Bottom */}
  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
    © 2025 E-Book Readers
  </div>
</footer>


    );
};

export default Footer;