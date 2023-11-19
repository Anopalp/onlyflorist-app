import React from 'react'
import "../dashboardStyles.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function DashboardKurir() {
  return (
    <div>
      {/* <div className='judul-dashboard'>
        <h1>OnlyFlorist</h1>
      </div> */}
      <p className='sapaan'>Hai nama, daftar pengiriman kamu hari ini adalah</p>
      <div className='pengiriman-container'>
        <div className='pengiriman-info'>
          <div className='card-container'>
            <div className='judul-container'>
              <h3>Pengiriman yang masih berjalan</h3>
            </div>
            <div className='card-grid'>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className='buttons-container'>
            <div>
              <Button variant="secondary" className='ongoing-button'>Ongoing</Button>
              <Button variant="secondary" className='done-button'>Done</Button>
            </div>
            <div>
              {/* <Button variant="secondary" className='see-more-button'>See More</Button> */}
              <Link to={'/daftar-pengiriman-kurir'} className='btn btn-secondary'>See More</Link>
            </div>
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