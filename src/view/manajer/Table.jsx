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
                <strong>Username:</strong> {username}
              </p>
              <p>
                <strong>Password:</strong> {password}
              </p>
              <p>
                <strong>Nama Lengkap:</strong> {nama_lengkap}
              </p>
              <p>
                <strong>NIK:</strong> {nik}
              </p>
              <p>
                <strong>Tanggal Lahir:</strong> {tanggal_lahir}
              </p>
              <p>
                <strong>Phone:</strong> {phone}
              </p>
              <p>
                <strong>Alamat:</strong> {alamat}
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
    <tr className="table-row" onClick={() => onUserClick(user)}>
      <td>
        <img className="profpic" src={image_url} alt="profile picture"></img>
      </td>
      <td>{username}</td>
      <td>{nama_lengkap}</td>
      <td>{nik}</td>
      <td>{phone}</td>
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

      <div className='d-flex flex-column justify-content-left align-items-center bg-light vh-100'>
				<h3 className='my-3' style={{fontSize:30, fontWeight: 'bold'}}>Daftar Kurir</h3>
					<div className='z-0 w-50 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
            <AddAccount/>
            {/* <div className="table"> */}
              <table className="table table-hover table-striped">
                <thead className='bg-light sticky-top align-middle'>
                  <tr className='table-primary'>
                    <th scope="col"></th>
                    <th scope="col">Username</th>
                    <th scope="col">Nama Lengkap</th>
                    <th scope="col">NIK</th>
                    <th scope="col">Phone</th>
                  </tr>
                </thead>

                <tbody>
                  {dataKurir.map((user) => (
                    <InnerData key={user.username} user={user} onUserClick={handleUserClick} />
                  ))}
                </tbody>
              </table>
            {/* </div> */}
          </div>
        </div>

      {/* Add jQuery and Bootstrap JS using CDN links at the end of your HTML */}
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default Table;
