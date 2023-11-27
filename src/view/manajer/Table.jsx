/* eslint-disable */

import React, { useState } from "react";
import supabase from "../../config/supabaseClient";
import AddAccount from "./AddAccount";
import "./Table.css"


// Separate Modal component
function CustomModal({ user }) {
  const { username, password, nama_lengkap, nik, phone, alamat, tanggal_lahir, image_url } = user;
  

  const handleDelete = async () => {
    try {
      const { dataPengiriman } = await supabase
        .from('dataPengiriman')
        .delete()
        .eq('kurir', username);
  
      const { data, error } = await supabase
        .from('dataKurir')
        .delete()
        .eq('username', username);
  
      if (error) {
        console.log(error);
      }
  
      if (data) {
        console.log(data);
      }
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div
      className="modal fade"
      id={username}
      tabIndex="-1"
      aria-labelledby={`${username}Label`}
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          
            <button
              type="button"
              className="btn-close ms-auto"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          
          <div className="modal-body profile-modal">
            <div className="profile-header">
              <img className="profile-pic" src={image_url} alt="profile picture"></img>
              <h3 className="profile-name">{username}</h3>
            </div>

            <div className="profile-data">
              <p>
                <strong style={{ color:"#29335c" }}>Username</strong> 
                <output className='form-control' style={{ color:"#29335c" }}>{username}</output>
              </p>
              <p>
                <strong style={{ color:"#29335c" }}>Password</strong> 
                <output className='form-control' style={{ color:"#29335c" }}>{password}</output>
              </p>
              <p>
                <strong style={{ color:"#29335c" }}>Nama Lengkap</strong> 
                <output className='form-control' style={{ color:"#29335c" }}>{nama_lengkap}</output>
              </p>
              <p>
                <strong style={{ color:"#29335c" }}>NIK</strong> 
                <output className='form-control' style={{ color:"#29335c" }}>{nik}</output>
              </p>
              <p>
                <strong style={{ color:"#29335c" }}>Tanggal Lahir</strong> 
                <output className='form-control' style={{ color:"#29335c" }}>{tanggal_lahir}</output>
              </p>
              <p>
                <strong style={{ color:"#29335c" }}>Phone</strong> 
                <output className='form-control' style={{ color:"#29335c" }}>{phone}</output>
              </p>
              <p>
                <strong style={{ color:"#29335c" }}>Alamat</strong> 
                <output className='form-control' style={{ color:"#29335c" }}>{alamat}</output>
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger me-auto" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

// Table component
function InnerData({ user, onUserClick }) {
  const { username, nama_lengkap, nik, phone, image_url } = user;

  return (
    <tr className="table-row align-middle" onClick={() => onUserClick(user)}>
      <td>
        <img className="profpic" src={image_url} alt="profile picture"></img>
      </td>
      <td style={{color: "#29335c"}}>{username}</td>
      <td style={{color: "#29335c"}}>{nama_lengkap}</td>
      <td style={{color: "#29335c"}}>{nik}</td>
      <td style={{color: "#29335c"}}>{phone}</td>
    </tr>
  );
}

function Table({ dataKurir }) {
  // eslint-disable-next-line no-unused-vars
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    const modal = new window.bootstrap.Modal(document.getElementById(user.username));
    modal.show();
  };

  return (
    <div>
      {/* Render the modals outside the table */}
      {dataKurir.map((user) => (
        <CustomModal key={user.username} user={user} />
      ))}

      <div className='d-flex flex-column justify-content-left align-items-center vh-100'>
				<h3 className="my-3" style={{ fontSize: 30, fontWeight: "bold", color:"#29335c" }}>Daftar Kurir</h3>
					<div className='z-0 w-50 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
            <AddAccount/>
              <table className="table table-hover table-striped">
                <thead className='bg-light sticky-top align-middle'>
                  <tr className='table-primary'>
                    <th scope="col"></th>
                    <th scope="col" style={{color: "#29335c"}}>Username</th>
                    <th scope="col" style={{color: "#29335c"}}>Nama Lengkap</th>
                    <th scope="col" style={{color: "#29335c"}}>NIK</th>
                    <th scope="col" style={{color: "#29335c"}}>Phone</th>
                  </tr>
                </thead>

                <tbody>
                  {dataKurir.map((user) => (
                    <InnerData key={user.username} user={user} onUserClick={handleUserClick} />
                  ))}
                </tbody>
              </table>
          </div>
        </div>

      {/* Add jQuery and Bootstrap JS using CDN links at the end of your HTML */}
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default Table;
