import React from "react";

function AddAccount() {
  return (
    <div>
      <div className="button">
        <div className="bleft"></div>
        <button className="button-28" data-bs-toggle="modal" data-bs-target="#exampleModal">
            + Tambah Kurir
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

            <div className="modal-body">
              <div className="left-side">

              <div class="form-floating mb-3">
                <input type="username" class="form-control" id="floatingUsername" placeholder="Username"/>
                <label for="floatingInput">Username</label>
              </div>

              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating">
                <input type="fullname" class="form-control" id="floatingFullname" placeholder="Fullname"/>
                <label for="floatingPassword">Nama Lengkap</label>
              </div>

              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div>
                <label for="datiInput">Tanggal Lahir</label>
                <input type="date"/>
              </div>

              <div class="form-floating">
                <input type="phone" class="form-control" id="floatingPhone" placeholder="Phone"/>
                <label for="floatingPhone">Phone</label>
              </div>

              <div class="form-floating">
                <input type="address" class="form-control" id="floatingAddress" placeholder="Address"/>
                <label for="floatingAddress">Address</label>
              </div>

              </div>
              
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
