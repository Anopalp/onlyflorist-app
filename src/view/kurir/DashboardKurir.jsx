import React from 'react'
import "../dashboardStyles.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function DashboardKurir() {
  return (
    <div>
      <h4 class="text-center p-3">Halo Sumarno, selamat Pagi!</h4>
      <div class="card-container w-75 mx-auto my-5">
      <div>
          <h3>Pengiriman teratas</h3>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="card w-75 text-center mx-auto my-auto">
              <img src="..\src\assets\Sansevieria.png" class="card-img-top" alt="Bunga" />
              <div class="card-body">
                <h5 class="card-title">Sansevieria</h5>
                <p>Budi P</p>
                <p>Jl. Tubagus Islamiyyah no.9</p>
                <p>Sumarno</p>
                <p>086542293839</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card w-75 text-center mx-auto my-auto">
              <img src="..\src\assets\Sansevieria.png" class="card-img-top" alt="Bunga" />
              <div class="card-body">
                <h5 class="card-title">Sansevieria</h5>
                <p>Carica Papaya</p>
                <p>Jl. Tubagus Islamiyyah no.18</p>
                <p>Sumarno</p>
                <p>086542729739</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card w-75 text-center mx-auto my-auto">
              <img src="..\src\assets\Sansevieria.png" class="card-img-top" alt="Bunga" />
              <div class="card-body">
                <h5 class="card-title">Sansevieria</h5>
                <p>Carica Papaya</p>
                <p>Jl. Tubagus Islamiyyah no.18</p>
                <p>Sumarno</p>
                <p>086542729739</p>
                <a href="#" class="btn btn-primary">Lihat Detail</a>
              </div>
            </div>
          </div>
          <div class="buttons-container mt-3">
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
        <span class="material-symbols-outlined">
        arrow_forward_ios
        </span>
      </button>
    </>
  )
}

export default DashboardKurir