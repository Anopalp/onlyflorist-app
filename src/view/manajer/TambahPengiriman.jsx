import { useState } from 'react'
import supabase from '../../config/supabaseClient'

async function findKurirTersantai(daftarPengiriman) {
	// ambil data pengiriman
	let lowestDeliveryKurir
	const kurirDiDaftarPengiriman = daftarPengiriman.map(
		(pengiriman) => pengiriman.kurir
	)

	// cek kurir yang ga punya pengiriman
	const kurirTanpaDelivery = await supabase
		.from('dataKurir')
		.select('username')
		.not('username', 'in', `(${kurirDiDaftarPengiriman})`)
	if (kurirTanpaDelivery.data.length) {
		lowestDeliveryKurir = kurirTanpaDelivery.data[0].username
	} else {
		// cek kurir yang pengirimannya paling sedikit
		const freqTable = daftarPengiriman.reduce((acc, { kurir }) => {
			return Object.assign(acc, { [kurir]: (acc[kurir] || 0) + 1 })
		}, {})
		const lowestDelivery = Math.min(...Object.values(freqTable))
		for (const kurir in freqTable) {
			if (freqTable[kurir] === lowestDelivery) {
				lowestDeliveryKurir = kurir
				break
			}
		}
	}

	return lowestDeliveryKurir
}

const TambahPengiriman = ({ close, setData }) => {
	const [jenisBunga, setJenisBunga] = useState('')
	const [alamatPengiriman, setAlamatPengiriman] = useState('')
	const [noTelpPelanggan, setNoTelpPelanggan] = useState('')
	const [catatan, setCatatan] = useState('')

	const handlePengiriman = (e) => {
		e.preventDefault()

		const fetchData = async () => {
			const pengiriman = await supabase.from('dataPengiriman').select()
			const daftarPengiriman = pengiriman.data
			const kurirTersantai = await findKurirTersantai(daftarPengiriman)

			const newPengiriman = {
				id: daftarPengiriman.length + 1,
				alamat_pengiriman: alamatPengiriman,
				jenis_bunga: jenisBunga,
				nomor_telp_pelanggan: noTelpPelanggan,
				catatan,
				kurir: kurirTersantai,
				status_pengiriman: 'picked up',
				laporan_masalah: null,
			}

			const { data, error } = await supabase
				.from('dataPengiriman')
				.insert([newPengiriman])
				.select()

			if (error) console.log(error)

			if (data) {
				setData((oldData) => [...oldData, ...data])
				close()
			}
		}

		fetchData()
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
