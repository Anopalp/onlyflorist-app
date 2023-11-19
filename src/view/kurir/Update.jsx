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
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Perbarui Pengiriman</h1>
            <form onSubmit={handleUpdate}>
                <div className='mb-2'>
                    <label htmlFor='alamatPengiriman'>Alamat</label>
                    <input type="text" name='name' className='form-control' placeholder='Masukkan Alamat'
                    value={values.alamatPengiriman}
                    onChange={e => setValues({...values, alamatPengiriman: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='jenisBunga'>Bunga</label>
                    <input type="text" name='jenisBunga' className='form-control' placeholder='Masukkan Jenis Bunga'
                    value={values.jenisBunga}
                    onChange={e => setValues({...values, jenisBunga: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='noTelpPelanggan'>Telp</label>
                    <input type="text" name='noTelpPelanggan' className='form-control' placeholder='Masukkan Nomor Telp'
                    value={values.noTelpPelanggan}
                    onChange={e => setValues({...values, noTelpPelanggan: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='catatan'>Catatan</label>
                    <input type="text" name='catatan' className='form-control' placeholder='Masukkan Catatan'
                    value={values.catatan}
                    onChange={e => setValues({...values, catatan: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='kurir'>Kurir</label>
                    <input type="text" name='kurir' className='form-control' placeholder='Masukkan Kurir'
                    value={values.kurir}
                    onChange={e => setValues({...values, kurir: e.target.value})}/>
                </div>
                <div className='mb-4'>
                    <label htmlFor='status'>Status</label>
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
                <Link to={"/daftar-pengiriman-kurir/read/" + id} className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Update
