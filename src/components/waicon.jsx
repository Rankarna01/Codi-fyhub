import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Button WhatsApp */}
      <button
        onClick={togglePopup}
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 duration-300 flex items-center gap-2"
      >
        <FaWhatsapp size={24} />
      </button>

      {/* Popup Chat */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-64 bg-white p-4 rounded-lg shadow-lg border border-gray-200 animate-fade-in">
          <p className="text-sm text-gray-800">
            Butuh bantuan? Chat dengan kami di WhatsApp!
          </p>
          <a
            href="https://wa.me/622275373233" // Ganti dengan nomor WA kamu
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 duration-300"
          >
            <FaWhatsapp size={20} className="mr-2" /> Chat Sekarang
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppPopup;
