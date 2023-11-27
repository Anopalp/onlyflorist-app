import { useEffect, useState } from 'react'
import Read from './Read'
import supabase from '../../config/supabaseClient'
import NavbarKurir from '../NavbarKurir'

function DaftarPengirimanKurir() {
	const [data, setData] = useState([])
	const [isDetail, setIsDetail] = useState(false)
	const [selectedId, setSelectedId] = useState(null)
	const [fetchError, setFetchError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

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
				.from('dataPengiriman')
				.select()
				.eq('kurir', username)

			if (error) {
				setFetchError(error.message)
			}

			if (data) {
				setData(data)
			}
			setIsLoading(false)
		}

		fetchData()
	}, [])

	const handleDetailPengiriman = (id) => {
		setIsDetail(true)
		setSelectedId(id)
	}

	const closePopUp = () => {
		setIsDetail(false)
	}

	return (
		<div>
			<NavbarKurir />
			<div className='d-flex flex-column justify-content-left align-items-center vh-100'>
				<h3
					className='my-3'
					style={{ fontSize: 30, fontWeight: 'bold', color: '#29335c' }}
				>
					Daftar Pengiriman
				</h3>
				<div className='z-0 w-75 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
					{isLoading ? (
						<div className='d-flex justify-content-center py-5'>
							<div className='spinner-border' role='status'></div>
						</div>
					) : (
						<>
							<table className='table table-striped table-hover'>
								<thead className='bg-light sticky-top align-middle'>
									<tr className='table-primary'>
										<th style={{ color: '#29335c' }}>ID</th>
										<th style={{ color: '#29335c' }}>Alamat Pelanggan</th>
										<th style={{ color: '#29335c' }}>Bunga</th>
										<th style={{ color: '#29335c' }}>Telp</th>
										<th style={{ color: '#29335c' }}>Catatan</th>
										<th style={{ color: '#29335c' }}>Status Pengiriman</th>
									</tr>
								</thead>
								<tbody>
									{data.map((d) => (
										<tr key={d.id} onClick={() => handleDetailPengiriman(d.id)}>
											<td style={{ color: '#29335c' }}>{d.id}</td>
											<td style={{ color: '#29335c' }}>
												{d.alamat_pengiriman}
											</td>
											<td style={{ color: '#29335c' }}>{d.jenis_bunga}</td>
											<td style={{ color: '#29335c' }}>
												{d.nomor_telp_pelanggan}
											</td>
											<td style={{ width: '600px', color: '#29335c' }}>
												{d.catatan ? d.catatan : '-'}
											</td>
											<td style={{ color: '#29335c' }}>
												{d.status_pengiriman}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</>
					)}
					{!isLoading && fetchError && (
						<div className='alert alert-danger text-center'>{fetchError}</div>
					)}
					{!isLoading && data.length === 0 && (
						<div className='alert alert-warning text-center'>
							Tidak ada pengiriman
						</div>
					)}
				</div>
				{isDetail ? <Read close={closePopUp} id={selectedId} /> : null}
			</div>
		</div>
	)
}

export default DaftarPengirimanKurir
