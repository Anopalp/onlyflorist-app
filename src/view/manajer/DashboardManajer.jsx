/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavbarManajer from "../NavbarManajer";
import supabase from "../../config/supabaseClient";

function LayarDashboardManajer() {
  const [fetchErrorPengiriman, setFetchErrorPengiriman] = useState(null);
  const [dataPengiriman, setDataPengiriman] = useState(null);

  useEffect(() => {
    const fetchDataPengiriman = async () => {
      const { dataP, error } = await supabase
        .from('dataPengiriman')
        .select()

        if (error) {
          setFetchErrorPengiriman('Could not fetch dataPengiriman');
          setDa
        }
    }
  })
}

function DashboardManajer() {
  return (
    <div>
      <NavbarManajer />
      <div className="pengiriman-co">
        <h4 className="text-center text-danger p-3"></h4>
        <div className="card-container mx-auto my-5">
          <div className="mx-5">
            <h2>Pengiriman teratas</h2>
          </div>
          <div className="row">
            <CardPengiriman />
            <CardPengiriman />
            <CardPengiriman />
            <div className="buttons-container mt-3">
              <div>
                <Link to={"/daftar-pengiriman-manajer"}>
                  <Button variant="secondary"> See More </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="akun-co">
        <div className="card-container mx-auto my-5">
          <div className="mx-5">
            <h2 className="text-center">Akun Kurir</h2>
          </div>
          <div className="row">
            <CardKurir />
            <CardKurir />
            <CardKurir />
            <div className="buttons-container mt-3">
              <div>
                <Link to={"/daftar-kurir"}>
                  <Button variant="secondary"> See More </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardPengiriman() {
  return (
    <Card className="text-center w-25 col-lg-4 mx-auto my-auto">
      <Card.Img variant="top" src="..\src\assets\Sansevieria.png"></Card.Img>
      <Card.Header>Sansevieria</Card.Header>
      <Card.Body>
        <Card.Title>Alam Bar</Card.Title>
        <Card.Text>Jl. Tubagus Islamiyyah no.15 Sumarno 086542728273</Card.Text>
        <Button variant="primary">Lihat Detail</Button>
      </Card.Body>
    </Card>
  );
}

function CardKurir() {
  return (
    <Card className="text-center w-25 col-lg-4 mx-auto my-auto">
      <Card.Header>Suharmono</Card.Header>
      <Card.Body>
        <Card.Title>08273627469</Card.Title>
        <Card.Text>Jl. Tubagus Islamiyyah no.77</Card.Text>
        <Button variant="primary">Lihat Detail</Button>
      </Card.Body>
    </Card>
  );
}

export default DashboardManajer;
