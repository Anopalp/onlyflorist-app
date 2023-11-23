// import DaftarPengirimanManajer from './DaftarPengirimanManajer'
// import { useState } from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import Appheader from './Appheader'
// import Login from './login'
// import DashboardKurir from './DashboardKurir'
// import AccountKurir from './AccountKurir'
// import Create from './Create'
// import Update from './Update'
// import Read from './Read'
import Navbar from './view/Navbar'
import Header from './view/header'
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
// import AccountKurir from './view/kurir/AccountKurir'

import supabase from './config/supabaseClient'
import { useEffect, useState } from 'react'

const ProtectedRoute = ({ user, children }) => {
	if (!user) {
		return <Login />
	}

	return children
}

function App() {
	const [user, setUser] = useState(null)

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => setUser(data))
	}, [])

	return (
		<BrowserRouter>
			{/* <Appheader></Appheader> */}
			{/* <Header></Header> */}
			<Navbar />
			<Routes>
				<Route path='/' element={<Login />}></Route>

				<Route
					path='/dashboard-kurir'
					element={
						<ProtectedRoute user={user}>
							<DashboardKurir />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/dashboard-manajer'
					element={
						<ProtectedRoute user={user}>
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
