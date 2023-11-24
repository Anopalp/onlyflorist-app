/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavbarManajer from "../NavbarManajer";
import supabase from "../../config/supabaseClient";

function DashboardManajer() {
  const [fetchErrorPengiriman, setFetchErrorPengiriman] = useState(null);
  const [dataPengiriman, setDataPengiriman] = useState(null);
  const [fetchErrorKurir, setFetchErrorKurir] = useState(null);
  const [dataKurir, setDataKurir] = useState(null);

  useEffect(() => {
    const fetchDataPengiriman = async () => {
      const { data, error } = await supabase
        .from('dataPengiriman')
        .select()

        if (error) {
          setFetchErrorPengiriman('Could not fetch dataPengiriman');
          setDataPengiriman(null);
          console.log(error);
        }
        if (data) {
          setDataPengiriman(data);
          setFetchErrorPengiriman(null);
        }
    }

    const fetchDataKurir = async () => {
      const { data, error } = await supabase
        .from('dataKurir')
        .select()

        if (error) {
          setFetchErrorKurir('Could not fetch dataKurir');
          setDataKurir(null);
          console.log(error);
        }
        if (data) {
          setDataKurir(data);
          setFetchErrorKurir(null);
        }
    }

    fetchDataPengiriman();
    fetchDataKurir();
  }, []);

  return (
    <div className="page dashboard">
      {fetchErrorKurir && (<p>{fetchErrorKurir}</p>)}
      {fetchErrorPengiriman && (<p>{fetchErrorPengiriman}</p>)}
      {dataKurir && dataPengiriman && (
        <div>
        <NavbarManajer />
      <div className="pengiriman-co">
        <h4 className="text-center text-danger p-3"></h4>
        <div className="card-container mx-auto my-5">
          <div className="mx-5">
            <h2>Pengiriman teratas</h2>
          </div>
          <div className="row card-row">
            <CardPengiriman dataPengiriman={dataPengiriman} />
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
      )}
    </div>
  );
}

function CardPengiriman(props) {
  // Ensure that props.dataPengiriman is an array before trying to access its properties
  const dataPengiriman = Array.isArray(props.dataPengiriman) ? props.dataPengiriman : [];

  if (dataPengiriman.length === 0) {
    <div>
      
    </div>
  } else if (dataPengiriman.length <= 3) {
    return (
      <div>

      </div>
    );

  } else {
    const displayedData = dataPengiriman.slice(0, 3);


  return (
    <div>
      <div className="card-row" style={{display: 'flex'}}>
      {displayedData.map((pengiriman) => (
        <Card key={pengiriman.id} className="text-center  mx-auto my-auto" style={{ width: '260px' }}>
          <Card.Img variant="top" src="..\src\assets\Sansevieria.png"></Card.Img>
          <Card.Header>{pengiriman.jenis_bunga}</Card.Header>
          <Card.Body>
            <Card.Title>{pengiriman.kurir}</Card.Title>
            <Card.Text>{pengiriman.alamat_pengiriman}</Card.Text>
            <Button variant="primary">Lihat Detail</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
    
  );
  }

  // Display only the first three items
  
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
