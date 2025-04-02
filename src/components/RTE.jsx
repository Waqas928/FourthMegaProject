import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ContactForm from './WaqasComponents/ContactForm';
import ContactDetails from './WaqasComponents/ContactDetails';

function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo width="50px" />
        </Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </li>
          <li className="relative group">
            <Link
              to="/management"
              className="text-white hover:text-gray-300 focus:outline-none flex items-center"
            >
              Management <span className="ml-1">▼</span>
            </Link>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
              <Link
                to="/management/accounts"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Accounts Department
              </Link>
              <Link
                to="/management/engineering"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Engineering Department
              </Link>
            </div>
          </li>
          <li className="relative group">
            <Link
              to="/services"
              className="text-white hover:text-gray-300 focus:outline-none flex items-center"
            >
              Services <span className="ml-1">▼</span>
            </Link>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
              <Link
                to="/services/health"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Health Services
              </Link>
              <Link
                to="/services/hostel"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Hostel Services
              </Link>
            </div>
          </li>
          <li>
            <Link to="/downloads" className="text-white hover:text-gray-300">Downloads</Link>
          </li>
          <li className="relative group">
            <Link
              to="/support"
              className="text-white hover:text-gray-300 focus:outline-none flex items-center"
            >
              Support <span className="ml-1">▼</span>
            </Link>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
              <button
                onClick={openForm}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Contact Form
              </button>
              <button
                onClick={openModal}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Contact Info
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-sm w-full">
            <ContactForm />
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Contact Info Modal using ContactDetails Component */}
      <ContactDetails isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
}

export default Navbar;