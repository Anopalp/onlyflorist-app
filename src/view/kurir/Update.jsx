import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update() {
    // const [data, setData] = useState([])
    const {id} = useParams();

    const [values, setValues] = useState({
        alamatPengiriman: '',
        jenisBunga: '',
        noTelpPelanggan: '',
        catatan: '',
        kurir: '',
        statusPengiriman: ''
    })

    const options = [
        {label: "Pick-up", mark: 1},
        {label: "On the way", mark: 2},
        {label: "Delivered", mark: 3},
        {label: "On-hold", mark: 4}
    ]

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:3000/pengiriman/' + id)
        .then(res => {
            setValues(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/pengiriman/' + id, values)
        .then(res => {
            console.log(res);
            navigate('/daftar-pengiriman-kurir')
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-4 pt-3 pb-5 rounded-4'>
                <div className='modal-header p-1 pb-4 border-bottom-0'>
                    <h1 className='fw-bold mb-0 fs-2 text-center'>Update Pengiriman</h1>
                    <Link to={"/daftar-pengiriman-kurir/"}>
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                        onClick={close}
                    ></button>
                    </Link>
                </div>
            <form onSubmit={handleUpdate}>
                <div className='mb-2'>
                    <strong htmlFor='id'>ID Pengiriman</strong>
                    <output className='form-control'>{values.id}</output>
                </div>
                <div className='mb-2'>
                    <strong htmlFor='alamatPengiriman'>Alamat Pengiriman</strong>
                    <output className='form-control'>{values.alamatPengiriman}</output>
                </div>
                <div className='mb-2'>
                    <strong htmlFor='jenisBunga'>Jenis Bunga</strong>
                    <output className='form-control'>{values.jenisBunga}</output>
                </div>
                <div className='mb-2'>
                    <strong htmlFor='noTelpPelanggan'>No. Telp Pelanggan</strong>
                    <output className='form-control'>{values.noTelpPelanggan}</output>
                </div>
                <div className='mb-2'>
                    <strong htmlFor='catatan'>Catatan</strong>
                    <output className='form-control'>{values.catatan}</output>
                </div>
                <div className='mb-2'>
                    <strong htmlFor='kurir'>Kurir</strong>
                    <output className='form-control'>{values.kurir}</output>
                </div>
                <div className='mb-2'>
                    <strong htmlFor='laporanMasalah'>Laporan Masalah</strong>
                    <input type="text" name='name' className='form-control' placeholder='Masukkan laporan masalah'
                    value={values.laporanMasalah}
                    onChange={e => setValues({...values, laporanMasalah: e.target.value})}/>
                </div>
                <div className='mb-4'>
                    <strong htmlFor='status'>Status Pengiriman</strong>
                    {/* <input type="text" name='status' className='form-control' placeholder='Masukkan Status'
                    value={values.statusPengiriman}
                    onChange={e => setValues({...values, statusPengiriman: e.target.value})}/> */}
                    <select name='status' className='form-select' 
                    value={values.statusPengiriman}
                    onChange={e => setValues({...values, statusPengiriman: e.target.value})}>
                        {options.map(option => (
                            <option>{option.label}</option>
                        ))}
                    </select>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update
