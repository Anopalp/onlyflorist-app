import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseClient'

function ReadRiwayat({ close, id }) {
	const [data, setData] = useState([])
	// const {id} = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase
				.from('dataRiwayat')
				.select()
				.eq('id', id)
			if (error) console.log(error)
			setData(...data)
		}

		fetchData()
	}, [])

	return (
		<div className='modal d-block' tabIndex='-1' role='dialog' id='modalSignin'>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content rounded-4 shadow'>
					<div className='modal-header p-1 pb-4 border-bottom-0'>
						<h1 className='fw-bold mb-0 fs-2'>Detail Pengiriman</h1>
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
						<strong>ID Pengiriman</strong>
						<output className='form-control'>{data.id}</output>
					</div>
					<div className='mb-3'>
						<strong>Alamat Pengiriman</strong>
						<output className='form-control'>{data.alamat_pengiriman}</output>
					</div>
					<div className='mb-3'>
						<strong>Jenis Bunga</strong>
						<output className='form-control'>{data.jenis_bunga}</output>
					</div>
					<div className='mb-3'>
						<strong>No. Telp Pelanggan</strong>
						<output className='form-control'>
							{data.nomor_telp_pelanggan}
						</output>
					</div>
					<div className='mb-3'>
						<strong>Catatan</strong>
						<output className='form-control'>
							{data.catatan ? data.catatan : '-'}
						</output>
					</div>
					<div className='mb-3'>
						<strong>Kurir</strong>
						<output className='form-control'>{data.kurir}</output>
					</div>
					{data.laporanMasalah != null ? (
						<div className='mb-3'>
							<strong>Laporan Masalah</strong>
							<output className='form-control'>{data.laporan_masalah}</output>
						</div>
					) : null}
					<div className='mb-4'>
						<strong>Status Pengiriman</strong>
						<output className='form-control'>Delivered</output>
					</div>
					{/* <Link to={'/daftar-pengiriman-kurir/update/' + id} className='btn btn-lg rounded-3 btn-success'>Edit</Link> */}
				</div>
			</div>
		</div>
	)
}

export default ReadRiwayat
