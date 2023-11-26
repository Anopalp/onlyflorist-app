/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavbarManajer from "../NavbarManajer";
import supabase from "../../config/supabaseClient";
import Modal from "react-bootstrap/Modal";

function DashboardManajer() {
  const [fetchErrorPengiriman, setFetchErrorPengiriman] = useState(null);
  const [dataPengiriman, setDataPengiriman] = useState(null);
  const [fetchErrorKurir, setFetchErrorKurir] = useState(null);
  const [dataKurir, setDataKurir] = useState(null);

  useEffect(() => {
    const fetchDataPengiriman = async () => {
      const { data, error } = await supabase.from("dataPengiriman").select();

      if (error) {
        setFetchErrorPengiriman("Could not fetch dataPengiriman");
        setDataPengiriman(null);
        console.log(error);
      }
      if (data) {
        setDataPengiriman(data);
        setFetchErrorPengiriman(null);
      }
    };

    const fetchDataKurir = async () => {
      const { data, error } = await supabase.from("dataKurir").select();

      if (error) {
        setFetchErrorKurir("Could not fetch dataKurir");
        setDataKurir(null);
        console.log(error);
      }
      if (data) {
        setDataKurir(data);
        setFetchErrorKurir(null);
      }
    };

    fetchDataPengiriman();
    fetchDataKurir();
  }, []);

  return (
    <div className="page dashboard">
      {fetchErrorKurir && <p>{fetchErrorKurir}</p>}
      {fetchErrorPengiriman && <p>{fetchErrorPengiriman}</p>}
      {dataKurir && dataPengiriman && (
        <div>
          <NavbarManajer />
          <div className="pengiriman-co">
            <h4 className="text-center text-danger p-3"></h4>
            <div className="card-container mx-auto my-5">
              <div className="mx-5">
                <h3
                  className="my-2"
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "aliceblue",
                  }}
                >
                  {dataPengiriman.length ? 'Pengiriman teratas' : 'Tidak ada pengiriman'}
                </h3>
              </div>
              <div className="row card-row">
                <CardPengiriman dataPengiriman={dataPengiriman} />
                <div className="buttons-container mt-3">
                  <div>
                    {dataPengiriman.length ? <Link to={"/daftar-pengiriman-manajer"}>
                      <Button variant="outline-light" className="rounded-5">
                        See More
                      </Button>
                    </Link> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="akun-co">
            <div className="card-container mx-auto my-5">
              <div className="mx-5">
                <h3
                  className="my-2"
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "aliceblue",
                  }}
                >
                  {dataKurir.length ? 'Akun kurir' : 'Tidak ada kurir'}
                </h3>
              </div>
              <div className="row card-row">
                <CardKurir dataKurir={dataKurir} />
                <div className="buttons-container mt-3">
                  <div>
                    {dataKurir.length ? <Link to={"/daftar-kurir"}>
                      <Button variant="outline-light" className="rounded-5">
                        See More
                      </Button>
                    </Link> : null}
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
  const dataPengiriman = Array.isArray(props.dataPengiriman)
    ? props.dataPengiriman
    : [];

  const [showModal, setShowModal] = useState(false);
  const [selectedPengiriman, setSelectedPengiriman] = useState(null);

  const handleShowModal = (pengiriman) => {
    setSelectedPengiriman(pengiriman);
    setShowModal(true);
  };

  if (dataPengiriman.length === 0) {
    return (
      <div>

      </div>
    );
  } else if (dataPengiriman.length <= 3) {
    return (
      <div>
        <div className="card-row" style={{ display: "flex" }}>
          {dataPengiriman.map((pengiriman) => (
            <Card
              key={pengiriman.id}
              className="text-center  mx-auto my-auto"
              style={{ width: "260px" }}
            >
              <Card.Img variant="top" src={pengiriman.image_url}></Card.Img>
              <Card.Header>{pengiriman.jenis_bunga}</Card.Header>
              <Card.Body>
                <Card.Title>{pengiriman.kurir}</Card.Title>
                <Card.Text>{pengiriman.alamat_pengiriman}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShowModal(pengiriman)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Pengiriman Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Render details of selectedPengiriman */}
            {selectedPengiriman && (
              <div>
                <p>Jenis Bunga: {selectedPengiriman.jenis_bunga}</p>
                <p>Kurir: {selectedPengiriman.kurir}</p>
                {/* Add other details as needed */}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            {/* Add additional buttons if needed */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  } else {
    const displayedData = dataPengiriman.slice(0, 3);

    return (
      <div>
        <div className="card-row" style={{ display: "flex" }}>
          {displayedData.map((pengiriman) => (
            <Card
              key={pengiriman.id}
              className="text-center  mx-auto my-auto"
              style={{ width: "260px" }}
            >
              <Card.Img variant="top" src={pengiriman.image_url}></Card.Img>
              <Card.Header>{pengiriman.jenis_bunga}</Card.Header>
              <Card.Body>
                <Card.Title>{pengiriman.kurir}</Card.Title>
                <Card.Text>{pengiriman.alamat_pengiriman}</Card.Text>
                <Card.Text>{pengiriman.nomor_telp_pelanggan}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShowModal(pengiriman)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Modal Trigger */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Pengiriman Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Render details of selectedPengiriman */}
            {selectedPengiriman && (
              <div>
                <p>Jenis Bunga: {selectedPengiriman.jenis_bunga}</p>
                <p>Kurir: {selectedPengiriman.kurir}</p>
                {/* Add other details as needed */}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            {/* Add additional buttons if needed */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  // Display only the first three items
}

function CardKurir(props) {
  const dataKurir = Array.isArray(props.dataKurir) ? props.dataKurir : [];
  const [showModal, setShowModal] = useState(false);
  const [selectedKurir, setSelectedKurir] = useState(null);

  const handleShowModal = (kurir) => {
    setSelectedKurir(kurir);
    setShowModal(true);
  };

  if (dataKurir.length === 0) {
    return (
      <div>

      </div>
    );
  } else if (dataKurir.length <= 3) {
    return (
      <div>
        <div className="card-row" style={{ display: "flex" }}>
          {dataKurir.map((kurir) => (
            <Card
              key={kurir.username}
              className="text-center mx-auto my-auto"
              style={{ width: "230px" }}
            >
              <Card.Header>{kurir.nama_lengkap}</Card.Header>
              <Card.Body>
                <Card.Title>{kurir.phone}</Card.Title>
                <Card.Text>{kurir.alamat}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShowModal(kurir)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Modal Trigger */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Kurir Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Render details of selectedKurir */}
            {selectedKurir && (
              <div>
                <p>Nama Lengkap: {selectedKurir.nama_lengkap}</p>
                <p>Nomor Telepon: {selectedKurir.phone}</p>
                <p>Alamat: {selectedKurir.alamat}</p>
                {/* Add other details as needed */}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            {/* Add additional buttons if needed */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  } else {
    const displayedData = dataKurir.slice(0, 3);

    return (
      <div>
        <div className="card-row" style={{ display: "flex" }}>
          {displayedData.map((kurir) => (
            <Card
              key={kurir.username}
              className="text-center mx-auto my-auto"
              style={{ width: "230px" }}
            >
              <Card.Header>{kurir.nama_lengkap}</Card.Header>
              <Card.Body>
                <Card.Title>{kurir.phone}</Card.Title>
                <Card.Text>{kurir.alamat}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShowModal(kurir)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Modal Trigger */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Kurir Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Render details of selectedKurir */}
            {selectedKurir && (
              <div>
                <p>Nama Lengkap: {selectedKurir.nama_lengkap}</p>
                <p>Nomor Telepon: {selectedKurir.phone}</p>
                <p>Alamat: {selectedKurir.alamat}</p>
                {/* Add other details as needed */}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            {/* Add additional buttons if needed */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default DashboardManajer;
