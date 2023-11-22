/* eslint-disable */
import React, { useState } from "react";
import supabase from "../../config/supabaseClient";

function AddAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nama_lengkap, setNamaLengkap] = useState('');
  const [nik, setNik] = useState('');
  const [tanggal_lahir, setTanggalLahir] = useState('');
  const [phone, setPhone] = useState('');
  const [alamat, setAddress] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username || !password || !nama_lengkap || !nik || !tanggal_lahir || !phone || !alamat) {
      setFormError('Please fill in all the fields correctly');
      return
    }

    try {
      const { data, error } = await supabase
      .from('dataKurir')
      .insert([{username, password, nama_lengkap, nik, phone, alamat, tanggal_lahir}])

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

      window.location.reload();
    } catch (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly');
    }

    
  }

  return (
    <div>
      <div className="button d-flex my-2">
        <div className="bleft"></div>
        <button className="btn btn-primary ms-auto px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add +
        </button>
        <div className="bright"></div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
              

                <div className="form-floating mb-3">
                  <label htmlFor="username">Username</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="floatingUsername" 
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-floating">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-floating">
                  <label htmlFor="nama_lengkap">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="floatingFullname" 
                    placeholder="Nama Lengkap"
                    onChange={(e) => setNamaLengkap(e.target.value)}
                    />
                </div>

                <div className="form-floating">
                  <label htmlFor="nik">NIK</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="floatingNik" 
                    placeholder="NIK"
                    onChange={(e) => setNik(e.target.value)}
                    />
                </div>

                <div>
                  <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
                  <input type="date"
                  onChange={(e) => setTanggalLahir(e.target.value)}
                  />
                </div>

                <div className="form-floating">
                  <label htmlFor="phone">Phone</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id="floatingPhone" 
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-floating">
                <label htmlFor="alamat">Alamat</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="floatingAddress" 
                    placeholder="Alamat"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Save Account
                </button>

              </div>
              
              {formError && <p className="error">{formError}</p>}
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
