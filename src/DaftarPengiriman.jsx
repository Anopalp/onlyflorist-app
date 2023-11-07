import dummyData from '../dummy_data_pengiriman'

const DaftarPengiriman = () => {
	return (
		<div>
			<table>
				<tr>
					<th>ID Pengiriman</th>
					<th>Alamat Pengiriman</th>
					<th>No. Telp Pelanggan</th>
					<th>Catatan Pengiriman</th>
					<th>Kurir</th>
					<th>Status Pengiriman</th>
				</tr>
				{dummyData.map((data) => (
					<tr key={data.id}>
						<td>{data.id}</td>
						<td>{data.alamat}</td>
						<td>{data.no_telp_pelanggan}</td>
						<td>{data.catatan_pengiriman}</td>
						<td>{data.kurir}</td>
						<td>{data.status_pengiriman}</td>
					</tr>
				))}
			</table>
		</div>
	)
}

export default DaftarPengiriman
