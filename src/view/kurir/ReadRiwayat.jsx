import supabase from '../../config/supabaseClient'
import { useEffect, useState } from 'react'

function ReadRiwayat({ close, id }) {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	// const {id} = useParams();

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
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
				.select('*, dataKurir (nama_lengkap)')
				.eq('kurir', username)
				.eq('id', id)

			console.log(data, error)
			if (error) {
				console.log(error)
			}

			if (data[0].laporan_masalah) {
				const laporan = await supabase
					.from('dataLaporan')
					.select('laporan_masalah')
					.eq('id', data[0].laporan_masalah)

				setData({
					...data[0],
					laporan_masalah: laporan.data[0].laporan_masalah,
					id_laporan: data[0].laporan_masalah,
				})
			} else {
				setData(...data)
			}
			setIsLoading(false)
		}

		fetchData()
	}, [id])

	return (
		<div className='modal d-block' tabIndex='-1' role='dialog' id='modalSignin'>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content rounded-4 shadow'>
					<div className='modal-header p-1 pb-4 border-bottom-0'>
						<h3 style={{ fontSize: 30, fontWeight: 'bold', color: '#29335c' }}>
							Detail Pengiriman
						</h3>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
							onClick={close}
						></button>
					</div>

					{isLoading ? (
						<div className='d-flex justify-content-center py-5'>
							<div className='spinner-border' role='status'></div>
						</div>
					) : (
						<>
							<div className='d-flex align-items-center mb-4'>
								<img
									style={{ width: '120px', borderRadius: '50%' }}
									src={data.image_url}
									alt='profile picture'
								></img>
								<h3
									style={{
										fontSize: 30,
										fontWeight: 'bold',
										color: '#29335c',
										marginLeft: '10%',
									}}
								>
									{data.jenis_bunga}
								</h3>
							</div>
							<div className='mb-3'>
								<strong style={{ color: '#29335c' }}>ID Pengiriman</strong>
								<output className='form-control' style={{ color: '#29335c' }}>
									{data.id}
								</output>
							</div>
							<div className='mb-3'>
								<strong style={{ color: '#29335c' }}>Alamat Pengiriman</strong>
								<output className='form-control' style={{ color: '#29335c' }}>
									{data.alamat_pengiriman}
								</output>
							</div>
							<div className='mb-3'>
								<strong style={{ color: '#29335c' }}>No. Telp Pelanggan</strong>
								<output className='form-control' style={{ color: '#29335c' }}>
									{data.nomor_telp_pelanggan}
								</output>
							</div>
							<div className='mb-3'>
								<strong style={{ color: '#29335c' }}>Catatan</strong>
								<output className='form-control' style={{ color: '#29335c' }}>
									{data.catatan}
								</output>
							</div>
							<div className='mb-3'>
								<strong style={{ color: '#29335c' }}>Kurir</strong>
								<output className='form-control' style={{ color: '#29335c' }}>
									{data.dataKurir?.nama_lengkap}
								</output>
							</div>
							{data.laporan_masalah !== null ? (
								<div className='mb-3'>
									<strong style={{ color: '#29335c' }}>Laporan Masalah</strong>
									<output className='form-control' style={{ color: '#29335c' }}>
										{data.laporan_masalah}
									</output>
								</div>
							) : null}
							<div className='mb-4'>
								<strong style={{ color: '#29335c' }}>Status Pengiriman</strong>
								<output className='form-control' style={{ color: '#29335c' }}>
									Delivered
								</output>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default ReadRiwayat
