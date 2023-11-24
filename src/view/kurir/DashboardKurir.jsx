/* eslint-disable no-unused-vars */
import React from 'react'
import "../dashboardStyles.css";
import { Link } from 'react-router-dom';
import NavbarKurir from '../NavbarKurir';

function DashboardKurir() {
  return (
    <div>
      <NavbarKurir/>
      <h4 className="text-center p-3">Halo Sumarno, selamat Pagi!</h4>
      <div className="card-container w-75 mx-auto my-5">
      <div>
          <h3>Pengiriman teratas</h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card w-75 text-center mx-auto my-auto">
              <img src="..\src\assets\Sansevieria.png" className="card-img-top" alt="Bunga" />
              <div className="card-body">
                <h5 className="card-title">Sansevieria</h5>
                <p>Budi P</p>
                <p>Jl. Tubagus Islamiyyah no.9</p>
                <p>Sumarno</p>
                <p>086542293839</p>
                <a href="#" className="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card w-75 text-center mx-auto my-auto">
              <img src="..\src\assets\Sansevieria.png" className="card-img-top" alt="Bunga" />
              <div className="card-body">
                <h5 className="card-title">Sansevieria</h5>
                <p>Carica Papaya</p>
                <p>Jl. Tubagus Islamiyyah no.18</p>
                <p>Sumarno</p>
                <p>086542729739</p>
                <a href="#" className="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card w-75 text-center mx-auto my-auto">
              <img src="..\src\assets\Sansevieria.png" className="card-img-top" alt="Bunga" />
              <div className="card-body">
                <h5 className="card-title">Sansevieria</h5>
                <p>Carica Papaya</p>
                <p>Jl. Tubagus Islamiyyah no.18</p>
                <p>Sumarno</p>
                <p>086542729739</p>
                <a href="#" className="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div className="buttons-container mt-3">
            <div>
              <Link to={'/daftar-pengiriman-kurir'} class='btn btn-secondary'>See More</Link>
            </div>
            {/* <a href='/daftar-pengiriman-kurir' class="btn btn-primary">see more</a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

function Card(){
  return (
    <div className='card'>
      <div className='card-info'>
        <p>ID Pengiriman: 1368319827</p>
        <p>Alamat: Jalan Tubagus Islamiyyah No.5</p>
        <p>No Telp. Pelanggan: 0872639173887</p>
      </div>
      <ButtonDetailPengiriman/>
    </div>
  )
}

function ButtonDetailPengiriman() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <button className='button-detail-pengiriman'>
        <span className="material-symbols-outlined">
        arrow_forward_ios
        </span>
      </button>
    </>
  )
}

export default DashboardKurir