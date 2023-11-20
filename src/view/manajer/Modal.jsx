import React from "react";

function Modal({ rowData, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Modal Content</h2>
        <p>Username: {rowData.username}</p>
        <p>Nama Lengkap: {rowData.nama_lengkap}</p>
        <p>NIK: {rowData.nik}</p>
        <p>Phone: {rowData.phone}</p>
      </div>
    </div>
  );
}

export default Modal;
