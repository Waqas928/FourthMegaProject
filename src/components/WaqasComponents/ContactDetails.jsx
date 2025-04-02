import React from 'react';

function ContactDetails({ isOpen, onClose }) {
  if (!isOpen) return null;  // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <strong>Phone Number: </strong> 
            <a 
              href="tel:+923126318724" 
              className="text-blue-500 hover:underline"
            >
              923126318724
            </a>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <strong>Email Address: </strong> 
            <a 
              href="mailto:mwbkkj@gmail.com" 
              className="text-blue-500 hover:underline"
            >
              mwbkkj@gmail.com
            </a>
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ContactDetails;
