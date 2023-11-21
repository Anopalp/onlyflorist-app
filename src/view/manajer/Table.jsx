/* eslint-disable */

import React, { useState } from "react";
import supabase from "../../config/supabaseClient";
import AddAccount from "./AddAccount";


// Separate Modal component
function CustomModal({ user }) {
  const { username, nama_lengkap, nik, phone } = user;

  const handleDelete = async () => {
    try {
      const { dataPengiriman } = await supabase
        .from('dataPengiriman')
        .delete()
        .eq('kurir', username);
  
      const { dataCoba, errorDataCoba } = await supabase
        .from('coba2_dataPengiriman')
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
          <div className="modal-header">
            <h5 className="modal-title" id={`${username}Label`}>
              {nama_lengkap} Details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Username:</strong> {username}
            </p>
            <p>
              <strong>Nama Lengkap:</strong> {nama_lengkap}
            </p>
            <p>
              <strong>NIK:</strong> {nik}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleDelete}>
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
  const { username, nama_lengkap, nik, phone } = user;

  return (
    <tr onClick={() => onUserClick(user)}>
      <td>
        
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
