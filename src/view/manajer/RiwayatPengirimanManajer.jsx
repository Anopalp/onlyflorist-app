import supabase from '../../config/supabaseClient'
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { IconButton } from '@mui/material'
// import { Info } from '@mui/icons-material'
import Read from './Read'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import NavbarManajer from '../NavbarManajer'

function RiwayatPengirimanManajer() {
	const [data, setData] = useState([])
	const [isDetail, setIsDetail] = useState(false)
	const [selectedId, setSelectedId] = useState(null)
	const [search, setSearch] = useState('')

	console.log(search)

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase.from('dataRiwayat').select()

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
			<NavbarManajer />
			<div className='d-flex flex-column justify-content-left align-items-center bg-light vh-100'>
				<h3 className='my-3' style={{ fontSize: 30, fontWeight: 'bold' }}>
					Riwayat Pengiriman
				</h3>
				<div className='z-0 w-75 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
					{/* <div className='d-flex justify-content-end '>
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                </div> */}
					{isDetail ? <Read close={closePopUp} id={selectedId} /> : null}

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
								<th>ID</th>
								<th>Alamat Pengiriman</th>
								<th>Bunga</th>
								<th>Telp</th>
								<th>Kurir</th>
								<th>Status Pengiriman</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{data
								.filter((d) => {
									return search.toLowerCase() === ''
										? d
										: d.kurir.toLowerCase().includes(search.toLowerCase()) ||
												d.jenis_bunga
													.toLowerCase()
													.includes(search.toLowerCase())
								})
								.map((d) => (
									<tr key={d.id} onClick={() => handleDetailPengiriman(d.id)}>
										<td>{d.id}</td>
										<td>{d.alamat_pengiriman}</td>
										<td>{d.jenis_bunga}</td>
										<td>{d.nomor_telp_pelanggan}</td>
										<td>{d.kurir}</td>
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

export default RiwayatPengirimanManajer
