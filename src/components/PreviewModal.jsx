import React from "react";
import '../styles/components/PreviewModal.css'

const PreviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="preview-modal-overlay">
      <div className="preview-modal">
        <h2>Preview Website</h2>

        <p>
          Website ini masih dalam tahap <b>preview/demo</b> untuk menampilkan desain
          dan alur sistem booking.
        </p>

        <p>
          Fitur <b>Login, Registrasi, dan Pembayaran</b> belum aktif karena sistem
          belum terhubung ke database produksi.
        </p>

        <button className="preview-btn" onClick={onClose}>
          Tutup
        </button>
      </div>
    </div>
  );
};

export default PreviewModal;