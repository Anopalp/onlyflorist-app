import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DashboardManajer() {
	return (
		<div>
			<div className='pengiriman-co'>
				<h4 className='text-center p-3'>
					Halo MANAJER TERCINTAHH, selamat Pagi!
				</h4>
				<div className='card-container mx-auto my-5'>
					<div className='mx-5'>
						<h3>Pengiriman teratas</h3>
					</div>
					<div className='row'>
						<div className='col-lg-4'>
							<div className='card w-75 text-center mx-auto my-auto'>
								<img
									src='..\src\assets\Sansevieria.png'
									className='card-img-top'
									alt='Bunga'
								/>
								<div className='card-body'>
									<h5 className='card-title'>Sansevieria</h5>
									<p>Budi P</p>
									<p>Jl. Tubagus Islamiyyah no.9</p>
									<p>Sumarno</p>
									<p>086542293839</p>
									<a href='#' className='btn btn-primary'>
										Lihat Detail
									</a>
								</div>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='card w-75 text-center mx-auto my-auto'>
								<img
									src='..\src\assets\Sansevieria.png'
									className='card-img-top'
									alt='Bunga'
								/>
								<div className='card-body'>
									<h5 className='card-title'>Sansevieria</h5>
									<p>Carica Papaya</p>
									<p>Jl. Tubagus Islamiyyah no.18</p>
									<p>Sumarno</p>
									<p>086542729739</p>
									<a href='#' className='btn btn-primary'>
										Lihat Detail
									</a>
								</div>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='card w-75 text-center mx-auto my-auto'>
								<img
									src='..\src\assets\Sansevieria.png'
									className='card-img-top'
									alt='Bunga'
								/>
								<div className='card-body'>
									<h5 className='card-title'>Sansevieria</h5>
									<p>Carica Papaya</p>
									<p>Jl. Tubagus Islamiyyah no.18</p>
									<p>Sumarno</p>
									<p>086542729739</p>
									<a href='#' className='btn btn-primary'>
										Lihat Detail
									</a>
								</div>
							</div>
						</div>
						<div className='buttons-container mt-3'>
							<div>
								<Link
									to={'/daftar-pengiriman-manajer'}
									className='btn btn-secondary'
								>
									See More
								</Link>
							</div>
							{/* <a href='/daftar-pengiriman-kurir' class="btn btn-primary">see more</a> */}
						</div>
					</div>
				</div>
			</div>
			<div className='akun-co'>
				<div className='card-container mx-auto my-5'>
					<div className='mx-5'>
						<h3 className='text-center'>Akun Kurir</h3>
					</div>
					<div className='row'>
						<div
							id='carouselExampleInterval'
							className='carousel slide'
							data-bs-ride='carousel'
						>
							<div className='carousel-inner'>
								<div className='carousel-item active'>
									<div className='card w-75 h-100 text-center mx-auto my-auto'>
										<div className='card-body'>
											<h5 className='card-title'>Cam Abbot</h5>
											<p>cabbot0</p>
											<p>086542729739</p>
											<a href='#' className='btn btn-primary'>
												Lihat Detail
											</a>
										</div>
									</div>
								</div>
								<div className='carousel-item'>
									<div className='card w-75 h-100 text-center mx-auto my-auto'>
										<div className='card-body'>
											<h5 className='card-title'>Cam Abbot</h5>
											<p>cabbot0</p>
											<p>086542729739</p>
											<a href='#' className='btn btn-primary'>
												Lihat Detail
											</a>
										</div>
									</div>
								</div>
								<div className='carousel-item'>
									<div className='card w-75 h-100 text-center mx-auto my-auto'>
										<div className='card-body'>
											<h5 className='card-title'>Cam Abbot</h5>
											<p>cabbot0</p>
											<p>086542729739</p>
											<a href='#' className='btn btn-primary'>
												Lihat Detail
											</a>
										</div>
									</div>
								</div>
								<div className='carousel-item'>
									<div className='card w-75 h-100 text-center mx-auto my-auto'>
										<div className='card-body'>
											<h5 className='card-title'>Cam Abbot</h5>
											<p>cabbot0</p>
											<p>086542729739</p>
											<a href='#' className='btn btn-primary'>
												Lihat Detail
											</a>
										</div>
									</div>
								</div>
								{/* <div class="carousel-item">
                    <div class="card w-75 h-100 text-center mx-auto my-auto">
                      <div class="card-body">
                        <h5 class="card-title">Cam Abbot</h5>
                        <p>cabbot0</p>
                        <p>086542729739</p>
                        <a href="#" class="btn btn-primary">Lihat Detail</a>
                      </div>
                    </div>
                  </div> */}
								{/* <div class="carousel-item">
                    <div class="card w-75 h-100 text-center mx-auto my-auto">
                      <div class="card-body">
                        <h5 class="card-title">Cam Abbot</h5>
                        <p>cabbot0</p>
                        <p>086542729739</p>
                        <a href="#" class="btn btn-primary">Lihat Detail</a>
                      </div>
                    </div>
                  </div> */}
							</div>
							<button
								className='carousel-control-prev'
								type='button'
								data-bs-target='#carouselExampleInterval'
								data-bs-slide='prev'
							>
								<span
									className='carousel-control-prev-icon'
									aria-hidden='true'
								></span>
								<span className='visually-hidden'>Previous</span>
							</button>
							<button
								className='carousel-control-next'
								type='button'
								data-bs-target='#carouselExampleInterval'
								data-bs-slide='next'
							>
								<span
									className='carousel-control-next-icon'
									aria-hidden='true'
								></span>
								<span className='visually-hidden'>Next</span>
							</button>
						</div>
						<div className='buttons-container mt-3'>
							<div>
								<Link to={'/daftar-kurir'} className='btn btn-secondary'>
									See More
								</Link>
							</div>
							{/* <a href='/daftar-pengiriman-kurir' class="btn btn-primary">see more</a> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardManajer
