import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarManajer from './view/NavbarManajer'
import Footer from './view/footer'
import Login from './view/Login'
import DashboardKurir from './view/kurir/DashboardKurir'
import DashboardManajer from './view/manajer/DashboardManajer'
import DaftarPengirimanKurir from './view/kurir/DaftarPengirimanKurir'
import RiwayatPengirimanKurir from './view/kurir/RiwayatPengirimanKurir'
import Read from './view/kurir/Read'
import Update from './view/kurir/Update'
import LayarDaftarKurir from './view/manajer/LayarDaftarKurir'
import DaftarPengirimanManajer from './view/manajer/DaftarPengirimanManajer'
import RiwayatPengirimanManajer from './view/manajer/RiwayatPengirimanManajer'

import supabase from './config/supabaseClient'
import { useEffect, useState } from 'react'
import NavbarLogin from './view/NavbarLogin'
import NavbarKurir from './view/NavbarKurir'

function ProtectedRoute({ user, children }) {
	console.log('user: ', user)
	if (user === null) {
		return <Navigate to='/' />
	}
	return children
}

function App() {
	const [session, setSession] = useState(null)

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			console.log('session: ', session)
			setSession(session)
		})

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})

		return () => subscription.unsubscribe()
	}, [])

	return (
		<BrowserRouter>
			<NavbarLogin />
			<NavbarManajer />
			<NavbarKurir />
			<Routes>
				<Route path='/' element={<Login session={session} />}></Route>

				<Route
					path='/dashboard-kurir'
					element={
						<ProtectedRoute user={session}>
							<DashboardKurir />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/dashboard-manajer'
					element={
						<ProtectedRoute user={session}>
							<DashboardManajer />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/daftar-pengiriman-kurir'
					element={<DaftarPengirimanKurir />}
				></Route>
				<Route
					path='/daftar-pengiriman-kurir/update/:id'
					element={<Update />}
				></Route>
				<Route
					path='/daftar-pengiriman-kurir/read/:id'
					element={<Read />}
				></Route>
				<Route
					path='/riwayat-pengiriman-kurir'
					element={<RiwayatPengirimanKurir />}
				></Route>
				<Route
					path='/daftar-pengiriman-manajer'
					element={<DaftarPengirimanManajer />}
				></Route>
				<Route
					path='/riwayat-pengiriman-manajer'
					element={<RiwayatPengirimanManajer />}
				></Route>
				<Route path='/daftar-kurir' element={<LayarDaftarKurir />}></Route>
				{/* <Route path='/account-kurir' element={<AccountKurir />}></Route> */}
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
