/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import supabase from '../../config/supabaseClient'
import NavbarKurir from '../NavbarKurir'
import { FaArrowLeft } from 'react-icons/fa6'

async function generateIdLaporan() {
	const awalDataLaporan = await supabase.from('dataLaporan').select()
	return awalDataLaporan.data.length + 1
}

async function updateLaporan(laporan, idPengiriman, idLaporan) {
	const laporanObj = {
		id: idLaporan ? idLaporan : await generateIdLaporan(),
		laporan_masalah: laporan ? laporan : '',
	}
	const { data, error } = await supabase
		.from('dataLaporan')
		.upsert([laporanObj])
		.select()

	if (error) console.log('error: ', error)

	console.log(idPengiriman)

	const pengiriman = await supabase
		.from('dataPengiriman')
		.update({ laporan_masalah: laporanObj.id })
		.eq('id', idPengiriman)

	console.log(pengiriman)
}

async function updateStatusPengiriman(id, status) {
	console.log(status)
	if (status === 'Delivered') {
		const { data } = await supabase.from('dataPengiriman').select().eq('id', id)
		await supabase.from('dataPengiriman').delete().eq('id', id)
		const riwayat = {
			...data[0],
		}
		delete riwayat.waktu_dibuat
		delete riwayat.status_pengiriman
		const tambahRiwayat = await supabase
			.from('dataRiwayat')
			.insert([riwayat])
			.select()
		console.log(tambahRiwayat)
	} else {
		const { data, error } = await supabase
			.from('dataPengiriman')
			.update({ status_pengiriman: status })
			.eq('id', id)
			.select()
	}
}

function Update() {
	// const [data, setData] = useState([])
	const { id } = useParams()
	const navigate = useNavigate()

	const [values, setValues] = useState({})

	const options = [
		{ label: 'Pick-up', mark: 1 },
		{ label: 'On the way', mark: 2 },
		{ label: 'Delivered', mark: 3 },
		{ label: 'On-hold', mark: 4 },
	]

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase
				.from('dataPengiriman')
				.select()
				.eq('id', id)
			if (error) console.log(error)

			if (data[0].laporan_masalah) {
				const laporan = await supabase
					.from('dataLaporan')
					.select('laporan_masalah')
					.eq('id', data[0].laporan_masalah)

				setValues({
					...data[0],
					laporan_masalah: laporan.data[0].laporan_masalah,
					id_laporan: data[0].laporan_masalah,
				})
			} else {
				setValues(...data)
			}
		}

		fetchData()
	}, [id])

	const handleUpdate = (event) => {
		event.preventDefault()
		const updateData = async () => {
			await updateStatusPengiriman(id, values.status_pengiriman)
			await updateLaporan(values.laporan_masalah, id, values.id_laporan)
		}

		updateData();

		// document.querySelector('.back-button').click();

		navigate('/daftar-pengiriman-kurir')

		setTimeout(() => {
			window.location.reload();
		}, 500);
	}

	return (
		<div>
			<NavbarKurir />
			<div className='d-flex w-100 vh-75 justify-content-center align-items-center'>
				<div className='w-50 bg-white p-3 rounded-4'>
					<div className='d-flex align-items-center p-1 pb-4 border-bottom-0'>
						<Link to={'/daftar-pengiriman-kurir/'}>
							<button type='button' className='btn back-button'>
								<FaArrowLeft />
							</button>
						</Link>
						<h3
							style={{
								fontSize: 30,
								fontWeight: 'bold',
								color: '#29335c',
								marginLeft: '10px',
							}}
						>
							Update Pengiriman
						</h3>
					</div>
					<form onSubmit={handleUpdate}>
						<div className='d-flex align-items-center mb-4'>
							<img
								style={{ width: '120px', borderRadius: '50%' }}
								src={values.image_url}
								alt='profile picture'
							></img>
							<h3
								style={{
									fontSize: 30,
									fontWeight: 'bold',
									color: '#29335c',
									marginLeft: '10%',
								}}
							>
								{values.jenis_bunga}
							</h3>
						</div>
						<div className='mb-3'>
							<strong htmlFor='id' style={{ color: '#29335c' }}>
								ID Pengiriman
							</strong>
							<output className='form-control' style={{ color: '#29335c' }}>
								{values.id}
							</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='alamatPengiriman' style={{ color: '#29335c' }}>
								Alamat Pengiriman
							</strong>
							<output className='form-control' style={{ color: '#29335c' }}>
								{values.alamat_pengiriman}
							</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='jenisBunga' style={{ color: '#29335c' }}>
								Jenis Bunga
							</strong>
							<output className='form-control' style={{ color: '#29335c' }}>
								{values.jenis_bunga}
							</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='noTelpPelanggan' style={{ color: '#29335c' }}>
								No. Telp Pelanggan
							</strong>
							<output className='form-control' style={{ color: '#29335c' }}>
								{values.nomor_telp_pelanggan}
							</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='catatan' style={{ color: '#29335c' }}>
								Catatan
							</strong>
							<output className='form-control' style={{ color: '#29335c' }}>
								{values.catatan ? values.catatan : '-'}
							</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='kurir' style={{ color: '#29335c' }}>
								Kurir
							</strong>
							<output className='form-control' style={{ color: '#29335c' }}>
								{values.kurir}
							</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='laporanMasalah' style={{ color: '#29335c' }}>
								Laporan Masalah
							</strong>
							<input
								type='text'
								name='name'
								className='form-control'
								style={{ color: '#29335c' }}
								placeholder='Masukkan laporan masalah'
								value={values.laporan_masalah || ''}
								onChange={(e) =>
									setValues({ ...values, laporan_masalah: e.target.value })
								}
								disabled={values.status_pengiriman !== 'On-hold'}
							/>
						</div>
						<div className='mb-4'>
							<strong htmlFor='status' style={{ color: '#29335c' }}>
								Status Pengiriman
							</strong>
							{/* <input type="text" name='status' className='form-control' placeholder='Masukkan Status'
                    value={values.statusPengiriman}
                    onChange={e => setValues({...values, statusPengiriman: e.target.value})}/> */}
							<select
								name='status'
								className='form-select'
								style={{ color: '#29335c' }}
								value={values.status_pengiriman}
								onChange={(e) =>
									setValues({ ...values, status_pengiriman: e.target.value })
								}
							>
								{options.map((option) => (
									<option key={option.mark}>{option.label}</option>
								))}
							</select>
						</div>
						<button className='btn rounded-3 btn-success w-100'>Update</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Update
