import { useState } from 'react'
import { add } from './axiosService'

const TambahPengiriman = ({ close, datas }) => {
	const [jenisBunga, setJenisBunga] = useState('')
	const [alamatPengiriman, setAlamatPengiriman] = useState('')
	const [noTelpPelanggan, setNoTelpPelanggan] = useState('')
	const [catatan, setCatatan] = useState('')

	const handlePengiriman = (e) => {
		e.preventDefault()
		const newPengiriman = {
			alamatPengiriman,
			jenisBunga,
			noTelpPelanggan,
			catatan,
			kurir: 'Test',
			statusPengiriman: 'picked up',
		}
		add('http://localhost:3000/pengiriman', newPengiriman).then((response) => {
			datas.push(response)
			close()
		})
	}

	return (
		<div className='position-fixed start-50 translate-middle-x mt-5 p-3 bg-warning-subtle shadow-lg d-flex flex-column'>
			<div className='d-flex justify-content-between align-items-center column-gap-3'>
				<h1>Tambah Pengiriman</h1>
				<button className='btn btn-warning' onClick={close}>
					X
				</button>
			</div>
			<form onSubmit={handlePengiriman}>
				<div>
					<label htmlFor='jenis-bunga'>Jenis Bunga</label>
					<br />
					<input
						className='w-100'
						type='text'
						id='jenis-bunga'
						value={jenisBunga}
						onChange={(e) => setJenisBunga(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='alamat'>Alamat Pengiriman</label>
					<br />
					<input
						className='w-100'
						type='text'
						id='alamat'
						value={alamatPengiriman}
						onChange={(e) => setAlamatPengiriman(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='no-telp'>No. Telepon Pelanggan</label>
					<br />
					<input
						className='w-100'
						type='text'
						id='no-telp'
						value={noTelpPelanggan}
						onChange={(e) => setNoTelpPelanggan(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='catatan'>Catatan Pengiriman</label>
					<br />
					<input
						className='w-100'
						type='text'
						id='catatan'
						value={catatan}
						onChange={(e) => setCatatan(e.target.value)}
					/>
				</div>
				<button className='btn btn-outline-dark mt-3'>Simpan</button>
			</form>
		</div>
	)
}

export default TambahPengiriman
