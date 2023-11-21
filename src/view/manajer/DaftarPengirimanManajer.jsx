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
				<div className='d-flex flex-column justify-content-left align-items-center bg-light vh-100'>
					<h3 className='my-3'>Halo, ini daftar pengirimanmu!</h3>
					<div className='w-75 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
						<div className='d-flex my-2'>
							<button
								className='btn btn-primary ms-auto'
								onClick={handleTambahPengiriman}
							>
								Add +
							</button>
						</div>
						{isTambah ? (
							<TambahPengiriman close={closePopUp} datas={datas} />
						) : null}
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
				</div>
			)}
		</div>
	)
}

export default DaftarPengirimanManajer
