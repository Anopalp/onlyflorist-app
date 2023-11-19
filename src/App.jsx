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
import DashboardKurir from './view/kurir/DashboardKurir'
import DashboardManajer from './view/manajer/DashboardManajer'
import DaftarPengirimanKurir from './view/kurir/DaftarPengirimanKurir'
import Read from './view/kurir/Read'
import Update from './view/kurir/Update'

function App() {
  
	return (
		<BrowserRouter>
		{/* <Appheader></Appheader> */}
		  <Routes>
			{/* <Route path='/' element={<Login />}></Route> */}
			<Route path='/' element={<DashboardKurir />}></Route>
			<Route path='/dashboard-manajer' element={<DashboardManajer />}></Route>
			<Route path='/daftar-pengiriman-kurir' element={<DaftarPengirimanKurir />}></Route>
			<Route path='/daftar-pengiriman-kurir/update/:id' element={<Update />}></Route>
			<Route path='/daftar-pengiriman-kurir/read/:id' element={<Read />}></Route>
			{/* <Route path='/account-kurir' element={<AccountKurir />}></Route>
			<Route path='/create' element={<Create />}></Route> */}
		  </Routes>
		</BrowserRouter>
	  )
	  
	
}

export default App
