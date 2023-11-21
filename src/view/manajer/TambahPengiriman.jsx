import { useState } from 'react'
import axios from 'axios'

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
		axios
			.post('http://localhost:3000/pengiriman', newPengiriman)
			.then((response) => response.data)
			.then((returnedObject) => {
				datas.push(returnedObject)
				close()
			})
	}

	return (
		<div className='modal d-block' tabIndex='-1' role='dialog' id='modalSignin'>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content rounded-4 shadow'>
					<div className='modal-header p-1 pb-4 border-bottom-0'>
						<h1 className='fw-bold mb-0 fs-2'>Tambah pengiriman</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
							onClick={close}
						></button>
					</div>

					
						<form className='' onSubmit={handlePengiriman}>
							<div className='form-floating mb-3'>
								<input
									type='text'
									className='form-control rounded-3'
									id='jenis-bunga'
									placeholder='Jenis Bunga'
									value={jenisBunga}
									onChange={(e) => setJenisBunga(e.target.value)}
								/>
								<label htmlFor='jenis-bunga'>Jenis Bunga</label>
							</div>
							<div className='form-floating mb-3'>
								<input
									type='text'
									className='form-control rounded-3'
									id='alamat'
									placeholder='Alamat Pengiriman'
									value={alamatPengiriman}
									onChange={(e) => setAlamatPengiriman(e.target.value)}
								/>
								<label htmlFor='alamat'>Alamat Pengiriman</label>
							</div>
							<div className='form-floating mb-3'>
								<input
									type='text'
									className='form-control rounded-3'
									id='no-telp'
									placeholder='No. Telepon Pelanggan'
									value={noTelpPelanggan}
									onChange={(e) => setNoTelpPelanggan(e.target.value)}
								/>
								<label htmlFor='no-telp'>No. Telp Pelanggan</label>
							</div>
							<div className='form-floating mb-4'>
								<input
									type='text'
									className='form-control rounded-3'
									id='catatan'
									placeholder='Catatan Pengiriman'
									value={catatan}
									onChange={(e) => setCatatan(e.target.value)}
								/>
								<label htmlFor='catatan'>Catatan Pengiriman</label>
							</div>
							<button
								className='w-100 btn btn-lg rounded-3 btn-primary'
								type='submit'
							>
								Simpan
							</button>
						</form>
					
				</div>
			</div>
		</div>
	)
}

export default TambahPengiriman
