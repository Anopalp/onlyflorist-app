import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DashboardManajer() {
  const [data, setData] = useState([])
  const {id} = useParams();

  useEffect(()=> {
      axios.get('http://localhost:3000/pengiriman/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <h4 class="text-center p-3">Halo Sumarno, daftar pengiriman kamu hari ini adalah </h4>
      <div class="card-container w-50 mx-auto my-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="card w-75 text-center mx-auto my-5">
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
          <div class="col-lg-6">
            <div class="card w-75 text-center mx-auto my-5">
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
          <div class="buttons-container">
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

export default DashboardManajer