/* eslint-disable no-unused-vars */
import React from "react";
import "../dashboardStyles.css";
import { Link } from "react-router-dom";
import NavbarKurir from "../NavbarKurir";
import CardPengiriman from "../manajer/DashboardManajer";

function DashboardKurir() {
  return (
    <div>
      <NavbarKurir />
      <h4 className="text-center p-3">Halo Sumarno, selamat Pagi!</h4>
      <div className="card-container w-75 mx-auto my-5">
        <div>
          <h3>Pengiriman teratas</h3>
        </div>
        <div className="row">
          <CardPengiriman />
          <CardPengiriman />
          <CardPengiriman />
          <div className="buttons-container mt-3">
            <div>
              <Link to={"/daftar-pengiriman-kurir"} class="btn btn-secondary">
                See More
              </Link>
            </div>
            {/* <a href='/daftar-pengiriman-kurir' class="btn btn-primary">see more</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardKurir;
