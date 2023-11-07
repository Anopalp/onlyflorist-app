import { useState } from 'react'

const TambahPengiriman = ({ close }) => {
	const [jenisBunga, setJenisBunga] = useState('')
	const [alamatPengiriman, setAlamatPengiriman] = useState('')
	const [noTelpPelanggan, setNoTelpPelanggan] = useState('')
	const [catatan, setCatatan] = useState('')

	return (
		<div className='position-fixed start-50 translate-middle-x mt-5 p-3 bg-warning-subtle shadow-lg d-flex flex-column'>
			<div className='d-flex justify-content-between align-items-center column-gap-3'>
				<h1>Tambah Pengiriman</h1>
				<button className='btn btn-warning' onClick={close}>
					X
				</button>
			</div>
			<div>
				<label htmlFor='jenis-bunga'>Jenis Bunga</label>
				<br />
				<input className='w-100' type='text' id='jenis-bunga' />
			</div>
			<div>
				<label htmlFor='alamat'>Alamat Pengiriman</label>
				<br />
				<input className='w-100' type='text' id='alamat' />
			</div>
			<div>
				<label htmlFor='no-telp'>No. Telepon Pelanggan</label>
				<br />
				<input className='w-100' type='text' id='no-telp' />
			</div>
			<div>
				<label htmlFor='catatan'>Catatan Pengiriman</label>
				<br />
				<input className='w-100' type='text' id='catatan' />
			</div>
			<button className='btn btn-outline-dark mt-3'>Simpan</button>
		</div>
	)
}

export default TambahPengiriman
