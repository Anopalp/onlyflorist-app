import { useEffect, useState } from 'react'
import axios from 'axios'
import TambahPengiriman from './TambahPengiriman'

const DaftarPengirimanManajer = () => {
	const [datas, setDatas] = useState([])
	const [isTambah, setIsTambah] = useState(false)

	useEffect(() => {
		axios
			.get('http://localhost:3000/pengiriman')
			.then((response) => response.data)
			.then((returnedData) => setDatas(returnedData))
	}, [])

	const handleTambahPengiriman = () => {
		setIsTambah(true)
	}

	const closePopUp = () => {
		setIsTambah(false)
	}

	return (
		<div>
			{datas.length === 0 ? (
				<div className='position-absolute top-50 start-50 translate-middle fs-2 --bs-danger-text-emphasis'>
					Tidak ada pengiriman
				</div>
			) : (
				<div className='position-relative w-75 mx-auto shadow p-3 rounded'>
					<div className='d-flex'>
						<button
							className='btn btn-primary mb-3 ms-auto'
							onClick={handleTambahPengiriman}
						>
							Add +
						</button>
					</div>
					{isTambah ? (
						<TambahPengiriman close={closePopUp} datas={datas} />
					) : null}
					<table className='table table-hover table-striped'>
						<thead className='text-center align-middle'>
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
							{datas.map((data) => (
								<tr key={data.id}>
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
			)}
		</div>
	)
}

export default DaftarPengirimanManajer