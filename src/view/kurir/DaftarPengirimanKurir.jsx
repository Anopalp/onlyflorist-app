import React, { useEffect, useState } from 'react'
import Read from './Read'
import supabase from '../../config/supabaseClient'
import NavbarKurir from '../NavbarKurir'

function DaftarPengirimanKurir() {
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
				.from('dataPengiriman')
				.select()
				.eq('kurir', username)

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
					Daftar Pengiriman
				</h3>
				<div className='z-0 w-75 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
					{/* <div className='d-flex justify-content-end '>
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                </div> */}
					{isDetail ? <Read close={closePopUp} id={selectedId} /> : null}
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
									<td style={{ width: '600px' }}>
										{d.catatan ? d.catatan : '-'}
									</td>
									<td>{d.status_pengiriman}</td>
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

export default DaftarPengirimanKurir
