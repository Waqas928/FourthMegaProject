import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import ContactDetails from '../WaqasComponents/ContactDetails';
import ContactForm from '../WaqasComponents/ContactForm';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="300px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  © Copyright 2025. All Rights Reserved by Waqas & DevUI.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12 mb-10 lg:mb-0">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Waqas Degrees
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 whitespace-nowrap"
                    to="/"
                  >
                    MS Management In Finance
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 whitespace-nowrap"
                    to="/"
                  >
                    MSc Finance (Gold Medalist)
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 whitespace-nowrap"
                    to="/"
                  >
                    BSc Comp Science (1st Position)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/5">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <button
                    onClick={openForm}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact Form
                  </button>
                </li>
                <li className="mb-4">
                  <button
                    onClick={openModal}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact Info
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Render ContactForm if isFormOpen is true */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <ContactForm />
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close"
            >
              &times; {/* HTML entity for the cross symbol */}
            </button>
          </div>
        </div>
      )}

      {/* ContactInfo Modal */}
      <ContactDetails isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default Footer;

