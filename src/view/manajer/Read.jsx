import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import supabase from '../../config/supabaseClient'

function Read({ close, id }) {
	const [data, setData] = useState({})
	// const {id} = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase
				.from('dataPengiriman')
				.select('*, dataKurir (nama_lengkap)')
				.eq('id', id)
			if (error) console.log(error)
			setData(data[0])
		}

		fetchData()
	}, [id])

	return (
		<div className='modal d-block' tabIndex='-1' role='dialog' id='modalSignin'>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content rounded-4 shadow'>
					<div className='modal-header p-1 pb-4 border-bottom-0'>
					<h3 style={{ fontSize: 30, fontWeight: "bold", color:"#29335c" }}>Detail Pengiriman</h3>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
							onClick={close}
						></button>
					</div>

					{/* <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2 className='text-center my-3'>Detail Pengiriman</h2> */}
					<div className='mb-3'>
						<strong style={{ color:"#29335c" }}>ID Pengiriman</strong>
						<output className='form-control' style={{ color:"#29335c" }}>{data.id}</output>
					</div>
					<div className='mb-3'>
						<strong style={{ color:"#29335c" }}>Alamat Pengiriman</strong>
						<output className='form-control' style={{ color:"#29335c" }}>{data.alamat_pengiriman}</output>
					</div>
					<div className='mb-3'>
						<strong style={{ color:"#29335c" }}>Jenis Bunga</strong>
						<output className='form-control' style={{ color:"#29335c" }}>{data.jenis_bunga}</output>
					</div>
					<div className='mb-3'>
						<strong style={{ color:"#29335c" }}>No. Telp Pelanggan</strong>
						<output className='form-control' style={{ color:"#29335c" }}>
							{data.nomor_telp_pelanggan}
						</output>
					</div>
					<div className='mb-3'>
						<strong style={{ color:"#29335c" }}>Catatan</strong>
						<output className='form-control' style={{ color:"#29335c" }}>
							{data.catatan ? data.catatan : '-'}
						</output>
					</div>
					<div className='mb-3'>
						<strong style={{ color:"#29335c" }}>Kurir</strong>
						<output className='form-control' style={{ color:"#29335c" }}>
							{data.dataKurir?.nama_lengkap}
						</output>
					</div>
					{data.laporanMasalah != null ? (
						<div className='mb-3'>
							<strong style={{ color:"#29335c" }}>Laporan Masalah</strong>
							<output className='form-control' style={{ color:"#29335c" }}>{data.laporan_masalah}</output>
						</div>
					) : null}
					<div className='mb-4'>
						<strong style={{ color:"#29335c" }}>Status Pengiriman</strong>
						<output className='form-control' style={{ color:"#29335c" }}>{data.status_pengiriman}</output>
					</div>
					{/* <Link to={'/daftar-pengiriman-kurir/update/' + id} className='btn btn-lg rounded-3 btn-success'>Edit</Link> */}
				</div>
			</div>
		</div>
	)
}

export default Read
