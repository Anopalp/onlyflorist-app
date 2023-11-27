import supabase from '../../config/supabaseClient'
import { useEffect, useState } from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import ReadRiwayat from './ReadRiwayat'
import NavbarManajer from '../NavbarManajer'

function RiwayatPengirimanManajer() {
	const [data, setData] = useState([])
	const [isDetail, setIsDetail] = useState(false)
	const [selectedId, setSelectedId] = useState(null)
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			const { data, error } = await supabase.from('dataRiwayat').select(`
        *, dataKurir (nama_lengkap)
      `)

			if (error) {
				console.log(error)
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
			<NavbarManajer />
			<div className='d-flex flex-column justify-content-left align-items-center vh-100'>
				<h3
					className='my-3'
					style={{ fontSize: 30, fontWeight: 'bold', color: '#29335c' }}
				>
					Riwayat Pengiriman
				</h3>
				<div className='z-0 w-75 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
					{/* <div className='d-flex justify-content-end '>
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                </div> */}
					{isDetail ? <ReadRiwayat close={closePopUp} id={selectedId} /> : null}

					{isLoading ? (
						<div className='d-flex justify-content-center py-5'>
							<div className='spinner-border' role='status'></div>
						</div>
					) : (
						<>
							<Form>
								<InputGroup className='my-3'>
									<FormControl
										onChange={(e) => setSearch(e.target.value)}
										placeholder='Search pengiriman'
									/>
								</InputGroup>
							</Form>

							<table className='table table-striped table-hover'>
								<thead className='bg-light sticky-top align-middle'>
									<tr className='table-primary'>
										<th style={{ color: '#29335c' }}>ID</th>
										<th style={{ color: '#29335c' }}>Alamat Pengiriman</th>
										<th style={{ color: '#29335c' }}>Bunga</th>
										<th style={{ color: '#29335c' }}>Telp</th>
										<th style={{ color: '#29335c' }}>Kurir</th>
										<th style={{ color: '#29335c' }}>Status Pengiriman</th>
									</tr>
								</thead>
								<tbody>
									{data
										.filter((d) => {
											return search.toLowerCase() === ''
												? d
												: d.kurir
														.toLowerCase()
														.includes(search.toLowerCase()) ||
														d.jenis_bunga
															.toLowerCase()
															.includes(search.toLowerCase())
										})
										.map((d) => (
											<tr
												key={d.id}
												onClick={() => handleDetailPengiriman(d.id)}
											>
												<td style={{ color: '#29335c' }}>{d.id}</td>
												<td style={{ color: '#29335c' }}>
													{d.alamat_pengiriman}
												</td>
												<td style={{ color: '#29335c' }}>{d.jenis_bunga}</td>
												<td style={{ color: '#29335c' }}>
													{d.nomor_telp_pelanggan}
												</td>
												<td style={{ color: '#29335c' }}>
													{d.dataKurir?.nama_lengkap}
												</td>
												<td style={{ color: '#29335c' }}>Delivered</td>
											</tr>
										))}
								</tbody>
							</table>
						</>
					)}
					{!isLoading && data.length === 0 && (
						<div className='alert alert-warning text-center'>
							Tidak ada pengiriman
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default RiwayatPengirimanManajer
