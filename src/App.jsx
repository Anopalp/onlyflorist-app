// import DaftarPengirimanManajer from './DaftarPengirimanManajer'
// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import Appheader from './Appheader'
// import Login from './login'
// import DashboardKurir from './DashboardKurir'
// import AccountKurir from './AccountKurir'
// import Create from './Create'
// import Update from './Update'
// import Read from './Read'
import Header from './view/header'
import Footer from './view/footer'
import Login from './view/Login'
import DashboardKurir from './view/kurir/DashboardKurir'
import DashboardManajer from './view/manajer/DashboardManajer'
import DaftarPengirimanKurir from './view/kurir/DaftarPengirimanKurir'
import Read from './view/kurir/Read'
import Update from './view/kurir/Update'
import LayarDaftarKurir from './view/manajer/LayarDaftarKurir'
import DaftarPengirimanManajer from './view/manajer/DaftarPengirimanManajer'

function App() {
  
	return (
		<BrowserRouter>
		{/* <Appheader></Appheader> */}
		<Header></Header>
		  <Routes>
			<Route path='/login' element={<Login />}></Route>
			<Route path='/' element={<DashboardKurir />}></Route>
			<Route path='/dashboard-manajer' element={<DashboardManajer />}></Route>
			<Route path='/daftar-pengiriman-kurir' element={<DaftarPengirimanKurir />}></Route>
			<Route path='/daftar-pengiriman-kurir/update/:id' element={<Update />}></Route>
			<Route path='/daftar-pengiriman-kurir/read/:id' element={<Read />}></Route>
			<Route path='/daftar-pengiriman-manajer' element={<DaftarPengirimanManajer />}></Route>
			<Route path='/daftar-kurir' element={<LayarDaftarKurir />}></Route>
			{/* <Route path='/account-kurir' element={<AccountKurir />}></Route>
			<Route path='/create' element={<Create />}></Route> */}
		  </Routes>
		<Footer></Footer>
		</BrowserRouter>
	  )
	  
	
}

export default App
