// src/components/Form.jsx
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(''); // State baru untuk pesan alert
  const [alertType, setAlertType] = useState('success'); // State baru untuk tipe alert (success/error)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showCustomAlert = (message, type = 'success') => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage('');
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Nomor WhatsApp Admin
    // Pastikan nomor ini adalah nomor WhatsApp yang aktif dan dalam format internasional (tanpa '+')
    const adminNumber = '6285835116946'; 

    // Memformat nomor telepon pengguna dari input form
    let userPhoneNumber = formData.phone.replace(/\D/g, ''); // Hapus semua karakter non-digit
    
    // Jika nomor pengguna dimulai dengan '0', ganti dengan '62'
    if (userPhoneNumber.startsWith('0')) {
      userPhoneNumber = '62' + userPhoneNumber.substring(1);
    } 
    // Jika nomor pengguna belum diawali dengan '62' dan panjangnya wajar (min 8, max 13 digit setelah 62)
    // Ini untuk kasus jika user sudah input tanpa 0, contoh: 81234567890
    else if (!userPhoneNumber.startsWith('62') && userPhoneNumber.length >= 8 && userPhoneNumber.length <= 13) {
      userPhoneNumber = '62' + userPhoneNumber;
    }
    // Jika user sudah input dengan 62 di depan atau format lainnya, biarkan saja.
    // Anda bisa tambahkan validasi lebih lanjut jika nomor tidak sesuai format.

    // Pesan yang akan dikirim ke WhatsApp, di-encode agar aman dalam URL
    const whatsappMessage = `Halo admin, saya ingin berdiskusi mengenai kebutuhan website. Berikut data diri saya:
    
Nama: ${formData.name}
No. Telp/WA: ${userPhoneNumber}
Subjek: ${formData.subject}
Pesan: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminNumber}&text=${encodedMessage}`;

    // --- DEBUGGING STEP: LOG THE URL ---
    console.log("Generated WhatsApp URL:", whatsappUrl);

    try {
      const newWindow = window.open(whatsappUrl, '_blank');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Ini mungkin terjadi jika pop-up diblokir oleh browser
        console.error("Pop-up diblokir atau jendela tidak dapat dibuka.");
        showCustomAlert("Pop-up diblokir atau WhatsApp tidak dapat dibuka. Harap izinkan pop-up dan pastikan WhatsApp terinstal.", "error");
      } else {
        showCustomAlert("Terima kasih! Kami akan segera menghubungi Anda kembali.", "success");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat membuka link WhatsApp:", error);
      showCustomAlert("Terjadi kesalahan saat membuka WhatsApp. Silakan coba lagi.", "error");
    }

    // Mengosongkan form setelah submit (opsional)
    setFormData({
      name: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-8">
      {/* Flash Alert */}
      {showAlert && (
        <div className={`fixed top-4 left-1/2 -translate-x-1/2 ${alertType === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in-up`}>
          {alertMessage}
        </div>
      )}

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Bagian Kiri: Teks dan Logo */}
        <div className="lg:w-1/2">
          <p className="text-blue-400 font-semibold mb-2">Hubungi Kami</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Mari Diskusi Kebutuhan Anda
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Butuh membangun baru atau upgrade sistem? Kami siap bantu. Hubungi kami sekarang untuk detail lebih lanjut.
          </p>
          <p className="text-gray-400 mb-4">Dipercaya oleh beberapa Perusahaan Besar di Indonesia</p>
          <div className="flex flex-wrap items-center gap-6 opacity-60">
            {/* Ini adalah placeholder untuk logo */}
            <span className="text-gray-400 text-lg font-bold">XMXYG OSS</span>
            <span className="text-gray-400 text-lg font-bold">RAN FUNCTION DESIGN</span>
            <span className="text-gray-400 text-lg font-bold">Alkestra</span>
            <span className="text-gray-400 text-lg font-bold">LOGISIA</span>
          </div>
        </div>

        {/* Bagian Kanan: Form */}
        <div className="lg:w-1/2 p-8 rounded-3xl bg-gray-900 shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Nama Anda</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">Nomor Telepon atau WhatsApp</label>
              <input
                type="tel" 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subjek</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                required
              >
                <option value="" disabled>Pilih salah satu...</option>
                <option value="Website Landing Page">Website Landing Page</option>
                <option value="Website Dinamis/Sistem">Website Dinamis/Sistem</option>
                <option value="Website E-commerce dan Toko">Website E-commerce dan Toko</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Pesan Anda</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
              >
                KIRIM
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
