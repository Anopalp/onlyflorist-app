import { useEffect, useState } from 'react'
import axios from 'axios'
import TambahPengiriman from './TambahPengiriman'
import Read from './Read'
import { Form, FormControl, InputGroup } from 'react-bootstrap'

const DaftarPengirimanManajer = () => {
	const [datas, setDatas] = useState([])
	const [isTambah, setIsTambah] = useState(false)
	const [isDetail, setIsDetail] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
	const [search, setSearch] = useState('')

	console.log(search)

	useEffect(() => {
		axios
			.get('http://localhost:3000/pengiriman')
			.then((response) => response.data)
			.then((returnedData) => setDatas(returnedData))
	}, [])

	const handleTambahPengiriman = () => {
		setIsTambah(true)
	}

	const handleDetailPengiriman = (id) => {
		setIsDetail(true)
        setSelectedId(id)
	}

	const closePopUpTambahPengiriman = () => {
		setIsTambah(false)
	}

	const closePopUpDetailPengiriman = () => {
		setIsDetail(false)
	}


	return (
		<div>
			{datas.length === 0 ? (
				<div className='position-absolute top-50 start-50 translate-middle fs-2 --bs-danger-text-emphasis'>
					Tidak ada pengiriman
				</div>
			) : (
				<div className='d-flex flex-column justify-content-left align-items-center bg-light vh-100'>
					<h3 className='my-3' style={{fontSize:30, fontWeight: 'bold'}}>Daftar Pengiriman</h3>
					<div className='z-0 w-75 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
						<div className='d-flex my-2'>
							<button
								className='btn btn-primary ms-auto'
								onClick={handleTambahPengiriman}
							>
								Add +
							</button>
						</div>
						{isTambah ? (
							<TambahPengiriman close={closePopUpTambahPengiriman} datas={datas} />
						) : null}
						{isDetail ? (
							<Read close={closePopUpDetailPengiriman} id={selectedId}/>
						) : null}

						<Form>
							<InputGroup className='my-3'>
								<FormControl 
								onChange={(e) => setSearch(e.target.value)}
								placeholder='Search pengiriman'/>
							</InputGroup>
						</Form>

						<table className='table table-hover table-striped'>
							<thead className='bg-light sticky-top align-middle'>
								<tr className='table-primary'>
									<th>ID Pengiriman</th>
									<th>Alamat Pengiriman</th>
									<th>No. Telp Pelanggan</th>
									<th>Catatan Pengiriman</th>
									<th>Kurir</th>
									<th>Status Pengiriman</th>
								</tr>
							</thead>
							<tbody>
								{datas
									.filter((data) => {
										return search.toLowerCase() === ''
											? data
											: data.statusPengiriman.toLowerCase().includes(search.toLowerCase()) ||
											data.kurir.toLowerCase().includes(search.toLowerCase()) ||
											data.jenisBunga.toLowerCase().includes(search.toLowerCase());
									})
									.map((data) => (
									<tr key={data.id} onClick={() => handleDetailPengiriman(data.id)}>
										<td>{data.id}</td>
										<td>{data.alamatPengiriman}</td>
										<td>{data.noTelpPelanggan}</td>
										<td>{data.catatan}</td>
										<td>{data.kurir}</td>
										<td>{data.statusPengiriman}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	)
}

export default DaftarPengirimanManajer
