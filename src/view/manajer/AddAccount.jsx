/* eslint-disable */
import React, { useState } from "react";
import supabase from "../../config/supabaseClient";

const readImageAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

function AddAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nama_lengkap, setNamaLengkap] = useState('');
  const [nik, setNik] = useState('');
  const [tanggal_lahir, setTanggalLahir] = useState('');
  const [phone, setPhone] = useState('');
  const [alamat, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [formError, setFormError] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleShowFormModal = () => setShowFormModal(true);
  const handleCloseFormModal = () => setShowFormModal(false);
  const handleShowSuccessModal = () => setShowSuccessModal(true);
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username || !password || !nama_lengkap || !nik || !tanggal_lahir || !phone || !alamat || !image) {
      setFormError('Please fill in all the fields correctly');
      return
    }

    try {
      // Convert image to data URL
      let imageDataUrl = null;
      if (image) {
        imageDataUrl = await readImageAsDataURL(image);
      }

      const { data, error } = await supabase
      .from('dataKurir')
      .insert([{username, password, nama_lengkap, nik, phone, alamat, tanggal_lahir, image_url: imageDataUrl}])

      if (data) {
        console.log(data);
        setFormError(null);
      }

      const mail = username + "@fakemail.com";
      const pass = password;

      const { dataLogIn, errorLogIn } = await supabase.auth.signUp(
        {
          email: mail,
          password: pass
        }
      )

      handleCloseFormModal();
      handleShowSuccessModal();
    } catch (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly');
    }
    
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  return (
    <div>
      <div className="button d-flex my-2">
        <div className="bleft"></div>
        <button className="btn btn-primary ms-auto px-4 rounded-5" onClick={() => setShowFormModal(true)}>
          Add +
        </button>
        <div className="bright"></div>
      </div>

      <div
        className={`modal fade ${showFormModal ? "show" : ""}`}
        style={{ display: showFormModal ? "block" : "none" }}
        id="addAccountModal"
        tabIndex="-1"
        aria-labelledby="formModalLabel"
        aria-hidden={!showFormModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              
              <h1 className="modal-title fs-5" style={{ fontWeight: "bold", color:"#29335c" }} id="formModalLabel">
                Tambah Akun
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseFormModal}
              ></button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="floatingUsername" 
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                  <label htmlFor="username" style={{ color:"#29335c" }}>Username</label>
                </div>

                <div className="form-floating mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                  <label htmlFor="password" style={{ color:"#29335c" }}>Password</label>
                </div>

                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="floatingFullname" 
                    placeholder="Nama Lengkap"
                    onChange={(e) => setNamaLengkap(e.target.value)}
                    />
                  <label htmlFor="nama_lengkap" style={{ color:"#29335c" }}>Nama Lengkap</label>
                </div>

                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="floatingNik" 
                    placeholder="NIK"
                    onChange={(e) => setNik(e.target.value)}
                    />
                  <label htmlFor="nik" style={{ color:"#29335c" }}>NIK</label>
                </div>

                <div>
                  <label htmlFor="tanggal_lahir" style={{ color:"#29335c" }}>Tanggal Lahir</label>
                  <input className="mb-3 mx-3" type="date"
                  onChange={(e) => setTanggalLahir(e.target.value)}
                  />
                </div>

                <div className="form-floating">
                  <input 
                    type="text" 
                    className="form-control mb-3" 
                    id="floatingPhone" 
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label htmlFor="phone" style={{ color:"#29335c" }}>Phone</label>
                </div>

                <div className="form-floating">
                  <input 
                    type="text" 
                    className="form-control mb-3" 
                    id="floatingAddress" 
                    placeholder="Alamat"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label htmlFor="alamat" style={{ color:"#29335c" }}>Alamat</label>
                </div>

                <div>
                  <label style={{ color:"#29335c" }}>Simpan Gambar</label>
                  <input
                    className="mx-2"
                    type="file"
                    id="fileInput"
                    onChange={handleImageChange}
                  />
                </div>
              
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary rounded-5">
                  Save Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <div
        className={`modal fade ${showSuccessModal ? "show" : ""}`}
        style={{ display: showSuccessModal ? "block" : "none" }}
        tabIndex="-1"
        aria-labelledby="successModalLabel"
        aria-hidden={!showSuccessModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="successModalLabel">
                Success!
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseSuccessModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Account has been created and added to the database.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseSuccessModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
