import { useEffect, useState } from 'react'
import supabase from '../../config/supabaseClient'
// import { Link } from 'react-router-dom'
// import { IconButton } from '@mui/material'
// import { Info } from '@mui/icons-material'
import ReadRiwayat from './ReadRiwayat'
import NavbarKurir from '../NavbarKurir'

function RiwayatPengirimanKurir() {
	const [data, setData] = useState([])
	const [isDetail, setIsDetail] = useState(false)
	const [selectedId, setSelectedId] = useState(null)

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

			console.log(data, error)
			if (error) {
				console.log(error)
			}

			if (data) {
				setData(data)
			}
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
			<div className='d-flex flex-column justify-content-left align-items-center bg-light vh-100'>
				<h3 className='my-3' style={{ fontSize: 30, fontWeight: 'bold' }}>
					Riwayat Pengiriman
				</h3>
				<div className='z-0 w-75 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
					{/* <div className='d-flex justify-content-end '>
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                </div> */}
					{isDetail ? <ReadRiwayat close={closePopUp} id={selectedId} /> : null}
					<table className='table table-striped table-hover'>
						<thead className='bg-light sticky-top align-middle'>
							<tr className='table-primary'>
								<th>ID</th>
								<th>Alamat Pelanggan</th>
								<th>Bunga</th>
								<th>Telp</th>
								<th>Catatan</th>
								<th>Status Pengiriman</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{data.map((d) => (
								<tr key={d.id} onClick={() => handleDetailPengiriman(d.id)}>
									<td>{d.id}</td>
									<td>{d.alamat_pengiriman}</td>
									<td>{d.jenis_bunga}</td>
									<td>{d.nomor_telp_pelanggan}</td>
									<td style={{ width: '500px' }}>{d.catatan || '-'}</td>
									<td>Delivered</td>
									<td>
										{/* <Link to={'/read/' + (d.id)} className='btn btn-sm btn-info me-2'>Detail</Link>
                                            <Link to={'/update/' + (d.id)} className='btn btn-sm btn-primary me-2'>Edit</Link> */}
										{/* <Link to={'/daftar-pengiriman-kurir/read/' + (d.id)}>
                                                <IconButton
                                                color="black"
                                                style={{display: 'flex', justifyContent: 'right'}}>
                                                <Info>
                                                </Info>
                                                </IconButton>
                                            </Link> */}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default RiwayatPengirimanKurir
