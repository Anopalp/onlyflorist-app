import supabase from '../../config/supabaseClient'
import React, { useEffect, useState } from 'react'

function ReadRiwayat({ close, id }) {
	const [data, setData] = useState([])
	// const {id} = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const {
				data: {
					session: {
						user: { email },
					},
				},
			} = await supabase.auth.getSession()

			const username = email.split('@')[0]
			console.log(username)

			const { data, error } = await supabase
				.from('dataRiwayat')
				.select()
				.eq('kurir', username)
				.eq('id', id)

			console.log(data, error)
			if (error) {
				console.log(error)
			}

			if (data) {
				setData(data[0])
			}
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
					
					<div className='mb-3'>
						<strong style={{color: "#29335c"}}>ID Pengiriman</strong>
						<output className='form-control' style={{color: "#29335c"}}>{data.id}</output>
					</div>
					<div className='mb-3'>
						<strong style={{color: "#29335c"}}>Alamat Pengiriman</strong>
						<output className='form-control' style={{color: "#29335c"}}>{data.alamat_pengiriman}</output>
					</div>
					<div className='mb-3'>
						<strong style={{color: "#29335c"}}>Jenis Bunga</strong>
						<output className='form-control' style={{color: "#29335c"}}>{data.jenis_bunga}</output>
					</div>
					<div className='mb-3'>
						<strong style={{color: "#29335c"}}>No. Telp Pelanggan</strong>
						<output className='form-control' style={{color: "#29335c"}}>
							{data.nomor_telp_pelanggan}
						</output>
					</div>
					<div className='mb-3'>
						<strong style={{color: "#29335c"}}>Catatan</strong>
						<output className='form-control' style={{color: "#29335c"}}>{data.catatan}</output>
					</div>
					<div className='mb-3'>
						<strong style={{color: "#29335c"}}>Kurir</strong>
						<output className='form-control' style={{color: "#29335c"}}>{data.kurir}</output>
					</div>
					{data.laporanMasalah != null ? (
						<div className='mb-3'>
							<strong style={{color: "#29335c"}}>Laporan Masalah</strong>
							<output className='form-control' style={{color: "#29335c"}}>{data.laporan_masalah}</output>
						</div>
					) : null}
					<div className='mb-4'>
						<strong style={{color: "#29335c"}}>Status Pengiriman</strong>
						<output className='form-control' style={{color: "#29335c"}}>Delivered</output>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReadRiwayat
