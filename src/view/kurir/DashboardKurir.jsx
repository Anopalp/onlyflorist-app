/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import '../dashboardStyles.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import NavbarKurir from '../NavbarKurir'
import supabase from '../../config/supabaseClient'

function getWaktu() {
	const time = new Date().getHours()
	if (time >= 18) {
		return 'malam'
	} else if (time >= 14) {
		return 'sore'
	} else if (time >= 11) {
		return 'siang'
	} else {
		return 'pagi'
	}
}

function DashboardKurir() {
	const [namaKurir, setNamaKurir] = useState('')
	useEffect(() => {
		const fetchData = async () => {
			const {
				data: {
					session: {
						user: { email },
					},
				},
			} = await supabase.auth.getSession()

			const username = email.split('@')[0]

			const { data } = await supabase
				.from('dataKurir')
				.select('nama_lengkap')
				.eq('username', username)

			setNamaKurir(data[0].nama_lengkap)
		}

		fetchData()
	}, [])

	return (
		<div>
			<NavbarKurir />
			<h4 className='text-center p-3'>
				Halo {namaKurir}, selamat {getWaktu()}!
			</h4>
			<div className='card-container w-75 mx-auto my-5'>
				<div>
					<h2>Pengiriman teratas</h2>
				</div>
				<div className='row'>
					<CardPengirimanKurir />
					<CardPengirimanKurir />
					<CardPengirimanKurir />
					<div className='buttons-container mt-3'>
						<div>
							<Link to={'/daftar-pengiriman-kurir'} class='btn btn-secondary'>
								See More
							</Link>
						</div>
						{/* <a href='/daftar-pengiriman-kurir' class="btn btn-primary">see more</a> */}
					</div>
				</div>
			</div>
		</div>
	)
}

function CardPengirimanKurir() {
	return (
		<Card className='text-center w-25 col-lg-4 mx-auto my-auto'>
			<Card.Img variant='top' src='..\src\assets\Sansevieria.png'></Card.Img>
			<Card.Header>Sansevieria</Card.Header>
			<Card.Body>
				<Card.Title>Alam Bar</Card.Title>
				<Card.Text>Jl. Tubagus Islamiyyah no.15 Sumarno 086542728273</Card.Text>
				<Button variant='primary'>Lihat Detail</Button>
			</Card.Body>
		</Card>
	)
}

export default DashboardKurir
