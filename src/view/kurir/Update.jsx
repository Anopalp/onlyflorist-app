import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import supabase from '../../config/supabaseClient'
import NavbarKurir from '../NavbarKurir'

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

	const [values, setValues] = useState({})

	const options = [
		{ label: 'Pick-up', mark: 1 },
		{ label: 'On the way', mark: 2 },
		{ label: 'Delivered', mark: 3 },
		{ label: 'On-hold', mark: 4 },
	]

	const navigate = useNavigate()

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

		updateData()
	}

	return (
		<div>
			<NavbarKurir />
			<div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
				<div className='w-50 border bg-white shadow p-3 rounded-4'>
					<div className='modal-header p-1 pb-4 border-bottom-0'>
						<h1 className='fw-bold mb-0 fs-2 text-center'>Update Pengiriman</h1>
						<Link to={'/daftar-pengiriman-kurir/'}>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
								onClick={close}
							></button>
						</Link>
					</div>
					<form onSubmit={handleUpdate}>
						<div className='mb-3'>
							<strong htmlFor='id'>ID Pengiriman</strong>
							<output className='form-control'>{values.id}</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='alamatPengiriman'>Alamat Pengiriman</strong>
							<output className='form-control'>
								{values.alamat_pengiriman}
							</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='jenisBunga'>Jenis Bunga</strong>
							<output className='form-control'>{values.jenis_bunga}</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='noTelpPelanggan'>No. Telp Pelanggan</strong>
							<output className='form-control'>
								{values.nomor_telp_pelanggan}
							</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='catatan'>Catatan</strong>
							<output className='form-control'>
								{values.catatan ? values.catatan : '-'}
							</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='kurir'>Kurir</strong>
							<output className='form-control'>{values.kurir}</output>
						</div>
						<div className='mb-3'>
							<strong htmlFor='laporanMasalah'>Laporan Masalah</strong>
							<input
								type='text'
								name='name'
								className='form-control'
								placeholder='Masukkan laporan masalah'
								value={values.laporan_masalah || ''}
								onChange={(e) =>
									setValues({ ...values, laporan_masalah: e.target.value })
								}
							/>
						</div>
						<div className='mb-4'>
							<strong htmlFor='status'>Status Pengiriman</strong>
							{/* <input type="text" name='status' className='form-control' placeholder='Masukkan Status'
                    value={values.statusPengiriman}
                    onChange={e => setValues({...values, statusPengiriman: e.target.value})}/> */}
							<select
								name='status'
								className='form-select'
								value={values.status_pengiriman}
								onChange={(e) => {
									if (values.laporan_masalah) {
										setValues({ ...values, status_pengiriman: 'On-hold' })
									} else {
										setValues({ ...values, status_pengiriman: e.target.value })
									}
								}}
							>
								{options.map((option) => (
									<option key={option.mark}>{option.label}</option>
								))}
							</select>
						</div>
						<button className='btn btn-lg rounded-3 btn-success'>Update</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Update
