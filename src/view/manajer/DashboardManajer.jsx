import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DashboardManajer() {
  return (
    <div>
      <h4 class="text-center p-3">Halo MANAJER TERCINTAHH, selamat Pagi!</h4>
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
            <div class="card w-75 mx-auto my-auto">
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
              <Link to={'/daftar-pengiriman-manajer'} class='btn btn-secondary'>See More</Link>
            </div>
            {/* <a href='/daftar-pengiriman-kurir' class="btn btn-primary">see more</a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardManajer