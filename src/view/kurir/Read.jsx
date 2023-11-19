import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const [data, setData] = useState([])
    const {id} = useParams();

    useEffect(()=> {
        axios.get('http://localhost:3000/pengiriman/' + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h2>Detail Pengiriman</h2>
            <div className='mb-2'>
                <strong>ID Pengiriman</strong>
                <output className='form-control'>{data.id}</output>
            </div>
            <div className='mb-2'>
                <strong>Alamat</strong>
                <output className='form-control'>{data.alamatPengiriman}</output>
            </div>
            <div className='mb-2'>
                <strong>Jenis Bunga</strong>
                <output className='form-control'>{data.jenisBunga}</output>
            </div>
            <div className='mb-2'>
                <strong>No. Telp Pelanggan</strong>
                <output className='form-control'>{data.noTelpPelanggan}</output>
            </div>
            <div className='mb-2'>
                <strong>Catatan</strong>
                <output className='form-control'>{data.catatan}</output>
            </div>
            <div className='mb-2'>
                <strong>Kurir</strong>
                <output className='form-control'>{data.kurir}</output>
            </div>
            <div className='mb-4'>
                <strong>Status Pengiriman</strong>
                <output className='form-control'>{data.statusPengiriman}</output>
            </div>
            <Link to={'/daftar-pengiriman-kurir/update/' + id} className='btn btn-success'>Edit</Link>
            <Link to="/daftar-pengiriman-kurir" className='btn btn-primary ms-3'>Back</Link>
        </div>
    </div>
  )
}

export default Read
