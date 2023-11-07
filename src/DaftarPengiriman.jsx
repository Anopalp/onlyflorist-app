import { useEffect, useState } from 'react'
import { get } from './axiosService'

const DaftarPengiriman = () => {
	const [datas, setDatas] = useState([])

	useEffect(() => {
		get('http://localhost:3000/pengiriman').then((returnedData) =>
			setDatas(returnedData)
		)
	}, [])

	return (
		<div>
			{datas.length === 0 ? (
				<div className='position-absolute top-50 start-50 translate-middle fs-2 --bs-danger-text-emphasis'>
					Tidak ada pengiriman
				</div>
			) : (
				<table className='table table-hover table-striped w-75 mx-auto'>
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
			)}
		</div>
	)
}

export default DaftarPengiriman
